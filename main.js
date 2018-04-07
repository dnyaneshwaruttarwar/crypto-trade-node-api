var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var unirest = require('unirest');
var Promise = require('promise');
var cors = require('cors');
var Cryptopia = require('cryptopia-node');
var binance = require('node-binance-api');
var bittrex = require('node-bittrex-api');

//start body-parser configuration
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
var corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

app.use(cors(corsOptions));
//end body-parser configuration

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var server = app.listen(server_port, server_ip_address, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server started at host: ' + host);
    console.log('Server started at port: ' + port);
});

app.get('/sellOrder', function(request, response) {
    console.log(new Date().toLocaleTimeString() + new Date().getMilliseconds());
    var cryptopia = new Cryptopia('', '');
    cryptopia.gettradehistory("ETN/BTC", function(err, data) {
        console.log(new Date().toLocaleTimeString() + new Date().getMilliseconds());
        console.log(data);
    });
    var Request = unirest.get('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc');
    Request.header('Content-Type', 'application/json').end(function(data) {
        // console.log(new Date().toLocaleTimeString());
        response.status(200).send(data.body.result);
    });
});

app.get('/getTraidPair', function(request, response) {
    var exchange = request.query.exchange;
    var i = 0;
    if (exchange === "bittrex") {
        var Request = unirest.get('https://bittrex.com/api/v1.1/public/getmarketsummaries');
        Request.header('Content-Type', 'application/json').end(function(data) {
            var list = [];
            for (i = 0; i < data.body.result.leng; i++) {
                var obj = {};
                obj.pair = data.body.result[i].MarketName;
            }
            response.status(200).send(data.body.result);
        });
    }
});

app.post('/sellOrder', function(request, response) {
    var order = request.body;
    var Request = {};
    var market = '';
    if (order.exchange === 'bittrex') {

    } else if (order.exchange === 'binance') {

    } else if (order.exchange === 'cryptopia') {

    } else {
        response.end(JSON.stringify("exchange name is wrong"));
    }
});
app.post('/buyAndSellOrder', function(request, response) {
    var order = request.body;
    var Request = {};
    var market = '';
    var totalBtc = 0;
    if (order.exchange === 'bittrex') {
        console.log("Get Market Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
        market = 'BTC-' + order.buyCoin;
        // TODO: Need to remove
        market = 'BTC-SC';
        totalBtc = Number.parseFloat(order.totalBtc);
        bittrex.options({
            'apikey': order.apiKey,
            'apisecret': order.secretKey
        });

        Request = unirest.get('https://bittrex.com/api/v1.1/public/getorderbook?market=' + market + '&type=sell');
        Request.header('Content-Type', 'application/json').end(function(data) {
            console.log("Get Market Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            var buyPrice = Number.parseFloat(data.body.result[0].Rate.toFixed(8));
            // TODO: Need to remove
            buyPrice = 0.00000001;
            buyPrice = buyPrice - ((buyPrice * 400) / 100).toFixed(8);
            var quantity = totalBtc / buyPrice;
            order.sellPercent = Number.parseInt(order.sellPercent);
            var sellPrice = (buyPrice + ((buyPrice * order.sellPercent) / 100)).toFixed(8);
            sellPrice = Number.parseFloat(sellPrice);
            // TODO: Need to remove
            // quantity = 1000;
            sellPrice = 0.10001000;

            console.log("Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            bittrex.buylimit({ market: market, quantity: quantity, rate: sellPrice }, function(data, err) {
                console.log("Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                if (err) {
                    response.end(JSON.stringify("Error while placing buy order"));
                } else if (data && data.success) {
                    var orderId = data.result.uuid;
                    var cancelOrderTimeout = setTimeout(function() {
                        clearInterval(sellOrderInterval);
                        console.log("Cancel Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                        bittrex.cancel({ uuid: orderId }, function(data, err) {
                            console.log("Cancel Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                            if (err) {
                                response.end(JSON.stringify("Error while cancelling buy order"));
                            } else if (data && data.success) {
                                response.end(JSON.stringify("Order is not filled. cancel buy order"));
                            } else {
                                response.end(JSON.stringify("Error while cancelling buy order"));
                            }
                        });
                    }, 30000);
                    var sellOrderInterval = setInterval(function() {
                        console.log("Get Open Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                        bittrex.getopenorders({ market: market }, function(openOrders, err) {
                            console.log("Get Open Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                            if (openOrders && openOrders.success) {
                                if (openOrders.result) {
                                    if (openOrders.result.length > 0) {
                                        var isOrderOpen = false;
                                        for (var i = 0; i < openOrders.result.length; i++) {
                                            if (openOrders.result[i].OrderUuid == orderId) {
                                                isOrderOpen = true;
                                                break;
                                            }
                                        }
                                        if (!isOrderOpen) {
                                            clearTimeout(cancelOrderTimeout);
                                            clearInterval(sellOrderInterval);
                                            console.log("Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                            bittrex.selllimit({ market: market, quantity: quantity, rate: sellPrice }, function(data, err) {
                                                console.log("Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                                if (err) {
                                                    response.end(JSON.stringify("Error while placing sell order"));
                                                } else if (data && data.success) {
                                                    response.end(JSON.stringify("Sell Order is placed"));
                                                } else {
                                                    response.end(JSON.stringify("Sell Order is not placed"));
                                                }
                                            });
                                        }
                                    } else if (openOrders.result.length == 0) {
                                        clearTimeout(cancelOrderTimeout);
                                        clearInterval(sellOrderInterval);
                                        console.log("Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                        bittrex.selllimit({ market: market, quantity: quantity, rate: sellPrice }, function(data, err) {
                                            console.log("Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                            if (err) {
                                                response.end(JSON.stringify("Error while placing sell order"));
                                            } else if (data && data.success) {
                                                response.end(JSON.stringify("Sell Order is placed"));
                                            } else {
                                                response.end(JSON.stringify("Sell Order is not placed"));
                                            }
                                        });
                                    }
                                }
                            } else {
                                response.end(JSON.stringify("Error while open orders"));
                            }
                        });
                    }, 2000);
                } else {
                    response.end(JSON.stringify("Buy Order is not placed"));
                }
            });
            // response.end(JSON.stringify("Buy Price: " + buyPrice + " Sell Price: " + sellPrice));
        });
    } else if (order.exchange === 'binance') {
        console.log("Get Market Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
        market = order.buyCoin + 'BTC';
        // Need to remove
        market = 'QSPBTC';
        totalBtc = Number.parseFloat(order.totalBtc);
        binance.options({
            APIKEY: order.apiKey,
            APISECRET: order.secretKey
        });

        Request = unirest.get('https://www.binance.com/api/v1/depth?symbol=' + market + '&limit=10');
        Request.header('Content-Type', 'application/json').end(function(data) {
            console.log("Get Market Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            var buyPrice = Number.parseFloat(Number.parseFloat(data.body.asks[0][0]).toFixed(8));

            // TODO: Need to remove
            buyPrice = 0.00000110;
            // var percentPrice = Number.parseFloat(((buyPrice * 90) / 100).toFixed(8));
            // buyPrice = Number.parseFloat((buyPrice - percentPrice).toFixed(8));

            var quantity = (totalBtc / buyPrice);
            quantity = binance.roundStep(quantity, order.stepSize);
            quantity = Number.parseFloat(quantity);
            order.sellPercent = Number.parseInt(order.sellPercent);
            var sellPrice = buyPrice + ((buyPrice * order.sellPercent) / 100).toFixed(8);
            sellPrice = Number.parseFloat(sellPrice);
            // TODO: Need to remove
            sellPrice = 0.10001000;
            console.log("Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            binance.buy(market, quantity, buyPrice, { type: 'LIMIT' }, function(error, buyOrderRes) {
                console.log("Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                if (error) {
                    response.end(JSON.stringify("Error while placing buy order"));
                } else {
                    var orderId = buyOrderRes.orderId;
                    var cancelOrderTimeout = setTimeout(function() {
                        clearInterval(sellOrderInterval);
                        console.log("Cancel Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                        binance.cancel(market, orderId, function(error, cancelOrderRes) {
                            console.log("Cancel Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                            if (!error) {
                                response.end(JSON.stringify("Order is not filled. cancel buy order"));
                            } else {
                                response.end(JSON.stringify("Error while cancelling buy order"));
                            }
                        });
                    }, 30000);
                    var sellOrderInterval = setInterval(function() {
                        console.log("Get Open Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                        binance.orderStatus(market, orderId, function(error, orderStatusRes) {
                            console.log("Get Open Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                            if (!error) {
                                var status = orderStatusRes.status;
                                if (status == 'FILLED') {
                                    clearTimeout(cancelOrderTimeout);
                                    clearInterval(sellOrderInterval);
                                    console.log("Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                    binance.sell(market, quantity, sellPrice, { type: 'LIMIT' }, function(error, sellOrderRes) {
                                        console.log("Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                        if (error) {
                                            response.end(JSON.stringify("Error while sell order"));
                                        } else {
                                            response.end(JSON.stringify("Sell order placed"));
                                        }
                                    });
                                }
                            } else {
                                response.end(JSON.stringify("Error while getting order status"));
                            }
                        });
                    }, 5000);
                }
            });
            // response.end(JSON.stringify("Buy Price: " + buyPrice + " Sell Price: " + sellPrice));
        });
    } else if (order.exchange === 'cryptopia') {
        console.log("Get Market Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
        var cryptopia = new Cryptopia(order.apiKey, order.secretKey);
        market = order.buyCoin + '_BTC';
        market = 'ETN_BTC';
        totalBtc = Number.parseFloat(order.totalBtc);
        Request = unirest.get('https://www.cryptopia.co.nz/api/GetMarketOrders/' + market + '/10');

        Request.header('Content-Type', 'application/json').end(function(data) {
            console.log("Get Market Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            var firstSellOrder = data.body.Data.Sell[0];
            var buyPrice = Number.parseFloat(firstSellOrder.Price.toFixed(8));
            // TODO: Need to remove
            buyPrice = 0.00000001;
            var quantity = totalBtc / buyPrice;
            order.sellPercent = Number.parseInt(order.sellPercent);
            var sellPrice = (buyPrice + ((buyPrice * order.sellPercent) / 100)).toFixed(8);
            sellPrice = Number.parseFloat(sellPrice);
            // TODO: Need to remove
            sellPrice = 0.10001000;
            console.log("Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            cryptopia.submittrade(market, 'Buy', buyPrice, quantity, function(err, data) {
                console.log("Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                if (data && data.Success) {
                    response.end(JSON.stringify("Buy Price: " + Number.parseFloat(firstSellOrder.Price.toFixed(8)) + " Sell Price: " + sellPrice));
                    var orderId = data.Data.OrderId;
                    var cancelOrderTimeout = setTimeout(function() {
                        clearInterval(sellOrderInterval);
                        console.log("Cancel Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                        cryptopia.canceltrade('Buy', orderId, function(err, data) {
                            console.log("Cancel Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                            if (data && data.Success) {
                                response.end(JSON.stringify("Order is not filled. cancel buy order"));
                            } else {
                                response.end(JSON.stringify("Error while cancelling buy order"));
                            }
                        });
                    }, 30000);
                    var sellOrderInterval = setInterval(function() {
                        console.log("Get Open Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                        cryptopia.getopenorders(market, function(err, openOrders) {
                            console.log("Get Open Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                            if (openOrders && openOrders.Success) {
                                if (openOrders.Data) {
                                    if (openOrders.Data.length > 0) {
                                        var isOrderOpen = false;
                                        for (var i = 0; i < openOrders.Data.length; i++) {
                                            if (openOrders.Data[i].OrderId == orderId) {
                                                isOrderOpen = true;
                                                break;
                                            }
                                        }
                                        if (!isOrderOpen) {
                                            clearTimeout(cancelOrderTimeout);
                                            clearInterval(sellOrderInterval);
                                            console.log("Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                            cryptopia.submittrade(market, 'Sell', sellPrice, quantity, function(err, data) {
                                                console.log("Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                                if (data && data.Success) {
                                                    response.end(JSON.stringify("Sell Order Placed"));
                                                } else {
                                                    response.end(JSON.stringify("Error while placing sell order"));
                                                }
                                            });
                                        }
                                    } else if (openOrders.Data.length == 0) {
                                        clearTimeout(cancelOrderTimeout);
                                        clearInterval(sellOrderInterval);
                                        console.log("Sell Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                        cryptopia.submittrade(market, 'Sell', sellPrice, quantity, function(err, data) {
                                            console.log("Sell Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                                            if (data && data.Success) {
                                                response.end(JSON.stringify("Sell Order Placed"));
                                            } else {
                                                response.end(JSON.stringify("Error while placing sell order"));
                                            }
                                        });
                                    }
                                }
                            } else {
                                response.end(JSON.stringify("Error while open orders"));
                            }
                        });
                    }, 2000);
                } else {
                    response.end(JSON.stringify("Error while placing buy order"));
                }
            });
            // response.end(JSON.stringify("Buy Price: " + buyPrice + " Sell Price: " + sellPrice));
        });
    }
});