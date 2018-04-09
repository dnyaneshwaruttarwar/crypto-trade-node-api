webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(/assets/img/sidebar-5.jpg)\"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var shared_service_1 = __webpack_require__("./src/app/shared/service/shared.service.ts");
var AppComponent = (function () {
    function AppComponent(location, sharedService, db) {
        this.location = location;
        this.sharedService = sharedService;
        this.db = db;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.list('exchange').valueChanges()
            .subscribe(function (data) {
            _this.items = data;
        });
    };
    AppComponent.prototype.isMap = function (path) {
        var title = this.location.prepareExternalUrl(this.location.path());
        title = title.slice(1);
        if (path === title) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            shared_service_1.SharedService,
            database_1.AngularFireDatabase])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var angularfire2_1 = __webpack_require__("./node_modules/angularfire2/index.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var navbar_module_1 = __webpack_require__("./src/app/shared/navbar/navbar.module.ts");
var sidebar_module_1 = __webpack_require__("./src/app/sidebar/sidebar.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var exchange_component_1 = __webpack_require__("./src/app/exchange/exchange.component.ts");
var coin_component_1 = __webpack_require__("./src/app/coin/coin.component.ts");
var trade_component_1 = __webpack_require__("./src/app/trade/trade.component.ts");
var shared_service_1 = __webpack_require__("./src/app/shared/service/shared.service.ts");
var trade_service_1 = __webpack_require__("./src/app/trade/trade.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                exchange_component_1.ExchangeComponent,
                coin_component_1.CoinComponent,
                trade_component_1.TradeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                navbar_module_1.NavbarModule,
                sidebar_module_1.SidebarModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                ngx_bootstrap_1.TypeaheadModule.forRoot()
            ],
            providers: [
                shared_service_1.SharedService,
                trade_service_1.TradeService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var exchange_component_1 = __webpack_require__("./src/app/exchange/exchange.component.ts");
var coin_component_1 = __webpack_require__("./src/app/coin/coin.component.ts");
var trade_component_1 = __webpack_require__("./src/app/trade/trade.component.ts");
var routes = [
    { path: 'exchange', component: exchange_component_1.ExchangeComponent },
    { path: 'coin', component: coin_component_1.CoinComponent },
    { path: 'trade', component: trade_component_1.TradeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: '', redirectTo: 'user', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/coin/coin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/coin/coin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">Coin</h4>\n                        </div>\n                        <div class=\"content table-responsive table-full-width\">\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/coin/coin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CoinComponent = (function () {
    function CoinComponent() {
    }
    CoinComponent = __decorate([
        core_1.Component({
            selector: 'app-coin',
            template: __webpack_require__("./src/app/coin/coin.component.html"),
            styles: [__webpack_require__("./src/app/coin/coin.component.css")]
        })
    ], CoinComponent);
    return CoinComponent;
}());
exports.CoinComponent = CoinComponent;


/***/ }),

/***/ "./src/app/exchange/exchange.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/exchange/exchange.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">Exchange</h4>\n                            <p class=\"category\">Here is a subtitle for this table</p>\n                        </div>\n                        <div class=\"content table-responsive table-full-width\">\n                            <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>Name</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Danny</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/exchange/exchange.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ExchangeComponent = (function () {
    function ExchangeComponent() {
    }
    ExchangeComponent = __decorate([
        core_1.Component({
            selector: 'app-exchange',
            template: __webpack_require__("./src/app/exchange/exchange.component.html"),
            styles: [__webpack_require__("./src/app/exchange/exchange.component.css")]
        })
    ], ExchangeComponent);
    return ExchangeComponent;
}());
exports.ExchangeComponent = ExchangeComponent;


/***/ }),

/***/ "./src/app/shared/constant/apiUrl.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = {
    // WEBSERVICE_URL: 'http://crypto-trade-node-api-crypto-trade-node-api.193b.starter-ca-central-1.openshiftapps.com',
    // WEBSERVICE_URL: 'http://localhost:8080',
    // WEBSERVICE_URL: 'https://crypto-api-node.firebaseapp.com',
    // WEBSERVICE_URL: 'https://us-central1-crypto-api-node.cloudfunctions.net',
    WEBSERVICE_URL: '',
    GET_SELL_ORDER: '/sellOrder',
    BUY_AND_SELL_ORDER: '/buyAndSellOrder'
};


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <p class=\"hidden-lg hidden-md\">{{getTitle()}}</p>\n                    </a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\">\n                        <p>Log out</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var NavbarComponent = (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var title = this.location.prepareExternalUrl(this.location.path());
        title = title.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === title) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'navbar-cmp',
            template: __webpack_require__("./src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [common_1.Location, core_1.ElementRef])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var navbar_component_1 = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [navbar_component_1.NavbarComponent],
            exports: [navbar_component_1.NavbarComponent]
        })
    ], NavbarModule);
    return NavbarModule;
}());
exports.NavbarModule = NavbarModule;


/***/ }),

/***/ "./src/app/shared/service/shared.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var SharedService = (function () {
    function SharedService(db) {
        this.db = db;
    }
    SharedService.prototype.getExchnageList = function () {
        return this.db.list('exchange').valueChanges();
    };
    SharedService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"#\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-white.png\" />\n            </div>\n            Crypto Don\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        <li *ngIf=\"isMobileMenu()\">\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        <li class=\"separator hidden-lg hidden-md\" *ngIf=\"isMobileMenu()\"></li>\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
exports.ROUTES = [
    { path: 'exchange', title: 'Exchange', icon: 'pe-7s-user', class: '' },
    { path: 'coin', title: 'Coin', icon: 'pe-7s-user', class: '' },
    { path: 'trade', title: 'Trade', icon: 'pe-7s-user', class: '' },
    { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_component_1.SidebarComponent],
            exports: [sidebar_component_1.SidebarComponent]
        })
    ], SidebarModule);
    return SidebarModule;
}());
exports.SidebarModule = SidebarModule;


/***/ }),

/***/ "./src/app/trade/trade.component.css":
/***/ (function(module, exports) {

module.exports = ".awesomplete {\r\n    display: block !important;\r\n}"

/***/ }),

/***/ "./src/app/trade/trade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">Trade Buy</h4>\n                        </div>\n                        <div class=\"content\">\n                            <form>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Exchange</label>\n                                            <select class=\"form-control\" [(ngModel)]=\"order.exchange\" #exchange=\"ngModel\" name=\"exchange\" (change)=\"onSelectExchange()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>-- Please Select --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let exchange of exchangeList\" [value]=\"exchange.name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{exchange.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>API Key</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"API Key\" value=\"\" [(ngModel)]=\"order.apiKey\" #apiKey=\"ngModel\" name=\"apiKey\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Secret Key</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Secret Key\" value=\"\" [(ngModel)]=\"order.secretKey\" #secretKey=\"ngModel\" name=\"secretKey\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Total BTC</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Total BTC to buy\" value=\"\" [(ngModel)]=\"order.totalBtc\" #totalBtc=\"ngModel\" name=\"totalBtc\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Sell Percentage</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Sell Percentage\" value=\"\" [(ngModel)]=\"order.sellPercent\" #sellPercent=\"ngModel\" name=\"sellPercent\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Coin</label>\n                                            <input [(ngModel)]=\"order.buyCoin\" name=\"buyCoin\" [typeahead]=\"selectedExchangeCoins\" class=\"form-control\" (typeaheadOnSelect)=\"onSelectBuyCoin()\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">Trade Sell</h4>\n                        </div>\n                        <div class=\"content\">\n                            <form>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Exchange</label>\n                                            <select class=\"form-control\" [(ngModel)]=\"order.exchange\" #exchange=\"ngModel\" name=\"exchange\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>-- Please Select --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let exchange of exchangeList\" [value]=\"exchange.name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{exchange.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>API Key</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"API Key\" value=\"\" [(ngModel)]=\"order.apiKey\" #apiKey=\"ngModel\" name=\"apiKey\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Secret Key</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Secret Key\" value=\"\" [(ngModel)]=\"order.secretKey\" #secretKey=\"ngModel\" name=\"secretKey\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Coin</label>\n                                            <input [(ngModel)]=\"order.sellCoin\" name=\"sellCoin\" [typeahead]=\"selectedExchangeCoins\" class=\"form-control\" (typeaheadOnSelect)=\"onSelectSellCoin()\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/trade/trade.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var database_1 = __webpack_require__("./node_modules/angularfire2/database/index.js");
var trade_service_1 = __webpack_require__("./src/app/trade/trade.service.ts");
var TradeComponent = (function () {
    function TradeComponent(db, tradeService) {
        this.db = db;
        this.tradeService = tradeService;
        this.exchangeList = [];
        this.order = {};
        this.selectedExchangeCoins = [];
    }
    TradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.list('exchange').valueChanges()
            .subscribe(function (data) {
            _this.exchangeList = data;
            for (var i = 0; i < _this.exchangeList.length; i++) {
                var exchange = _this.exchangeList[i];
                _this.exchangeList[i].coinPairList = [];
                _this.exchangeList[i].coinPairList = Object.keys(exchange.coins);
                var coins = exchange.coins;
                var coinList = [];
                // for (const key in coins) {
                //     coinList.push(coins[key]);
                // }
                // this.exchangeList[i].coins = coinList;
                _this.exchangeList[i].coins = exchange.coins;
            }
        });
        this.tradeService.getTimerValue()
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    TradeComponent.prototype.onSelectExchange = function () {
        for (var i = 0; i < this.exchangeList.length; i++) {
            var exchange = this.exchangeList[i];
            if (this.order.exchange === exchange.name) {
                this.selectedExchangeCoins = exchange.coinPairList;
                this.selectedFireaseCoins = exchange.coins;
                break;
            }
        }
    };
    TradeComponent.prototype.onSelectBuyCoin = function () {
        console.log("Buy Order Start: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
        if (this.order.exchange === 'binance') {
            this.order.stepSize = this.selectedFireaseCoins[this.order.buyCoin].stepSize;
        }
        this.tradeService.buyAndSellOrder(this.order)
            .subscribe(function (data) {
            console.log("Buy Order End: " + new Date().toLocaleTimeString() + ' ' + new Date().getMilliseconds());
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    TradeComponent.prototype.onSelectSellCoin = function () {
    };
    TradeComponent = __decorate([
        core_1.Component({
            selector: 'app-trade',
            template: __webpack_require__("./src/app/trade/trade.component.html"),
            styles: [__webpack_require__("./src/app/trade/trade.component.css")]
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase,
            trade_service_1.TradeService])
    ], TradeComponent);
    return TradeComponent;
}());
exports.TradeComponent = TradeComponent;


/***/ }),

/***/ "./src/app/trade/trade.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var apiUrl_1 = __webpack_require__("./src/app/shared/constant/apiUrl.ts");
var TradeService = (function () {
    function TradeService(httpClient) {
        this.httpClient = httpClient;
    }
    TradeService.prototype.getLastSellOrders = function (exchange, buyCoinPair) {
        return this.httpClient.get(apiUrl_1.API_URL.WEBSERVICE_URL + apiUrl_1.API_URL.GET_SELL_ORDER);
    };
    TradeService.prototype.buyAndSellOrder = function (order) {
        return this.httpClient.post(apiUrl_1.API_URL.WEBSERVICE_URL + apiUrl_1.API_URL.BUY_AND_SELL_ORDER, order);
    };
    TradeService.prototype.getTimerValue = function () {
        return this.httpClient.get(apiUrl_1.API_URL.WEBSERVICE_URL + '/timestamp');
    };
    TradeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TradeService);
    return TradeService;
}());
exports.TradeService = TradeService;


/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Edit Profile</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Company (disabled)</label>\n                                        <input type=\"text\" class=\"form-control\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>Username</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Email address</label>\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>First Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>Address</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>City</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Country</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Postal Code</label>\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>About Me</label>\n                                        <textarea rows=\"5\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\">\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\"/>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/faces/face-3.jpg\" alt=\"...\"/>\n\n                                <h4 class=\"title\">Mike Andrew<br />\n                                    <small>michael24</small>\n                                </h4>\n                            </a>\n                        </div>\n                        <p class=\"description text-center\"> \"Lamborghini Mercy <br>\n                            Your chick she so thirsty <br>\n                            I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n                    <hr>\n                    <div class=\"text-center\">\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var notification_1 = __webpack_require__("./src/app/util/notification.ts");
var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
        notification_1.NotificationUtil.success('yes');
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/app/util/notification.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationUtil = (function () {
    function NotificationUtil() {
    }
    NotificationUtil.success = function (message, from, align) {
        if (from === void 0) { from = 'top'; }
        if (align === void 0) { align = 'right'; }
        $.notify({
            icon: 'pe-7s-gift',
            message: message
        }, {
            type: 'success',
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationUtil.error = function (message, from, align) {
        if (from === void 0) { from = 'top'; }
        if (align === void 0) { align = 'right'; }
        $.notify({
            icon: 'pe-7s-gift',
            message: message
        }, {
            type: 'danger',
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationUtil.info = function (message, from, align) {
        if (from === void 0) { from = 'top'; }
        if (align === void 0) { align = 'right'; }
        $.notify({
            icon: 'pe-7s-gift',
            message: message
        }, {
            type: 'info',
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationUtil.warning = function (message, from, align) {
        if (from === void 0) { from = 'top'; }
        if (align === void 0) { align = 'right'; }
        $.notify({
            icon: 'pe-7s-gift',
            message: message
        }, {
            type: 'warning',
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationUtil;
}());
exports.NotificationUtil = NotificationUtil;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    // firebase: {
    //     apiKey: 'AIzaSyBXrq9usJMACicQm4bnTguzmUavZl-yV54',
    //     authDomain: 'crypto-app-ee3dc.firebaseapp.com',
    //     databaseURL: 'https://crypto-app-ee3dc.firebaseio.com/',
    //     projectId: 'crypto-app-ee3dc',
    //     messagingSenderId: '785797580999'
    // },
    firebase: {
        apiKey: 'AIzaSyBhSeaxEtz-8Uz-760A_MD5SBlsuMawfNA',
        authDomain: 'crypto-api-9630b.firebaseapp.com',
        databaseURL: 'https://crypto-api-9630b.firebaseio.com/',
        projectId: 'crypto-api-9630b',
        messagingSenderId: '250972695193'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map