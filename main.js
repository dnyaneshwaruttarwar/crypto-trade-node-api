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

app.post('/buyAndSellOrder', function(request, response) {
    var order = request.body;
    var Request = {};
    var market = '';
    var totalBtc = 0;
    if (order.exchange === 'bittrex') {
        market = 'BTC-' + order.buyCoin;
        totalBtc = Number.parseFloat(order.totalBtc);
        bittrex.options({
            'apikey': order.apiKey,
            'apisecret': order.secretKey
        });
        Request = unirest.get('https://bittrex.com/api/v1.1/public/getorderbook?market=' + market + '&type=sell');
        Request.header('Content-Type', 'application/json').end(function(data) {
            var buyPrice = data.body.result[0].Rate.toFixed(8);
            var quantity = totalBtc / buyPrice;
            var sellPrice = buyPrice + ((buyPrice * order.sellPercent) / 100).toFixed(8);
            // bittrex.buymarket({ 'market': market, 'quantity': quantity, 'rate': buyPrice }, function(data) {
            //     if (data.sucsess) {
            //         bittrex.sellmarket({ 'market': market, 'quantity': quantity, 'rate': sellPrice }, function(data) {
            //             if (data.sucsess) {
            //                 return true;
            //             } else {
            //                 return false;
            //             }
            //         })
            //     } else {
            //         return 'Buy order is not placed';
            //     }
            // });
            response.end(JSON.stringify("Buy Price: " + buyPrice + " Sell Price: " + sellPrice));
        });

    } else if (order.exchange === 'binance') {
        market = order.buyCoin + 'BTC';
        totalBtc = Number.parseFloat(order.totalBtc);
        binance.options({
            APIKEY: order.apiKey,
            APISECRET: order.secretKey
        });
        Request = unirest.get('https://www.binance.com/api/v1/depth?symbol=' + market + '&limit=10');
        Request.header('Content-Type', 'application/json').end(function(data) {
            var buyPrice = Number.parseFloat(data.body.asks[0][0]).toFixed(8);
            var quantity = totalBtc / buyPrice;
            var sellPrice = buyPrice + ((buyPrice * order.sellPercent) / 100).toFixed(8);
            // binance.buy(market, quantity, buyPrice, { type: 'LIMIT' }, function(error, response) {
            //     if (error) {
            //         console.error("Something went wrong");
            //     } else {
            //         console.log("Limit Buy response", response);
            //         console.log("order id: " + response.orderId);
            //         var sellPrice = buyPrice + ((buyPrice * order.sellPercent) / 100).toFixed(8);
            //         // binance.sell(market, quantity, sellPrice, { type: 'LIMIT' }, function(error, response) {
            //         //     console.log("Limit Buy response", response);
            //         //     console.log("order id: " + response.orderId);
            //         // });
            //         // binance.sell(market, quantity, sellPrice);
            //         // response.status(200).send("order placed");
            //     }
            // });
            response.end(JSON.stringify("Buy Price: " + buyPrice + " Sell Price: " + sellPrice));
            // status(200).send("order placed buy price: " + buyPrice + " Sell Price: " + sellPrice);
        });
    } else if (order.exchange === 'cryptopia') {
        console.log(new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
        var cryptopia = new Cryptopia(order.apiKey, order.secretKey);
        market = order.buyCoin + '_BTC';
        totalBtc = Number.parseFloat(order.totalBtc);
        Request = unirest.get('https://www.cryptopia.co.nz/api/GetMarketOrders/' + market + '/10');
        Request.header('Content-Type', 'application/json').end(function(data) {
            var firstSellOrder = data.body.Data.Sell[0];
            var buyPrice = firstSellOrder.Price.toFixed(8);
            buyPrice = 0.00000001;
            var quantity = totalBtc / buyPrice;
            var sellPrice = buyPrice + ((buyPrice * order.sellPercent) / 100).toFixed(8);
            // console.log(new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            cryptopia.submittrade(market, 'Buy', buyPrice, quantity, function(err, data) {
                if (err) {
                    console.error(err);
                } else {
                    if (data && data.Success) {
                        console.log(new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
                        response.end(JSON.stringify("Buy Price: " + buyPrice + " Sell Price: " + sellPrice));
                        // var sellPrice = buyPrice + ((buyPrice * order.sellPercent) / 100).toFixed(8);
                        // cryptopia.submittrade(market, 'Sell', buyPrice, quantity, function(err, data) {
                        //     if (err) {
                        //         console.error(err);
                        //     } else {
                        //         console.log(new Date().toLocaleTimeString() + new Date().getMilliseconds());
                        //         console.log("Sell order placed");
                        //     }
                        // }); 
                    } else {
                        response.end(JSON.stringify("Error while placing order"));
                    }
                }
            });
            // response.end(JSON.stringify("Buy Price: " + buyPrice + " Sell Price: " + sellPrice));
        });
    }
});