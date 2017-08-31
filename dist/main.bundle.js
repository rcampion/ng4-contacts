webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_group_list_group_list_component__ = __webpack_require__("../../../../../src/app/group-list/group-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_group_group_component__ = __webpack_require__("../../../../../src/app/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_users_users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_users_user__ = __webpack_require__("../../../../../src/app/users/user.ts");










// Route config let's you map routes to components
var routes = [
    { path: 'authenticate', component: __WEBPACK_IMPORTED_MODULE_7__app_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__app_login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__app_login_login_component__["a" /* LoginComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_8__app_users_users__["a" /* Users */], },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_9__app_users_user__["a" /* User */], },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_about_about_component__["a" /* AboutComponent */] },
    // map '/home' to the home component
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__app_home_home_component__["a" /* HomeComponent */],
    },
    // map '/about' to the about component
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__app_about_about_component__["a" /* AboutComponent */],
    },
    // map '/contacts' to the contact list component
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_3__app_contact_list_contact_list_component__["a" /* ContactListComponent */],
    },
    // map '/contact' to new contact details component
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_4__app_contact_contact_component__["a" /* ContactComponent */]
    },
    // map '/contact/:id' to contact details component
    {
        path: 'contact/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__app_contact_contact_component__["a" /* ContactComponent */]
    },
    // map '/groups' to the group list component
    {
        path: 'groups',
        component: __WEBPACK_IMPORTED_MODULE_5__app_group_list_group_list_component__["a" /* GroupListComponent */],
    },
    // map '/group/:id' to group details component
    {
        path: 'group/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__app_group_group_component__["a" /* GroupComponent */]
    },
    // map '/group' to group details component
    {
        path: 'group',
        component: __WEBPACK_IMPORTED_MODULE_6__app_group_group_component__["a" /* GroupComponent */]
    }
    /* ,
    // map '/' to '/contacts' as our default route
    {
      path: '',
      redirectTo: '/contacts',
      pathMatch: 'full'
    },*/
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>About Us</h1>\n\n<pre>\nThis is an Angular Demo application.\n\nDemonstrates CRUD and Search on Contacts and Contact Groups.\n\nDemonstrates Paging of Items.\n\nDemonstrates Routing.\n\nDemonstrates Security.\n\n</pre>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n\t<a href=\"http://www.zdslogic.com\" target=\"_blank\"> <img\n\t\tsrc=\"assets/ZdsLogic_Technologies_Small.png\"\n\t\talt=\"ZdsLogic Technologies\">\n\t</a>\n</h1>\n\n<nav class=\"navbar navbar-dark bg-inverse\">\n\n\t<ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Home</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"about\">About</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"contacts\">Contacts</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"groups\">Groups</a></li>\n\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"users\">Users</a></li>\n\t\t<li *ngIf=\"!loginService.isAuthenticated()\" class=\"nav-item\"><a\n\t\t\tclass=\"nav-link\" routerLink=\"login\">Login</a></li>\n\t\t<li *ngIf=\"loginService.isAuthenticated()\" class=\"nav-item\"><a\n\t\t\tclass=\"nav-link\" routerLink=\"logout\">Logout</a></li>\n\t</ul>\n\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_hmac_http_client__ = __webpack_require__("../../../../../src/app/utils/hmac-http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__ = __webpack_require__("../../../../../src/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_groups_service__ = __webpack_require__("../../../../../src/services/groups.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(router, loginService) {
        var self = this;
        this.loginService = loginService;
        router.events.subscribe(function (e) {
            if (e.url === '/logout') {
                if (loginService.isAuthenticated()) {
                    self.logout();
                }
            }
            if ((e.url !== '/authenticate') && (e.url !== '/home') && (e.url !== '/about')) {
                if (!loginService.isAuthenticated()) {
                    router.navigate(['/authenticate']);
                }
                else {
                    loginService.sendLoginSuccess();
                }
            }
        });
    }
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_2__utils_hmac_http_client__["a" /* HmacHttpClient */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export myHttpClient */
/* unused harmony export hmacHttpClient */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__group_group_component__ = __webpack_require__("../../../../../src/app/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__group_list_group_list_component__ = __webpack_require__("../../../../../src/app/group-list/group-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__group_members_group_members_component__ = __webpack_require__("../../../../../src/app/group-members/group-members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__group_member_selector_group_member_selector_component__ = __webpack_require__("../../../../../src/app/group-member-selector/group-member-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_service__ = __webpack_require__("../../../../../src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_account_events_service__ = __webpack_require__("../../../../../src/services/account.events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_utils_utils_module__ = __webpack_require__("../../../../../src/app/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_hmac_http_client__ = __webpack_require__("../../../../../src/app/utils/hmac-http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__table_table__ = __webpack_require__("../../../../../src/app/table/table.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// import {ContactService} from '../services/contacts.service';
// import {GroupService} from '../services/groups.service';

// import * as AppUtils from './utils/app.utils';
// import { IsAuthorized } from '../app/utils/is-authorized.directive';






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_list_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__group_group_component__["a" /* GroupComponent */],
            __WEBPACK_IMPORTED_MODULE_11__group_list_group_list_component__["a" /* GroupListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__group_members_group_members_component__["a" /* GroupMembersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__group_member_selector_group_member_selector_component__["a" /* GroupMemberSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_21__table_table__["a" /* TableElementsCount */],
            __WEBPACK_IMPORTED_MODULE_21__table_table__["b" /* TablePagination */],
            __WEBPACK_IMPORTED_MODULE_21__table_table__["c" /* TableSort */],
            __WEBPACK_IMPORTED_MODULE_14__users_users__["a" /* Users */],
            __WEBPACK_IMPORTED_MODULE_15__users_user__["a" /* User */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__app_utils_utils_module__["a" /* UtilsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_17__services_account_events_service__["a" /* AccountEventsService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */],
                useFactory: hmacHttpClient,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["h" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_17__services_account_events_service__["a" /* AccountEventsService */]],
                multi: false
            }
        ],
        /*
          providers: [
            {
              provide: Http,
              useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, accountEventService: AccountEventsService) => {
                return new HmacHttpClient(xhrBackend, requestOptions, accountEventService);
              },
              deps: [XHRBackend, RequestOptions, AccountEventsService],
              multi: false
            }]
          ,
        */
        bootstrap: [__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* AppComponent */]]
    })
], AppModule);

function myHttpClient(xhrBackend, requestOptions, accountEventService) {
    return new __WEBPACK_IMPORTED_MODULE_19__utils_hmac_http_client__["a" /* HmacHttpClient */](xhrBackend, requestOptions, accountEventService);
}
;
function hmacHttpClient(xhrBackend, requestOptions, accountEventService) {
    return new __WEBPACK_IMPORTED_MODULE_19__utils_hmac_http_client__["a" /* HmacHttpClient */](xhrBackend, requestOptions, accountEventService);
}
;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return webServiceEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultItemsCountPerPage; });
var webServiceEndpoint = 'https://www.zdslogic.com/ng4-contacts-server/api';
// export const webServiceEndpoint = 'http://localhost:8080/ng4-contacts-server/api';
var defaultItemsCountPerPage = 10;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/common/loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = showLoading;
/* harmony export (immutable) */ __webpack_exports__["a"] = hideLoading;
function showLoading() {
    console.log('loading');
}
function hideLoading() {
    console.log('loaded');
}
//# sourceMappingURL=loader.js.map

/***/ }),

/***/ "../../../../../src/app/common/pagination.ts":
/***/ (function(module, exports) {

// http://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Pageable.html
//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "../../../../../src/app/contact-list/contact-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"contactPage != null\">\n\n    <div id=\"top\" class=\"row\">\n        <div class=\"col-sm-3\">\n            <h2>Contacts</h2>\n        </div>\n        <div class=\"col-sm-6\">\n\n            <div class=\"input-group h2\">\n                <input name=\"search_input\" class=\"form-control\" id=\"search_input\" type=\"text\" placeholder=\"Search\">\n\t\t\t\t<span class=\"btn btn-primary input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-success btn-xs glyphicon glyphicon-search\" type=\"button\" (click)=\"search()\"> Search\n                    </button>\n                 </span>\n\t\t\t\t<span class=\"btn btn-primary input-group-btn\">\t\t\t\t\n\t\t\t\t\t<button class=\"btn btn-success btn-xs glyphicon glyphicon-new-window\" type=\"button\" (click)=\"add()\"> New Contact\n                    </button>                                        \n\t\t\t\t</span>\n            </div>\n        </div>\n    </div> \n\n    <hr/>\n    <div id=\"list\" class=\"row\">\n\n        <div class=\"table-responsive col-md-12\">\n <!--       <table class=\"table table-striped\" cellspacing=\"0\" cellpadding=\"0\"> -->\n            <table class=\"table table-striped\">\n                <thead>\n                <tr>\n                    <th><table-sort [table]=\"self\" [page]=\"contactPage\" [label]=\"'First Name'\" [property]=\"'firstName'\" ></table-sort></th>\n                    <th><table-sort [table]=\"self\" [page]=\"contactPage\" [label]=\"'Last Name'\" [property]=\"'lastName'\" ></table-sort></th>\n                    <th><table-sort [table]=\"self\" [page]=\"contactPage\" [label]=\"'Company'\" [property]=\"'company'\" ></table-sort></th>\n                    <th class=\"actions\">Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n\n            <tr *ngFor=\"let contact of contactPage.content\"> \n                    <td (click)=\"show(contact)\">{{contact.firstName}}</td>\n                    <td (click)=\"show(contact)\">{{contact.lastName}}</td>\n                    <td (click)=\"show(contact)\">{{contact.company}}</td>\n                    <td class=\"actions\">\n                        <a class=\"btn btn-success btn-xs\" (click)=\"show(contact)\">Details</a>\n                        <!--a class=\"btn btn-warning btn-xs\" href=\"edit.html\">Edit</a-->\n                        <a class=\"btn btn-danger btn-xs\" (click)=\"currentContact=contact\" data-toggle=\"modal\" data-target=\"#delete-modal\">Delete</a>\n                    </td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n    </div> <!-- /#list -->\n\n    <table-pagination [table]=\"self\" [page]=\"contactPage\"></table-pagination>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\"><span aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"modalLabel\">Delete contact</h4>\n                </div>\n                <div class=\"modal-body\">\n                    Do you want to remove this item ?\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" (click)=\"delete(currentContact)\" class=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-dismiss=\"modal\">No</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_loader__ = __webpack_require__("../../../../../src/app/common/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__ = __webpack_require__("../../../../../src/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_base_http_service__ = __webpack_require__("../../../../../src/services/base-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ContactListComponent = (function () {
    function ContactListComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
        this.contacts = [];
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var observable = this.fetchPage(0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
        observable.subscribe(function () {
        }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
        this.self = this;
    };
    ContactListComponent.prototype.search = function () {
        var _this = this;
        var searchString = document.getElementById('search_input').value;
        if (searchString !== '') {
            var observable = this.contactService.searchContacts(searchString, 0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
            observable.subscribe(function (contactPage) { return _this.contactPage = contactPage; });
            return observable;
        }
        else {
            var observable = this.fetchPage(0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
            Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
            observable.subscribe(function () {
            }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
            return observable;
        }
    };
    ContactListComponent.prototype.fetchPage = function (pageNumber, pageSize, sort) {
        var _this = this;
        this.pageNumber = pageNumber;
        var observable = this.contactService.findContacts(pageNumber, pageSize, sort);
        observable.subscribe(function (contactPage) { return _this.contactPage = contactPage; });
        return observable;
    };
    ContactListComponent.prototype.show = function (contact) {
        this.router.navigate(['/contact', contact.id]);
    };
    ContactListComponent.prototype.add = function (contact) {
        this.router.navigate(['/contact']);
    };
    ContactListComponent.prototype.back = function () {
        this.router.navigate(['/ContactList']);
    };
    ;
    ContactListComponent.prototype.delete = function (contact) {
        var _this = this;
        var observable = this.contactService.remove(contact.id);
        Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
        observable.switchMap(function () {
            return _this.fetchPage(_this.pageNumber, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        }).subscribe(function (r) {
            _this.fetchPage(_this.pageNumber, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__("../../../../../src/app/contact-list/contact-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-list/contact-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_5__services_base_http_service__["a" /* BaseHttpService */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactListComponent);

var _a, _b;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\t<div class=\"panel-heading text-center\">\n\t\t<h3 *ngIf=\"!contact.id\">Detail - New contact</h3>\n\t\t<h3 *ngIf=\"contact.id\">Detail - {{ contact.firstName }} {{\n\t\t\tcontact.lastName }}</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<form class=\"form-horizontal\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"firstName\" class=\"col-sm-2 control-label\">First\n\t\t\t\t\tname</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"firstNameInput\" placeholder=\"First Name\"\n\t\t\t\t\t\t[formControl]=\"form.get('firstName')\" [(ngModel)]=\"contact.firstName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"lastName\" class=\"col-sm-2 control-label\">Last\n\t\t\t\t\tname</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"lastNameInput\" placeholder=\"Last Name\"\n\t\t\t\t\t\t[formControl]=\"form.get('lastName')\" [(ngModel)]=\"contact.lastName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"company\" class=\"col-sm-2 control-label\">Company</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"companyInput\" placeholder=\"Company\"\n\t\t\t\t\t\t[formControl]=\"form.get('company')\" [(ngModel)]=\"contact.company\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"title\" class=\"col-sm-2 control-label\">Title</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"titleInput\" placeholder=\"Title\"\n\t\t\t\t\t\t[formControl]=\"form.get('title')\" [(ngModel)]=\"contact.title\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"back()\">Back</button>\n\t\t\t</div>\n\n\t\t</form>\n\t</div>\n</div>\n\n<!--  \n<div class=\"panel panel-default\" *ngIf=\"contact.id\">\n  <div class=\"panel-heading text-center\">\n    <h3>Groups</h3>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>\n          <select class=\"form-control\" [(ngModel)]=\"selectedGroupId\" placeholder=\"Select group\">\n            <option *ngFor=\"#group of remainingGroups\" [value]=\"group.id\">\n              {{ group.name }}\n            </option>\n          </select>\n        </td>\n        <td>\n          <button type=\"button\" class=\"fa fa-plus btn btn-primary pull-right\" (click)=\"addSelectedGroup()\" (disabled)=\"!selectedGroupId\">\n          </button>\n        </td>\n      </tr>\n      <tr *ngFor=\"#contactGroup of contactGroups\">\n        <td>{{ contactGroup.group.name }}</td>\n        <td>            \n          <button type=\"button\" class=\"fa fa-trash btn btn-danger pull-right\" (click)=\"removeGroup(contactGroup)\">\n          </button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n-->\n<!--  \n<div *ngIf=\"contact.id\">\n  <contact-info-list></contact-info-list>\n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_contact__ = __webpack_require__("../../../../../src/models/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_contacts_service__ = __webpack_require__("../../../../../src/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__ = __webpack_require__("../../../../../src/services/base-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactComponent = (function () {
    function ContactComponent(contactService, router, route, formBuilder, httpService) {
        var _this = this;
        this.contactService = contactService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.selectedGroupId = null;
        this.contact = new __WEBPACK_IMPORTED_MODULE_4__models_contact__["a" /* Contact */]('');
        route.params.subscribe(function (params) { _this.id = params['id']; });
        if (this.id) {
            var self_1 = this;
            var contactGroupParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* URLSearchParams */]();
            var passedId = Number(this.id);
            contactService
                .get(passedId)
                .subscribe(function (contact) { return self_1.contact = contact; });
        }
        this.form = this.formBuilder.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'title': [''],
            'company': [''],
            'imageURL': [''],
            'skype': [''],
            'twitter': ['']
        });
    }
    ContactComponent.prototype.back = function () {
        this.router.navigate(['/contacts']);
    };
    ;
    ContactComponent.prototype.save = function () {
        var self = this;
        var isNew = !this.contact.id;
        this.contactService.save(this.contact)
            .subscribe(function (response) {
            if (isNew) {
                alert('New contact created');
            }
            else {
                alert('Contact updated');
            }
            self.back();
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_contacts_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__["a" /* BaseHttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_contacts_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_contacts_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__["a" /* BaseHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__["a" /* BaseHttpService */]) === "function" && _e || Object])
], ContactComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/group-list/group-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group-list/group-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"groupPage != null\">\n\n    <div id=\"top\" class=\"row\">\n        <div class=\"col-sm-3\">\n            <h2>Contact Groups</h2>\n        </div>\n        <div class=\"col-sm-6\">\n\n            <div class=\"input-group h2\">\n                <input name=\"search_input\" class=\"form-control\" id=\"search_input\" type=\"text\" placeholder=\"Search\">\n\t\t\t\t<span class=\"btn btn-primary input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-success btn-xs glyphicon glyphicon-search\" type=\"button\" (click)=\"search()\"> Search\n                    </button>\n                 </span>\n\t\t\t\t<span class=\"btn btn-primary input-group-btn\">\t\t\t\t\n\t\t\t\t\t<button class=\"btn btn-success btn-xs glyphicon glyphicon-new-window\" type=\"button\" (click)=\"add()\"> New Group\n                    </button>                                        \n\t\t\t\t</span>\n            </div>\n        </div>\n    </div> \n\n    <hr/>\n    <div id=\"list\" class=\"row\">\n\n        <div class=\"table-responsive col-md-12\">\n            <table class=\"table table-striped\">\n                <thead>\n                <tr>\n                    <th><table-sort [table]=\"self\" [page]=\"groupPage\" [label]=\"'Group Name'\" [property]=\"'groupName'\" ></table-sort></th>\n                    <th><table-sort [table]=\"self\" [page]=\"groupPage\" [label]=\"'Description'\" [property]=\"'groupDescription'\" ></table-sort></th>\n                    <th class=\"actions\">Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n\n            <tr *ngFor=\"let group of groupPage.content\"> \n                    <td (click)=\"show(group)\">{{group.groupName}}</td>\n                    <td (click)=\"show(group)\">{{group.groupDescription}}</td>\n                    <td class=\"actions\">\n                        <a class=\"btn btn-success btn-xs\" (click)=\"show(group)\">Details</a>\n                        <!--a class=\"btn btn-warning btn-xs\" href=\"edit.html\">Edit</a-->\n                        <a class=\"btn btn-danger btn-xs\" (click)=\"currentGroup=group\" data-toggle=\"modal\" data-target=\"#delete-modal\">Delete</a>\n                    </td>\n                </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n    </div> <!-- /#list -->\n\n    <table-pagination [table]=\"self\" [page]=\"groupPage\"></table-pagination>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Fechar\"><span aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"modalLabel\">Delete group</h4>\n                </div>\n                <div class=\"modal-body\">\n                    Do you want to remove this item ?\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" (click)=\"delete(currentGroup)\" class=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-dismiss=\"modal\">No</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/group-list/group-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_loader__ = __webpack_require__("../../../../../src/app/common/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_groups_service__ = __webpack_require__("../../../../../src/services/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_base_http_service__ = __webpack_require__("../../../../../src/services/base-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var GroupListComponent = (function () {
    function GroupListComponent(groupService, router) {
        this.groupService = groupService;
        this.router = router;
        this.groups = [];
    }
    GroupListComponent.prototype.ngOnInit = function () {
        var observable = this.fetchPage(0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
        observable.subscribe(function () {
        }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
        this.self = this;
    };
    GroupListComponent.prototype.search = function () {
        var _this = this;
        var searchString = document.getElementById('search_input').value;
        if (searchString !== '') {
            var observable = this.groupService.searchGroups(searchString, 0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
            observable.subscribe(function (groupPage) { return _this.groupPage = groupPage; });
            return observable;
        }
        else {
            var observable = this.fetchPage(0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
            Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
            observable.subscribe(function () {
            }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
            return observable;
        }
    };
    GroupListComponent.prototype.fetchPage = function (pageNumber, pageSize, sort) {
        var _this = this;
        this.pageNumber = pageNumber;
        var observable = this.groupService.findGroups(pageNumber, pageSize, sort);
        observable.subscribe(function (groupPage) { return _this.groupPage = groupPage; });
        return observable;
    };
    GroupListComponent.prototype.show = function (group) {
        this.router.navigate(['/group', group.groupId]);
    };
    GroupListComponent.prototype.add = function (group) {
        this.router.navigate(['/group']);
    };
    GroupListComponent.prototype.back = function () {
        this.router.navigate(['/GroupList']);
    };
    ;
    GroupListComponent.prototype.delete = function (group) {
        var _this = this;
        var observable = this.groupService.removeGroup(group.groupId);
        Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
        observable.switchMap(function () {
            return _this.fetchPage(_this.pageNumber, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        }).subscribe(function (r) {
            _this.fetchPage(_this.pageNumber, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
    };
    return GroupListComponent;
}());
GroupListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group-list',
        template: __webpack_require__("../../../../../src/app/group-list/group-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/group-list/group-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_groups_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_5__services_base_http_service__["a" /* BaseHttpService */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_groups_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_groups_service__["a" /* GroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GroupListComponent);

var _a, _b;
//# sourceMappingURL=group-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/group-member-selector/group-member-selector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group-member-selector/group-member-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"groupMemberSelectionPage != null\">\n\n<div id=\"top\" class=\"row\">\n\t<div class=\"col-sm-3\">\n\t\t<h2>Contacts</h2>\n\t</div>\n\t<div class=\"col-sm-6\">\n\n\t\t<div class=\"input-group h2\">\n\t\t\t<input name=\"search_input\" class=\"form-control\" id=\"search_input\"\n\t\t\t\ttype=\"text\" placeholder=\"Search\"> <span\n\t\t\t\tclass=\"btn btn-primary input-group-btn\">\n\t\t\t\t<button class=\"btn btn-success btn-xs glyphicon glyphicon-search\"\n\t\t\t\t\ttype=\"button\" (click)=\"search()\">Search</button>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</div>\n\n<hr />\n<div id=\"list\" class=\"row\">\n\n\t<div class=\"table-responsive col-md-12\">\n\n\t\t<table class=\"table table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th><table-sort [table]=\"self\"\n\t\t\t\t\t\t\t[page]=\"groupMemberSelectionPage\" [label]=\"'First Name'\"\n\t\t\t\t\t\t\t[property]=\"'firstName'\"></table-sort></th>\n\t\t\t\t\t<th><table-sort [table]=\"self\"\n\t\t\t\t\t\t\t[page]=\"groupMemberSelectionPage\" [label]=\"'Last Name'\"\n\t\t\t\t\t\t\t[property]=\"'lastName'\"></table-sort></th>\n\t\t\t\t\t<th><table-sort [table]=\"self\"\n\t\t\t\t\t\t\t[page]=\"groupMemberSelectionPage\" [label]=\"'Company'\"\n\t\t\t\t\t\t\t[property]=\"'company'\"></table-sort></th>\n\t\t\t\t\t<th class=\"actions\">Actions</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\n\t\t\t\t<tr *ngFor=\"let contact of groupMemberSelectionPage.content\">\n\t\t\t\t\t<td (click)=\"add(contact)\">{{contact.firstName}}</td>\n\t\t\t\t\t<td (click)=\"add(contact)\">{{contact.lastName}}</td>\n\t\t\t\t\t<td (click)=\"add(contact)\">{{contact.company}}</td>\n\t\t\t\t\t<td class=\"actions\"><a class=\"btn btn-success btn-xs\"\n\t\t\t\t\t\t(click)=\"add(contact)\">Add</a></td>\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n</div>\n<table-pagination [table]=\"self\" [page]=\"groupMemberSelectionPage\"></table-pagination>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/group-member-selector/group-member-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupMemberSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_loader__ = __webpack_require__("../../../../../src/app/common/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__ = __webpack_require__("../../../../../src/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_groups_service__ = __webpack_require__("../../../../../src/services/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__ = __webpack_require__("../../../../../src/services/base-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var GroupMemberSelectorComponent = (function () {
    function GroupMemberSelectorComponent(contactService, groupService, router, route) {
        this.contactService = contactService;
        this.groupService = groupService;
        this.router = router;
        this.route = route;
    }
    GroupMemberSelectorComponent.prototype.ngOnInit = function () {
        this.groupId = this.route.snapshot.params['id'];
        var observable = this.fetchPage(0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
        observable.subscribe(function () {
        }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
        this.self = this;
    };
    GroupMemberSelectorComponent.prototype.fetchPage = function (pageNumber, pageSize, sort) {
        var _this = this;
        this.pageNumber = pageNumber;
        var observable = this.contactService.findContacts(pageNumber, pageSize, sort);
        observable.subscribe(function (groupMemberSelectionPage) { return _this.groupMemberSelectionPage = groupMemberSelectionPage; });
        return observable;
    };
    GroupMemberSelectorComponent.prototype.search = function () {
        var _this = this;
        var searchString = document.getElementById('search_input').value;
        if (searchString !== '') {
            var observable = this.contactService.searchContacts(searchString, 0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
            observable.subscribe(function (groupMemberSelectionPage) { return _this.groupMemberSelectionPage = groupMemberSelectionPage; });
            return observable;
        }
        else {
            var observable = this.fetchPage(0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
            Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
            observable.subscribe(function () {
            }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
            return observable;
        }
    };
    GroupMemberSelectorComponent.prototype.add = function (contact) {
        this.contactId = contact.id;
        this.groupService.addGroupMember(this.groupId, this.contactId).subscribe();
        //    window.location.reload();
    };
    return GroupMemberSelectorComponent;
}());
GroupMemberSelectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group-member-selector',
        template: __webpack_require__("../../../../../src/app/group-member-selector/group-member-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/group-member-selector/group-member-selector.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__["a" /* BaseHttpService */]]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], GroupMemberSelectorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=group-member-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/group-members/group-members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group-members/group-members.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"memberPage != null\">\n\n<div id=\"top\" class=\"row\">\n\t<div class=\"col-sm-3\">\n\t\t<h2>Group Members</h2>\n\t</div>\n\n\t<div class=\"col-sm-2\">\n\t\t<div class=\"input-group h2\">\n\t\t\t<span class=\"btn btn-primary input-group-btn\"> <a\n\t\t\t\tclass=\"btn btn-success btn-xs glyphicon glyphicon-new-window\"\n\t\t\t\t(click)=\"currentGroup=memberPage.groupId\" data-toggle=\"modal\"\n\t\t\t\tdata-target=\"#add-modal\">Add</a>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\n</div>\n\n<hr />\n<div id=\"list\" class=\"row\">\n\n\t<div class=\"table-responsive col-md-12\">\n\t\t<!--       <table class=\"table table-striped\" cellspacing=\"0\" cellpadding=\"0\"> -->\n\t\t<table class=\"table table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n<!--  \n\t\t\t\t\t<th><table-sort [table]=\"self\" [page]=\"memberPage\"\n\t\t\t\t\t\t\t[label]=\"'First Name'\" [property]=\"'firstName'\"></table-sort></th>\n\t\t\t\t\t<th><table-sort [table]=\"self\" [page]=\"memberPage\"\n\t\t\t\t\t\t\t[label]=\"'Last Name'\" [property]=\"'lastName'\"></table-sort></th>\n\t\t\t\t\t<th><table-sort [table]=\"self\" [page]=\"memberPage\"\n\t\t\t\t\t\t\t[label]=\"'Company'\" [property]=\"'company'\"></table-sort></th>\n\t\t\t\t\t<th class=\"actions\">Actions</th>\n-->\t\n\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t<th>Company</th>\n\t\t\t\t\t<th class=\"actions\">Actions</th>\n\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\n\t\t\t\t<tr *ngFor=\"let member of memberPage.content\">\n\t\t\t\t\t<td (click)=\"show(member)\">{{member.firstName}}</td>\n\t\t\t\t\t<td (click)=\"show(member)\">{{member.lastName}}</td>\n\t\t\t\t\t<td (click)=\"show(member)\">{{member.company}}</td>\n\t\t\t\t\t<td class=\"actions\">\n\t\t\t\t\t\t<a class=\"btn btn-success btn-xs\"\n\t\t\t\t\t\t(click)=\"show(member)\">Details</a> \n\t\t\t\t\t\t<a class=\"btn btn-danger btn-xs\" (click)=\"currentMember=member\"\n\t\t\t\t\t\tdata-toggle=\"modal\" data-target=\"#delete-modal\">Delete</a></td>\n\t\t\t\t</tr>\n\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\n</div>\n\n<table-pagination [table]=\"self\" [page]=\"memberPage\"></table-pagination>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\"\n\taria-labelledby=\"modalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n\t\t\t\t\taria-label=\"Fechar\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t\t<h4 class=\"modal-title\" id=\"modalLabel\">Delete member</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">Do you want to remove this item ?</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" (click)=\"delete(currentMember)\"\n\t\t\t\t\tclass=\"btn btn-primary\" data-dismiss=\"modal\">Yes</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"\n\t\t\t\t\tdata-dismiss=\"modal\">No</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"add-modal\" tabindex=\"-1\" role=\"dialog\"\n\taria-labelledby=\"modalLabel\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" onclick=\"javascript:window.location.reload()\" class=\"close\" data-dismiss=\"modal\"\n\t\t\t\t\taria-label=\"Fechar\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t\t<h4 class=\"modal-title\" id=\"modalLabel\">Add Group Member</h4>\n\t\t\t</div>\n\n\t\t\t<app-group-member-selector></app-group-member-selector>\n\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" onclick=\"javascript:window.location.reload()\" class=\"btn btn-default\" data-dismiss=\"modal\"\n\t\t\t\t\tdata-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/group-members/group-members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupMembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_loader__ = __webpack_require__("../../../../../src/app/common/loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_groups_service__ = __webpack_require__("../../../../../src/services/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_base_http_service__ = __webpack_require__("../../../../../src/services/base-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var GroupMembersComponent = (function () {
    function GroupMembersComponent(groupService, router, route) {
        this.groupService = groupService;
        this.router = router;
        this.route = route;
        this.members = [];
        this.groupId = route.snapshot.params['id'];
    }
    GroupMembersComponent.prototype.ngOnInit = function () {
        var observable = this.fetchPage(0, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
        observable.subscribe(function () {
        }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
        this.self = this;
    };
    GroupMembersComponent.prototype.fetchPage = function (pageNumber, pageSize, sort) {
        var _this = this;
        this.pageNumber = pageNumber;
        var observable = this.groupService.findGroupMembers(this.groupId, pageNumber, pageSize, sort);
        observable.subscribe(function (memberPage) { return _this.memberPage = memberPage; });
        return observable;
    };
    GroupMembersComponent.prototype.show = function (contact) {
        this.router.navigate(['/contact', contact.contactId]);
    };
    GroupMembersComponent.prototype.delete = function (member) {
        var _this = this;
        var observable = this.groupService.removeGroupMember(member.id);
        Object(__WEBPACK_IMPORTED_MODULE_3__common_loader__["b" /* showLoading */])();
        observable.switchMap(function () {
            return _this.fetchPage(_this.pageNumber, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        }).subscribe(function (r) {
            _this.fetchPage(_this.pageNumber, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* defaultItemsCountPerPage */], null);
        }, __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */], __WEBPACK_IMPORTED_MODULE_3__common_loader__["a" /* hideLoading */]);
    };
    return GroupMembersComponent;
}());
GroupMembersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group-members',
        template: __webpack_require__("../../../../../src/app/group-members/group-members.component.html"),
        styles: [__webpack_require__("../../../../../src/app/group-members/group-members.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_groups_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_5__services_base_http_service__["a" /* BaseHttpService */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_groups_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_groups_service__["a" /* GroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], GroupMembersComponent);

var _a, _b, _c;
//# sourceMappingURL=group-members.component.js.map

/***/ }),

/***/ "../../../../../src/app/group/group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\t<div class=\"panel-heading text-center\">\n\t\t<h3 *ngIf=\"!group.groupId\">Detail - New group</h3>\n\t\t<h3 *ngIf=\"group.groupId\">Detail - {{ group.groupName }}</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<form class=\"form-horizontal\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"groupName\" class=\"col-sm-2 control-label\">Group\n\t\t\t\t\tname</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"groupNameInput\"\n\t\t\t\t\t\tplaceholder=\"Group Name\" [formControl]=\"form.get('groupName')\"\n\t\t\t\t\t\t[(ngModel)]=\"group.groupName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"groupDescription\" class=\"col-sm-2 control-label\">Description</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"groupDescriptionInput\"\n\t\t\t\t\t\tplaceholder=\"Description\"\n\t\t\t\t\t\t[formControl]=\"form.get('groupDescription')\"\n\t\t\t\t\t\t[(ngModel)]=\"group.groupDescription\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"back()\">Back</button>\n\t\t\t</div>\n\n\t\t</form>\n\t</div>\n</div>\n\n<!--  \n<div class=\"panel panel-default\" *ngIf=\"group.id\">\n  <div class=\"panel-heading text-center\">\n    <h3>Groups</h3>\n  </div>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>\n          <select class=\"form-control\" [(ngModel)]=\"selectedGroupId\" placeholder=\"Select group\">\n            <option *ngFor=\"#group of remainingGroups\" [value]=\"group.id\">\n              {{ group.name }}\n            </option>\n          </select>\n        </td>\n        <td>\n          <button type=\"button\" class=\"fa fa-plus btn btn-primary pull-right\" (click)=\"addSelectedGroup()\" (disabled)=\"!selectedGroupId\">\n          </button>\n        </td>\n      </tr>\n      <tr *ngFor=\"#groupGroup of groupGroups\">\n        <td>{{ groupGroup.group.name }}</td>\n        <td>            \n          <button type=\"button\" class=\"fa fa-trash btn btn-danger pull-right\" (click)=\"removeGroup(groupGroup)\">\n          </button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n-->\n \n<!--\n<div *ngIf=\"group.id\">\n-->\n  <app-group-members></app-group-members>\n<!--  \n</div>\n-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_group__ = __webpack_require__("../../../../../src/models/group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_groups_service__ = __webpack_require__("../../../../../src/services/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__ = __webpack_require__("../../../../../src/services/base-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupComponent = (function () {
    //  constructor (private groupService: GroupService, private groupService: GroupService, private groupGroupService: GroupGroupService, private router:Router, private params: RouteParams, private formBuilder: FormBuilder, private httpService: BaseHttpService) {
    function GroupComponent(groupService, router, route, formBuilder, httpService) {
        var _this = this;
        this.groupService = groupService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.selectedGroupId = null;
        this.group = new __WEBPACK_IMPORTED_MODULE_4__models_group__["a" /* Group */]('');
        route.params.subscribe(function (params) { _this.id = params['groupId']; });
        this.selectedGroupId = route.snapshot.params['id'];
        if (this.selectedGroupId) {
            var self_1 = this;
            var groupGroupParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* URLSearchParams */]();
            //      groupGroupParams.set('filter', 'group_id=' + id);
            var passedId = Number(this.selectedGroupId);
            groupService
                .get(passedId)
                .subscribe(function (group) { return self_1.group = group; });
            /*
                  groupGroupService
                    .query(groupGroupParams, false, true)
                    .subscribe((groupGroups) => {
                      self.groupGroups = groupGroups;
                      self.getRemainingGroups();
                    });
            */
        }
        this.form = this.formBuilder.group({
            'groupName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'groupDescription': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    }
    GroupComponent.prototype.back = function () {
        //    this.router.navigate(['/GroupList']);
        this.router.navigate(['/groups']);
    };
    ;
    /*
      getRemainingGroups () {
        var self = this;
        this.groupService
          .query()
          .subscribe((groups) => {
            self.remainingGroups = groups.filter((item) => {
              return !self.groupGroups.some((a) => {
                return a.group.id == item.id;
              });
            });
          })
      }
  
      addSelectedGroup() {
        if (!this.selectedGroupId) return;
  
        var self = this;
        var group = this.remainingGroups.filter((item) => {
          return item.id == self.selectedGroupId;
        })[0];
  
        this.groupGroupService.addGroup(group.id, this.group.id)
          .subscribe((response) => {
            var newGroupGroup = new GroupGroup(response.id);
            newGroupGroup.group = group;
  
            self.remainingGroups = self.remainingGroups.filter((item) => {
              return item.id !== group.id;
            });
  
            self.groupGroups.push(newGroupGroup);
            self.selectedGroupId = null;
          });
      };
  
      removeGroup (groupGroup: GroupGroup) {
        var self = this;
        this.groupGroupService
          .remove(groupGroup.id)
          .subscribe((item) => {
            self.groupGroups = self.groupGroups.filter((item) => {
              return item.id !== groupGroup.id;
            });
  
            self.remainingGroups.push(groupGroup.group);
          });
      }
    */
    GroupComponent.prototype.save = function () {
        var self = this;
        var isNew = !this.group.groupId;
        this.groupService.save(this.group)
            .subscribe(function (response) {
            if (isNew) {
                alert('New group created');
            }
            else {
                alert('Group updated');
            }
            self.back();
        });
    };
    return GroupComponent;
}());
GroupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group',
        template: __webpack_require__("../../../../../src/app/group/group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/group/group.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__["a" /* BaseHttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__["a" /* BaseHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_base_http_service__["a" /* BaseHttpService */]) === "function" && _e || Object])
], GroupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=group.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome Home!</h1>\n\n<pre>\nThis is an Angular Demo application.\n\n\n\n</pre>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <div class=\"panel\">\n                <div class=\"panel-body\">\n                    <span class=\"label label-danger\" *ngIf=\"error\">{{error}}</span>\n\n                    <form class=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"authenticate($event)\">\n                        <div class=\"form-group\">\n                            <label for=\"username\">Username</label>\n                            <input type=\"text\" class=\"form-control\" required formControlName=\"username\"\n                                   name=\"username\" id=\"username\" placeholder=\"username\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"password\" class=\"form-control\" required formControlName=\"password\"\n                                   name=\"password\" id=\"password\" placeholder=\"password\">\n                        </div>\n                        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\">Login</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_events_service__ = __webpack_require__("../../../../../src/services/account.events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, form, loginService, accountEventService) {
        var _this = this;
        this.router = router;
        this.wrongCredentials = false;
        this.loginService = loginService;
        this.loginForm = form.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        accountEventService.subscribe(function (account) {
            if (!account.authenticated) {
                if (account.error) {
                    if (account.error.indexOf('Unauthorized') !== -1) {
                        _this.error = 'Username and/or password are invalid !';
                        // this.account.authenticated = false;
                    }
                    else {
                        _this.error = account.error;
                    }
                }
            }
        }, function (error) {
            console.log('Username and/or password are invalid !');
            _this.error = 'Username and/or password are invalid !';
        });
    }
    LoginComponent.prototype.authenticate = function (event) {
        var _this = this;
        event.preventDefault();
        try {
            this.loginService.authenticate(this.loginForm.value.username, this.loginForm.value.password)
                .subscribe(function (account) {
                _this.account = account;
                console.log('Successfully logged in.', account);
                _this.account.authenticated = true;
                _this.router.navigate(['/about']);
            }, function (err) { return _this.error = err; }); // Reach here if fails;
        }
        catch (e) {
            console.log(e);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_account_events_service__["a" /* AccountEventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_account_events_service__["a" /* AccountEventsService */]) === "function" && _d || Object])
], LoginComponent);

;
var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/table/elements-count.html":
/***/ (function(module, exports) {

module.exports = "Count : {{page.totalPages}}"

/***/ }),

/***/ "../../../../../src/app/table/pagination.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bottom\" class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<ul class=\"pagination\">\n\t\t\n<!--  The href is causing duplicate calls to the server\t\n\t\t\t<li [class.disabled]=\"page.first\"><a href=\"#\"\n\t\t\t\t(click)=\"fetchPreviousPage()\">&lt; Previous</a></li>\n -->\t\t\t\t\t\n\t\t\t<li [class.disabled]=\"page.first\"><a\n\t\t\t\t(click)=\"fetchPreviousPage()\">&lt; Previous</a></li>\t\t\t\t\n\t\t\t<!--  \n            <li *ngFor=\"#pageIndex of pagesIndexes\" [class.disabled]=\"pageIndex == page.pageNumber+1 \"><a (click)=\"fetchPageNumber(pageIndex)\"  >{{pageIndex}}</a></li>\n\n            <li *ngFor=\"#pageIndex of pagesCount\" [class.disabled]=\"pageIndex == page.pageNumber+1 \"><a (click)=\"fetchPageNumber(pageIndex)\"  >{{pageIndex}}</a></li>\n-->\n\t\t\t<li *ngFor=\"let pageIndex of pagesIndexes\"\n\t\t\t\t[class.disabled]=\"pageIndex == page.number+1 \"><a\n\t\t\t\t(click)=\"fetchPageNumber(pageIndex)\">{{pageIndex}}</a></li>\n<!--  The href is causing duplicate calls to the server\t\n\t\t\t<li [class.disabled]=\"page.last\" class=\"next\"><a href=\"#\"\n\t\t\t\t(click)=\"fetchNextPage()\" rel=\"next\">Next &gt;</a></li>\n-->\n\t\t\t<li [class.disabled]=\"page.last\" class=\"next\"><a\n\t\t\t\t(click)=\"fetchNextPage()\" rel=\"next\">Next &gt;</a></li>\n\t\t</ul>\n\t\t<!-- /.pagination -->\n\t</div>\n</div>\n<!-- /#bottom -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/table/sort.html":
/***/ (function(module, exports) {

module.exports = "<a style=\"cursor: pointer;\" (click)=\"sortByProperty()\" >{{label}}\n\t<i class=\"fa\" [class.fa-sort]=\"sortClass\"  [class.fa-sort-asc]=\"sortAscClass\" [class.fa-sort-desc]=\"sortDescClass\"  >\n\t</i>\n</a>"

/***/ }),

/***/ "../../../../../src/app/table/table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableElementsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TablePagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TableSort; });
/* unused harmony export tableDirectives */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_pagination__ = __webpack_require__("../../../../../src/app/common/pagination.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_loader__ = __webpack_require__("../../../../../src/app/common/loader.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableElementsCount = (function () {
    function TableElementsCount() {
    }
    return TableElementsCount;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_pagination__["PaginationPage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_pagination__["PaginationPage"]) === "function" && _a || Object)
], TableElementsCount.prototype, "page", void 0);
TableElementsCount = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'table-elements-count',
        template: __webpack_require__("../../../../../src/app/table/elements-count.html")
    })
], TableElementsCount);

var TablePagination = (function () {
    function TablePagination() {
    }
    Object.defineProperty(TablePagination.prototype, "pagesIndexes", {
        get: function () {
            var pagesIndexes = [];
            for (var i = 0; i < this.page.totalPages; i++) {
                pagesIndexes.push(i + 1);
            }
            return pagesIndexes;
        },
        enumerable: true,
        configurable: true
    });
    TablePagination.prototype.fetchPageNumber = function (pageNumber) {
        var observable = this.table.fetchPage(pageNumber - 1, this.page.size, this.getSort());
        if (observable != null) {
            Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["b" /* showLoading */])();
            observable.subscribe(function () {
            }, function (e) {
                Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */])();
            }, __WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */]);
        }
    };
    TablePagination.prototype.fetchPageSize = function (pageSize) {
        var observable = this.table.fetchPage(this.page.number, pageSize, this.getSort());
        if (observable != null) {
            Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["b" /* showLoading */])();
            observable.subscribe(function () {
            }, function (e) {
                Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */])();
            }, __WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */]);
        }
    };
    TablePagination.prototype.fetchNextPage = function () {
        var pageToFetch = this.page.number + 1;
        if (pageToFetch >= this.page.totalPages) {
            return;
        }
        /* getting broken pipe .... ????? */
        this.fetchPageNumber(pageToFetch + 1);
        /*
        const observable: Rx.Observable<any> = this.table.fetchPage(pageToFetch, this.page.size, this.getSort());
        if (observable != null) {
          showLoading();
          observable.subscribe(() => {
          }, (e) => {
            hideLoading()
          }, hideLoading);
        }
      */
    };
    TablePagination.prototype.fetchPreviousPage = function () {
        if (this.page.number === 0) {
            return;
        }
        var observable = this.table.fetchPage(this.page.number - 1, this.page.size, this.getSort());
        if (observable != null) {
            Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["b" /* showLoading */])();
            observable.subscribe(function () {
            }, function (e) {
                Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */])();
            }, __WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */]);
        }
    };
    TablePagination.prototype.getSort = function () {
        if (this.page.sort != null && this.page.sort.length > 0) {
            return this.page.sort[0];
        }
        else {
            return null;
        }
    };
    return TablePagination;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TablePagination.prototype, "table", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_pagination__["PaginationPage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_pagination__["PaginationPage"]) === "function" && _b || Object)
], TablePagination.prototype, "page", void 0);
TablePagination = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'table-pagination',
        template: __webpack_require__("../../../../../src/app/table/pagination.html")
    })
], TablePagination);

var TableSort = (function () {
    function TableSort() {
        this.sortClass = false;
        this.sortAscClass = false;
        this.sortDescClass = false;
    }
    TableSort.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['page']) {
            var defineValues = function (s, sa, sd, dir) {
                _this.sortClass = s;
                _this.sortAscClass = sa;
                _this.sortDescClass = sd;
                _this.sortDirection = dir;
            };
            if (this.page.sort == null) {
                defineValues(true, false, false, 'ASC');
                return;
            }
            var one = this.page.sort.find(function (e) { return e.property === _this.property; });
            if (one == null) {
                defineValues(true, false, false, 'ASC');
            }
            else {
                if (one.direction === 'ASC') {
                    defineValues(false, true, false, 'DESC');
                }
                else {
                    defineValues(false, false, true, 'ASC');
                }
            }
        }
    };
    TableSort.prototype.sortByProperty = function () {
        var sort;
        sort = { property: this.property, direction: this.sortDirection };
        var pageNumber = this.page.number - 1;
        if (pageNumber < 0) {
            pageNumber = 0;
        }
        var observable = this.table.fetchPage(pageNumber, this.page.size, sort);
        if (observable != null) {
            Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["b" /* showLoading */])();
            observable.subscribe(function () {
            }, function () {
                Object(__WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */])();
            }, __WEBPACK_IMPORTED_MODULE_2__common_loader__["a" /* hideLoading */]);
        }
    };
    return TableSort;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TableSort.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TableSort.prototype, "property", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TableSort.prototype, "table", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__common_pagination__["PaginationPage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_pagination__["PaginationPage"]) === "function" && _c || Object)
], TableSort.prototype, "page", void 0);
TableSort = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'table-sort',
        template: __webpack_require__("../../../../../src/app/table/sort.html")
    })
], TableSort);

var tableDirectives = [
    TableElementsCount,
    TablePagination,
    TableSort,
];
var _a, _b, _c;
//# sourceMappingURL=table.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <form class=\"form\" [formGroup]=\"userForm\" (submit)=\"saveUser()\">\n            <div class=\"form-group\">\n                <label for=\"login\">Login</label>\n                <input type=\"text\" id=\"login\" required [(ngModel)]=\"user.login\" formControlName=\"login\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"profile\">Profile</label>\n                <select id=\"profile\" [(ngModel)]=\"user.profile\" formControlName=\"profile\" required class=\"form-control\">\n                    <option *ngFor=\"let profile of profiles\" [value]=\"profile\">{{profile}}</option>\n                </select>\n            </div>\n            <div><!--\n                <button type=\"submit\" is-authorized=\"ROLE_MANAGER\" class=\"btn btn-primary\" [disabled]=\"userForm.$invalid\"><span class=\"fa fa-save\"></span>Save</button>\n                -->\n                <button type=\"submit\" is-authorized=\"ROLE_MANAGER\" class=\"btn btn-primary\"><span class=\"fa fa-save\"></span>Save</button>\n\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\"><span class=\"fa fa-save\"></span>Cancel</button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_account__ = __webpack_require__("../../../../../src/models/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = (function () {
    function User(router, userService, route, form) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_account__["a" /* Account */]();
        this.profiles = [];
        this.router = router;
        this.userService = userService;
        this.userForm = form.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            profile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        this.getProfiles();
    }
    User.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) { return _this.getUser(params['id']); });
    };
    User.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    User.prototype.getUser = function (id) {
        var _this = this;
        this.userService.getById(id).subscribe(function (user) { return _this.user = user; });
    };
    User.prototype.getProfiles = function () {
        var _this = this;
        this.userService.getProfiles().subscribe(function (profiles) { return _this.profiles = profiles; });
    };
    User.prototype.saveUser = function () {
        var _this = this;
        this.userService.saveUser(this.user).subscribe(function () { return _this.router.navigate(['/users']); });
    };
    User.prototype.cancel = function () {
        this.router.navigate(['/users']);
    };
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user',
        template: __webpack_require__("../../../../../src/app/users/user.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], User);

var _a, _b, _c, _d;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <table class=\"table table-hover\">\n            <thead></thead>\n            <tbody>\n                <tr>\n                    <th>#</th>\n                    <th>Login</th>\n                    <th>Profile</th>\n                    <th [isAuthorizedDirective]=\"'ROLE_ADMIN'\">Authorities</th>\n                </tr>\n                <tr *ngFor='let user of users'>\n                    <td>{{user.id}}</td>\n                    <td><a href=\"\" (click)=\"onSelectUser($event,user.id)\">{{user.login}}</a></td>\n                    <td>{{user.profile}}</td>\n                    <td [isAuthorizedDirective]=\"'ROLE_ADMIN'\">{{user.authoritiesStringArray.join(',')}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Users = (function () {
    function Users(router, userService) {
        var _this = this;
        this.users = [];
        this.router = router;
        userService.getAll().subscribe(function (users) { return _this.users = users; });
    }
    Users.prototype.onSelectUser = function (event, id) {
        event.preventDefault();
        this.router.navigate(['/user', id]);
    };
    return Users;
}());
Users = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'users',
        template: __webpack_require__("../../../../../src/app/users/users.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], Users);

var _a, _b;
//# sourceMappingURL=users.js.map

/***/ }),

/***/ "../../../../../src/app/utils/app.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HEADER_X_SECRET; });
/* unused harmony export HEADER_X_TOKEN_ACCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HEADER_X_DIGEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HEADER_X_ONCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HEADER_WWW_AUTHENTICATE; });
/* unused harmony export HEADER_AUTHENTICATION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CSRF_CLAIM_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return STORAGE_ACCOUNT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return STORAGE_SECURITY_TOKEN; });
/* unused harmony export BACKEND_API_PATH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_API_AUTHENTICATE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BACKEND_API_ROOT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UrlMatcher; });
// Headers HTTP
// Headers HTTP
var HEADER_X_SECRET = 'X-Secret';
var HEADER_X_TOKEN_ACCESS = 'X-TokenAccess';
var HEADER_X_DIGEST = 'X-Digest';
var HEADER_X_ONCE = 'X-Once';
var HEADER_WWW_AUTHENTICATE = 'WWW-Authenticate';
var HEADER_AUTHENTICATION = 'Authentication';
var CSRF_CLAIM_HEADER = 'X-HMAC-CSRF';
// Local storage keys
var STORAGE_ACCOUNT_TOKEN = 'hmacApp-account';
var STORAGE_SECURITY_TOKEN = 'hmacApp-security';
// Common http root api
var BACKEND_API_PATH = '/ng4-contacts-server/api';
var BACKEND_API_AUTHENTICATE_PATH = '/authenticate';
// export const BACKEND_API_ROOT_URL = 'http://localhost:8080' + BACKEND_API_PATH;
var BACKEND_API_ROOT_URL = 'https://www.zdslogic.com' + BACKEND_API_PATH;
var UrlMatcher = (function () {
    function UrlMatcher() {
    }
    UrlMatcher.matches = function (url) {
        return url.indexOf(BACKEND_API_PATH) !== -1
            && url.indexOf(BACKEND_API_PATH + BACKEND_API_AUTHENTICATE_PATH) === -1;
    };
    return UrlMatcher;
}());

//# sourceMappingURL=app.utils.js.map

/***/ }),

/***/ "../../../../../src/app/utils/hmac-http-client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HmacHttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_securityToken__ = __webpack_require__("../../../../../src/models/securityToken.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_account_events_service__ = __webpack_require__("../../../../../src/services/account.events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_crypto_js__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










///<reference path="../../../../../typings/cryptojs/cryptojs.d.ts" />
var HmacHttpClient = (function (_super) {
    __extends(HmacHttpClient, _super);
    function HmacHttpClient(_backend, _defaultOptions, accountEventsService) {
        var _this = _super.call(this, _backend, _defaultOptions) || this;
        _this.accountEventsService = accountEventsService;
        return _this;
    }
    HmacHttpClient.prototype.addSecurityHeader = function (url, method, options, body) {
        if (__WEBPACK_IMPORTED_MODULE_4__app_utils__["j" /* UrlMatcher */].matches(url)) {
            var securityToken = new __WEBPACK_IMPORTED_MODULE_3__models_securityToken__["a" /* SecurityToken */](JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__app_utils__["i" /* STORAGE_SECURITY_TOKEN */])));
            var date = new Date().toISOString();
            var secret = securityToken.publicSecret;
            var message = '';
            if (method === 'PUT' || method === 'POST' || method === 'PATCH') {
                message = method + body + url + date;
            }
            else {
                message = method + url + date;
            }
            options.headers.set(__WEBPACK_IMPORTED_MODULE_4__app_utils__["c" /* CSRF_CLAIM_HEADER */], localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__app_utils__["c" /* CSRF_CLAIM_HEADER */]));
            // rkc set this as default
            // options.headers.set(AppUtils.HEADER_X_DIGEST, CryptoJS.HmacSHA256(message, secret).toString());
            if (securityToken.isEncoding('HmacSHA256')) {
                options.headers.set(__WEBPACK_IMPORTED_MODULE_4__app_utils__["e" /* HEADER_X_DIGEST */], __WEBPACK_IMPORTED_MODULE_9_crypto_js__["HmacSHA256"](message, secret).toString());
            }
            else if (securityToken.isEncoding('HmacSHA1')) {
                options.headers.set(__WEBPACK_IMPORTED_MODULE_4__app_utils__["e" /* HEADER_X_DIGEST */], __WEBPACK_IMPORTED_MODULE_9_crypto_js__["HmacSHA1"](message, secret).toString());
            }
            else if (securityToken.isEncoding('HmacMD5')) {
                options.headers.set(__WEBPACK_IMPORTED_MODULE_4__app_utils__["e" /* HEADER_X_DIGEST */], __WEBPACK_IMPORTED_MODULE_9_crypto_js__["HmacMD5"](message, secret).toString());
            }
            options.headers.set(__WEBPACK_IMPORTED_MODULE_4__app_utils__["f" /* HEADER_X_ONCE */], date);
            console.log('url', url);
            console.log('message', message);
            console.log('secret', secret);
            console.log('hmac message', options.headers.get(__WEBPACK_IMPORTED_MODULE_4__app_utils__["e" /* HEADER_X_DIGEST */]));
        }
    };
    HmacHttpClient.prototype.setOptions = function (options) {
        if (!options) {
            options = {};
        }
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        return options;
    };
    HmacHttpClient.prototype.mapResponse = function (res, observer) {
        if (res.ok && res.headers) {
            var securityToken = new __WEBPACK_IMPORTED_MODULE_3__models_securityToken__["a" /* SecurityToken */](JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__app_utils__["i" /* STORAGE_SECURITY_TOKEN */])));
            if (securityToken) {
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__app_utils__["i" /* STORAGE_SECURITY_TOKEN */], JSON.stringify(securityToken));
            }
        }
        observer.next(res);
        observer.complete();
    };
    HmacHttpClient.prototype.catchResponse = function (res, observer) {
        if (res.status === 401) {
            console.log('Unauthorized request:', res.text());
            this.accountEventsService.logout({ error: res.text() });
        }
        if (res.status === 403) {
            console.log('Unauthorized request:', res.text());
            this.accountEventsService.logout({ error: res.text() });
        }
        observer.complete();
    };
    HmacHttpClient.prototype.get = function (url, options) {
        var _this = this;
        options = this.setOptions(options);
        this.addSecurityHeader(url, 'GET', options, null);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _super.prototype.get.call(_this, url, options)
                .subscribe(function (res) {
                _this.mapResponse(res, observer);
            }, function (res) {
                _this.catchResponse(res, observer);
            });
        });
    };
    HmacHttpClient.prototype.post = function (url, body, options) {
        var _this = this;
        options = this.setOptions(options);
        this.addSecurityHeader(url, 'POST', options, body);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _super.prototype.post.call(_this, url, body, options)
                .subscribe(function (res) {
                _this.mapResponse(res, observer);
            }, function (res) {
                _this.catchResponse(res, observer);
            });
        });
    };
    HmacHttpClient.prototype.put = function (url, body, options) {
        var _this = this;
        options = this.setOptions(options);
        this.addSecurityHeader(url, 'PUT', options, body);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _super.prototype.put.call(_this, url, body, options)
                .subscribe(function (res) {
                _this.mapResponse(res, observer);
            }, function (res) {
                _this.catchResponse(res, observer);
            });
        });
    };
    return HmacHttpClient;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));
HmacHttpClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_account_events_service__["a" /* AccountEventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_account_events_service__["a" /* AccountEventsService */]) === "function" && _c || Object])
], HmacHttpClient);

var _a, _b, _c;
//# sourceMappingURL=hmac-http-client.js.map

/***/ }),

/***/ "../../../../../src/app/utils/is-authorized.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAuthorizedDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsAuthorizedDirective = (function () {
    function IsAuthorizedDirective(_elementRef, loginService) {
        this._elementRef = _elementRef;
        this.loginService = loginService;
    }
    IsAuthorizedDirective.prototype.ngOnInit = function () {
        if (this.role && this.role.trim() !== '' && !this.loginService.isAuthorized([this.role])) {
            var el = this._elementRef.nativeElement;
            el.parentNode.removeChild(el);
        }
    };
    return IsAuthorizedDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('isAuthorizedDirective'),
    __metadata("design:type", String)
], IsAuthorizedDirective.prototype, "role", void 0);
IsAuthorizedDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[isAuthorizedDirective]',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], IsAuthorizedDirective);

var _a, _b;
//# sourceMappingURL=is-authorized.directive.js.map

/***/ }),

/***/ "../../../../../src/app/utils/utils.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_authorized_directive__ = __webpack_require__("../../../../../src/app/utils/is-authorized.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UtilsModule = (function () {
    function UtilsModule() {
    }
    return UtilsModule;
}());
UtilsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        bootstrap: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__is_authorized_directive__["a" /* IsAuthorizedDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__is_authorized_directive__["a" /* IsAuthorizedDirective */]]
    })
], UtilsModule);

//# sourceMappingURL=utils.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

///<reference path="../../../../../typings/lodash/lodash.d.ts" />
var Account = (function () {
    function Account(account) {
        this.authenticated = false;
        if (account) {
            __WEBPACK_IMPORTED_MODULE_0_lodash__["assignIn"](this, account);
            this.authenticated = false;
        }
    }
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ "../../../../../src/models/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, firstName, lastName, title, company, imageURL, skype, twitter, notes) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (title === void 0) { title = ''; }
        if (company === void 0) { company = ''; }
        if (imageURL === void 0) { imageURL = ''; }
        if (skype === void 0) { skype = ''; }
        if (twitter === void 0) { twitter = ''; }
        if (notes === void 0) { notes = ''; }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.company = company;
        this.imageURL = imageURL;
        this.skype = skype;
        this.twitter = twitter;
        this.notes = notes;
    }
    ;
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ "../../../../../src/models/group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group(groupId, groupName, groupDescription) {
        if (groupName === void 0) { groupName = ''; }
        if (groupDescription === void 0) { groupDescription = ''; }
        this.groupId = groupId;
        this.groupName = groupName;
        this.groupDescription = groupDescription;
    }
    ;
    return Group;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ "../../../../../src/models/securityToken.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

///<reference path="../../../../../typings/lodash/lodash.d.ts" />
var SecurityToken = (function () {
    function SecurityToken(token) {
        __WEBPACK_IMPORTED_MODULE_0_lodash__["assignIn"](this, token);
    }
    SecurityToken.prototype.isEncoding = function (encoding) {
        return this.securityLevel
            && this.securityLevel === encoding;
    };
    return SecurityToken;
}());

//# sourceMappingURL=securityToken.js.map

/***/ }),

/***/ "../../../../../src/services/account.events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountEventsService = (function (_super) {
    __extends(AccountEventsService, _super);
    function AccountEventsService() {
        return _super.call(this) || this;
    }
    AccountEventsService.prototype.loginSuccess = function (account) {
        if (account) {
            account.authenticated = true;
            _super.prototype.next.call(this, account);
        }
    };
    AccountEventsService.prototype.logout = function (account) {
        if (account) {
            account.authenticated = false;
            _super.prototype.next.call(this, account);
        }
    };
    return AccountEventsService;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]));
AccountEventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AccountEventsService);

//# sourceMappingURL=account.events.service.js.map

/***/ }),

/***/ "../../../../../src/services/base-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseHttpService = (function () {
    function BaseHttpService(http) {
        this.http = http;
    }
    return BaseHttpService;
}());
BaseHttpService.token = '';
BaseHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BaseHttpService);

var _a;
//# sourceMappingURL=base-http.service.js.map

/***/ }),

/***/ "../../../../../src/services/contacts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_contact__ = __webpack_require__("../../../../../src/models/contact.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServerObj = (function () {
    function ServerObj(resource) {
        this.resource = resource;
    }
    return ServerObj;
}());
;
var ContactService = (function () {
    function ContactService(httpService) {
        this.httpService = httpService;
        // constructor(private httpService: HmacHttpClient) {
    }
    ;
    ContactService.prototype.findContacts = function (page, pageSize, sort) {
        var params = { page: page, size: pageSize, headers: this.getHeaders() };
        if (sort != null) {
            params.sort = sort.property + ',' + sort.direction;
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromPromise(this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/contact', { search: params })
            .map(function (res) { return res.json(); })
            .toPromise()).publish().refCount();
    };
    ;
    ContactService.prototype.searchContacts = function (name, page, pageSize, sort) {
        var params = { size: pageSize, page: page };
        if (sort != null) {
            params.sort = sort.property + ',' + sort.direction;
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromPromise(this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/contact/search/' + name, { search: params })
            .map(function (res) { return res.json(); })
            .toPromise()).publish().refCount();
    };
    ContactService.prototype.query = function (params) {
        return this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */], { search: params })
            .map(function (response) {
            var result = response.json();
            var contacts = [];
            result.content.forEach(function (contact) {
                console.log(contact.lastName);
                var newContact = new __WEBPACK_IMPORTED_MODULE_4__models_contact__["a" /* Contact */](contact.id, contact.firstName, contact.lastName, contact.title, contact.company, '', '', '', '');
                contacts.push(newContact);
            });
            return contacts;
        });
    };
    ;
    ContactService.prototype.get = function (id) {
        var contact$ = this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + "/contact/" + id, { headers: this.getHeaders() })
            .map(mapContact);
        return contact$;
    };
    ;
    ContactService.prototype.save = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (contact.id) {
            return this.httpService.put(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/contact/', contactToJson(contact), {
                headers: headers
            })
                .map(function (data) {
                return data;
            });
        }
        else {
            return this.httpService.post(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/contact/', contactToJson(contact), {
                headers: headers
            })
                .map(function (data) {
                return data;
            });
        }
    };
    ContactService.prototype.remove = function (id) {
        return this.httpService
            .delete(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/contact/' + id)
            .map(function (response) {
            var result = response.json();
            return result.id;
        });
    };
    ContactService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return ContactService;
}());
ContactService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ContactService);

function mapContacts(response) {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');
    // The response of the API has a content
    // property with the actual results
    return response.json().content.map(toContact);
}
function toContact(r) {
    var contact = ({
        id: r.id,
        firstName: r.firstName,
        lastName: r.lastName,
        title: r.title,
        company: r.company,
        imageURL: r.imageURL,
        skype: r.skype,
        twitter: r.twitter,
        notes: r.notes
    });
    console.log('Parsed contact:', contact);
    return contact;
}
function mapContact(response) {
    return toContact(response.json());
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sophisticated
    var errorMsg = error.message || "Yikes! There was was a problem and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errorMsg);
}
function contactToJson(contact) {
    var doc = {
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        title: contact.title,
        company: contact.company
        //      image_url: this.image,
        //      skype: this.skype,
        //      twitter: this.twitter,
        //      notes: this.notes
    };
    //    return stringify ? JSON.stringify({ resource: [doc] }) : doc;
    return JSON.stringify(doc);
}
var _a;
//# sourceMappingURL=contacts.service.js.map

/***/ }),

/***/ "../../../../../src/services/groups.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_group__ = __webpack_require__("../../../../../src/models/group.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServerObj = (function () {
    function ServerObj(resource) {
        this.resource = resource;
    }
    return ServerObj;
}());
;
var GroupService = (function () {
    function GroupService(httpService) {
        this.httpService = httpService;
    }
    ;
    GroupService.prototype.findGroups = function (page, pageSize, sort) {
        var params = { page: page, size: pageSize };
        if (sort != null) {
            params.sort = sort.property + ',' + sort.direction;
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromPromise(this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group', { search: params })
            .map(function (res) { return res.json(); })
            .toPromise()).publish().refCount();
    };
    ;
    GroupService.prototype.findGroupMembers = function (groupId, page, pageSize, sort) {
        var params = { page: page, size: pageSize };
        if (sort != null) {
            params.sort = sort.property + ',' + sort.direction;
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromPromise(this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/member/' + groupId, { search: params })
            .map(function (res) { return res.json(); })
            .toPromise()).publish().refCount();
    };
    ;
    GroupService.prototype.searchGroups = function (name, page, pageSize, sort) {
        var params = { size: pageSize, page: page };
        if (sort != null) {
            params.sort = sort.property + ',' + sort.direction;
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromPromise(this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/search/' + name, { search: params })
            .map(function (res) { return res.json(); })
            .toPromise()).publish().refCount();
    };
    GroupService.prototype.query = function (params) {
        return this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */], { search: params })
            .map(function (response) {
            var result = response.json();
            var groups = [];
            result.content.forEach(function (group) {
                console.log(group.lastName);
                var newGroup = new __WEBPACK_IMPORTED_MODULE_4__models_group__["a" /* Group */](group.id, group.groupName, group.groupDescription);
                groups.push(newGroup);
            });
            return groups;
        });
    };
    ;
    /*
      getAll(): Observable<Group[]> {
        let groups$ = this.http
          .get(`${this.baseUrl}/group`, { headers: this.getHeaders() })
          .map(mapGroups)
          .catch(handleError);
        return groups$;
      }
    */
    GroupService.prototype.get = function (id) {
        var group$ = this.httpService
            .get(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + "/group/" + id, { headers: this.getHeaders() })
            .map(mapGroup);
        return group$;
    };
    ;
    GroupService.prototype.save = function (group) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (group.groupId) {
            return this.httpService.put(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/', groupToJson(group), {
                headers: headers
            })
                .map(function (data) {
                return data;
            });
        }
        else {
            return this.httpService.post(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/', groupToJson(group), {
                headers: headers
            })
                .map(function (data) {
                return data;
            });
        }
    };
    GroupService.prototype.addGroupMember = function (groupId, contactId) {
        console.log('Adding Group Member: ' + 'Group Id:' + groupId + ' Contact Id:' + contactId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var test = __WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/member/' + groupId + '/' + contactId;
        //    return this.httpService.post(webServiceEndpoint + '/group/member/' + groupId + '/' + contactId,
        //      {
        //        headers: headers
        //      });
        return this.httpService.post(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/member/' + groupId + '/' + contactId, {
            headers: headers
        })
            .map(function (data) {
            return data;
        });
    };
    GroupService.prototype.removeGroup = function (id) {
        return this.httpService
            .delete(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/' + id)
            .map(function (response) {
            var result = response.json();
            return result.id;
        });
    };
    GroupService.prototype.removeGroupMember = function (id) {
        return this.httpService
            .delete(__WEBPACK_IMPORTED_MODULE_3__app_common_constants__["b" /* webServiceEndpoint */] + '/group/member/' + id)
            .map(function (response) {
            var result = response.json();
            return result.id;
        });
    };
    GroupService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return GroupService;
}());
GroupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GroupService);

function mapGroups(response) {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');
    // The response of the API has a content
    // property with the actual results
    return response.json().content.map(toGroup);
}
function toGroup(r) {
    var group = ({
        groupId: r.groupId,
        groupName: r.groupName,
        groupDescription: r.groupDescription
    });
    console.log('Parsed group:', group);
    return group;
}
function mapGroup(response) {
    return toGroup(response.json());
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sophisticated
    var errorMsg = error.message || "Yikes! There was was a problem and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errorMsg);
}
function groupToJson(group) {
    var doc = {
        groupId: group.groupId,
        groupName: group.groupName,
        groupDescription: group.groupDescription
    };
    //    return stringify ? JSON.stringify({ resource: [doc] }) : doc;
    return JSON.stringify(doc);
}
var _a;
//# sourceMappingURL=groups.service.js.map

/***/ }),

/***/ "../../../../../src/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_account__ = __webpack_require__("../../../../../src/models/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_account_events_service__ = __webpack_require__("../../../../../src/services/account.events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_securityToken__ = __webpack_require__("../../../../../src/models/securityToken.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginService = (function () {
    function LoginService(http, accountEventService, router) {
        this.http = http;
        this.accountEventService = accountEventService;
        this.router = router;
    }
    LoginService.prototype.authenticate = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["b" /* BACKEND_API_ROOT_URL */] + __WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["a" /* BACKEND_API_AUTHENTICATE_PATH */], JSON.stringify({ login: username, password: password }), { headers: headers })
            .catch(function (error) {
            if (error.status === 401) {
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Unauthorized');
            }
            // do any other checking for statuses here
        })
            .map(function (res) {
            var securityToken = new __WEBPACK_IMPORTED_MODULE_6__models_securityToken__["a" /* SecurityToken */]({
                publicSecret: res.headers.get(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["g" /* HEADER_X_SECRET */]),
                securityLevel: res.headers.get(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["d" /* HEADER_WWW_AUTHENTICATE */])
            });
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["c" /* CSRF_CLAIM_HEADER */], res.headers.get(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["c" /* CSRF_CLAIM_HEADER */]));
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["h" /* STORAGE_ACCOUNT_TOKEN */], res.text());
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["i" /* STORAGE_SECURITY_TOKEN */], JSON.stringify(securityToken));
            var account = new __WEBPACK_IMPORTED_MODULE_4__models_account__["a" /* Account */](res.json());
            account.authenticated = true;
            _this.sendLoginSuccess(account);
            return account;
        });
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(errMsg);
    };
    LoginService.prototype.sendLoginSuccess = function (account) {
        if (!account) {
            account = new __WEBPACK_IMPORTED_MODULE_4__models_account__["a" /* Account */](JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["h" /* STORAGE_ACCOUNT_TOKEN */])));
        }
        this.accountEventService.loginSuccess(account);
    };
    LoginService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["h" /* STORAGE_ACCOUNT_TOKEN */]);
    };
    LoginService.prototype.removeAccount = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["h" /* STORAGE_ACCOUNT_TOKEN */]);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["i" /* STORAGE_SECURITY_TOKEN */]);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["c" /* CSRF_CLAIM_HEADER */]);
    };
    LoginService.prototype.logout = function (callServer) {
        var _this = this;
        if (callServer === void 0) { callServer = true; }
        console.log('Logging out');
        if (callServer) {
            this.http.get(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["b" /* BACKEND_API_ROOT_URL */] + '/logout').subscribe(function () {
                _this.accountEventService.logout(new __WEBPACK_IMPORTED_MODULE_4__models_account__["a" /* Account */](JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["h" /* STORAGE_ACCOUNT_TOKEN */]))));
                _this.removeAccount();
                _this.router.navigate(['/about']);
            });
        }
        else {
            this.removeAccount();
            this.router.navigate(['/about']);
        }
    };
    LoginService.prototype.isAuthorized = function (roles) {
        var authorized = false;
        var authorities = [];
        if (this.isAuthenticated() && roles) {
            var account = new __WEBPACK_IMPORTED_MODULE_4__models_account__["a" /* Account */](JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__app_utils_app_utils__["h" /* STORAGE_ACCOUNT_TOKEN */])));
            if (account && account.authorities) {
                for (var i = 0; i < account.authorities.length; i++) {
                    var obj = account.authorities[i];
                    authorities.push(obj.authority);
                }
                account.authoritiesStringArray = authorities;
                roles.forEach(function (role) {
                    if (authorities.indexOf(role) !== -1) {
                        authorized = true;
                    }
                });
            }
        }
        return authorized;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_account_events_service__["a" /* AccountEventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_account_events_service__["a" /* AccountEventsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginService);

var _a, _b, _c;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_account__ = __webpack_require__("../../../../../src/models/account.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_utils_app_utils__["b" /* BACKEND_API_ROOT_URL */] + '/users')
            .map(function (res) {
            var users = [];
            var jsonResults = res.json();
            jsonResults.forEach(function (jsonResult) {
                var authorities = [];
                var account = new __WEBPACK_IMPORTED_MODULE_3__models_account__["a" /* Account */](jsonResult);
                for (var i = 0; i < account.authorities.length; i++) {
                    var obj = account.authorities[i];
                    authorities.push(obj.authority);
                }
                account.authoritiesStringArray = authorities;
                users.push(account);
            });
            return users;
        });
    };
    UsersService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_utils_app_utils__["b" /* BACKEND_API_ROOT_URL */] + '/users/' + id).map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_3__models_account__["a" /* Account */](res.json());
        });
    };
    UsersService.prototype.getProfiles = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_utils_app_utils__["b" /* BACKEND_API_ROOT_URL */] + '/users/profiles').map(function (res) { return res.json(); });
    };
    UsersService.prototype.saveUser = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_utils_app_utils__["b" /* BACKEND_API_ROOT_URL */] + '/users/' + account.id, JSON.stringify(account), { headers: headers })
            .map(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_3__models_account__["a" /* Account */](res.json());
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map