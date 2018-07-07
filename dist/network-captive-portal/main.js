(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/call-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/call-api.service.ts ***!
  \**********************************************/
/*! exports provided: CallAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallAPIService", function() { return CallAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/catch'; // don't forget this, or you'll get a runtime error

// import 'rxjs/Rx';

// import 'rxjs/add/operator/map';
var CallAPIService = /** @class */ (function () {
    function CallAPIService(http) {
        this.http = http;
        this.baseUrl = "http://104.217.253.15:8000/api/";
        this.errorCode = 0;
    }
    CallAPIService.prototype.setErrorCode = function (errorCode) {
        this.errorCode = errorCode;
    };
    CallAPIService.prototype.getErrorCode = function () {
        return this.errorCode;
    };
    // post(url, data) {
    //   return this.http.post(this.baseUrl + url, data)
    //     .pipe(
    //     tap(
    //       (Response: Response) => {
    //         return Response;
    //       })
    //     );
    // }
    CallAPIService.prototype.post = function (url, data, token) {
        if (token === void 0) { token = ""; }
        var _options = {};
        if (token != "")
            _options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', "Authorization": token }) };
        return this.http.post(this.baseUrl + url, data, _options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleServerError));
    };
    CallAPIService.prototype.get = function (url) {
        return this.http.get(this.baseUrl + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleServerError));
    };
    CallAPIService.prototype.handleServerError = function (error) {
        console.log(error.error || error.json() || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.error || error.json() || error || 'Server error');
    };
    CallAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CallAPIService);
    return CallAPIService;
}());



/***/ }),

/***/ "./src/app/Services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalService = /** @class */ (function () {
    function GlobalService(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.params = {};
    }
    GlobalService.prototype.setParams = function (params) {
        this.params = params;
    };
    GlobalService.prototype.getParams = function () {
        return this.params;
    };
    GlobalService.prototype.sampleDialog = function (title, containt, withRefrech) {
        if (withRefrech === void 0) { withRefrech = false; }
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__["DialogComponent"], {
            data: { title: title, containt: containt }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (withRefrech == true) {
                location.reload();
            }
        });
    };
    GlobalService.prototype.goTo = function (newURL, isLocal) {
        if (isLocal === void 0) { isLocal = true; }
        if (isLocal)
            this.router.navigate([newURL]);
        else
            window.location.href = newURL;
    };
    GlobalService.prototype.somthingError = function (mainMessage) {
        // this.APIServe.setErrorCode(0);
        this.sampleDialog(mainMessage, "هناك مشكلة ما");
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/Services/log-in-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/log-in-service.service.ts ***!
  \****************************************************/
/*! exports provided: LogInServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInServiceService", function() { return LogInServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogInServiceService = /** @class */ (function () {
    function LogInServiceService() {
    }
    LogInServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogInServiceService);
    return LogInServiceService;
}());



/***/ }),

/***/ "./src/app/Services/main-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/main-service.service.ts ***!
  \**************************************************/
/*! exports provided: MainServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServiceService", function() { return MainServiceService; });
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.service */ "./src/app/Services/global.service.ts");
/* harmony import */ var _call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-api.service */ "./src/app/Services/call-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainServiceService = /** @class */ (function () {
    function MainServiceService(API, global) {
        this.API = API;
        this.global = global;
    }
    MainServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallAPIService"], _global_service__WEBPACK_IMPORTED_MODULE_0__["GlobalService"]])
    ], MainServiceService);
    return MainServiceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _success_login_success_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-login/success-login.component */ "./src/app/success-login/success-login.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _Services_call_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/call-api.service */ "./src/app/Services/call-api.service.ts");
/* harmony import */ var _Services_log_in_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/log-in-service.service */ "./src/app/Services/log-in-service.service.ts");
/* harmony import */ var _Services_main_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/main-service.service */ "./src/app/Services/main-service.service.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mydatepicker */ "./node_modules/ngx-mydatepicker/index.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _verification_verification_component__WEBPACK_IMPORTED_MODULE_0__["VerificationComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"], _success_login_success_login_component__WEBPACK_IMPORTED_MODULE_2__["SuccessLoginComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], mydatepicker__WEBPACK_IMPORTED_MODULE_16__["MyDatePickerModule"], ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMyDatePickerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["routes"], { useHash: true })
                // material
                ,
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"]
            ],
            providers: [_Services_main_service_service__WEBPACK_IMPORTED_MODULE_7__["MainServiceService"], _Services_log_in_service_service__WEBPACK_IMPORTED_MODULE_6__["LogInServiceService"], _Services_call_api_service__WEBPACK_IMPORTED_MODULE_5__["CallAPIService"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _success_login_success_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success-login/success-login.component */ "./src/app/success-login/success-login.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");





var routes = [
    {
        path: 'reset',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]
    },
    // {
    //     path: 'login/:mac/:ip/:username/:link-login/:link-orig/:error/:trial/:login-by/:chap-challenge/:link-login-only/:link-orig-esc/:mac-esc/:identity/:bytes-in-nice/:bytes-out-nice',
    //     component: MainPageComponent
    // },
    {
        path: 'login',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]
    },
    {
        path: 'successLogin',
        component: _success_login_success_login_component__WEBPACK_IMPORTED_MODULE_2__["SuccessLoginComponent"]
    },
    {
        path: 'verification',
        component: _verification_verification_component__WEBPACK_IMPORTED_MODULE_0__["VerificationComponent"]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<div class=\"SignInModule\">\n    <div class=\"SignInModule-header\" style=\"direction: rtl;\">\n        <div class=\"SignInModule-header-title\">\n            {{title}}\n        </div>\n        <div class=\"SignInModule-header-close\" (click)=\"closeModal()\">\n        </div>\n    </div>\n    <div class=\"SignInModule-body\">\n        <div class=\"SignInModule-body-inputcontainer\">\n            <label for=\"name\">{{containt}}</label>\n        </div>\n        \n        <div (click)=\"cansel()\" class=\"SignInModule-body-inputcontainer SignInModule-body-btn\">\n            تم\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.scss":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Cairo-Bold;\n  src: url('Cairo-Bold.ttf'); }\n\n.SignInModule {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  /*width: 35%;*/\n  font-family: Cairo-Bold;\n  background-color: white; }\n\n@media screen and (max-width: 700px) {\n  /* line 13, ../sass/_SignInModule.scss */\n  .SignInModule {\n    width: 100%; } }\n\n@media screen and (max-width: 780px) {\n  .SignUpModule-body-inputcontainer {\n    padding: 0; } }\n\n/* line 22, ../sass/_SignInModule.scss */\n\n.SignInModule-header {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n  background-color: #bd59d4;\n  color: #fff;\n  width: 100%;\n  line-height: 50px;\n  font-size: 14px; }\n\n/* line 31, ../sass/_SignInModule.scss */\n\n.SignInModule-header-title {\n  padding-right: 10px;\n  text-align: right;\n  flex-grow: 4; }\n\n/* line 36, ../sass/_SignInModule.scss */\n\n.SignInModule-header-close {\n  flex-grow: 1;\n  background-color: #bd59d4;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 18.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%224.6 2236.1 1190 1190%22 enable-background%3D%22new 4.6 2236.1 1190 1190%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M936.6%2C3209.6c-10.6%2C0-21.3-4.1-29.4-12.2l-674-674c-16.2-16.2-16.2-42.6%2C0-58.8%0D%09%09%09c16.2-16.2%2C42.6-16.2%2C58.8%2C0l674%2C674c16.2%2C16.2%2C16.2%2C42.6%2C0%2C58.8C957.9%2C3205.6%2C947.2%2C3209.6%2C936.6%2C3209.6z%22%2F%3E%0D%09%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M936.6%2C3233.4c-17.5%2C0-33.9-6.8-46.2-19.1l-674-674c-25.5-25.5-25.5-66.9%2C0-92.4%0D%09%09%09c12.3-12.3%2C28.8-19.1%2C46.2-19.1c17.5%2C0%2C33.9%2C6.8%2C46.2%2C19.1l674%2C674c12.3%2C12.3%2C19.1%2C28.8%2C19.1%2C46.2c0%2C17.5-6.8%2C33.9-19.1%2C46.2%0D%09%09%09C970.4%2C3226.6%2C954%2C3233.4%2C936.6%2C3233.4z M262.6%2C2476.2c-4.8%2C0-9.3%2C1.9-12.6%2C5.2c-7%2C7-7%2C18.3%2C0%2C25.3l674%2C674%0D%09%09%09c3.4%2C3.4%2C7.9%2C5.2%2C12.6%2C5.2s9.3-1.9%2C12.6-5.2c3.4-3.4%2C5.2-7.9%2C5.2-12.6c0-4.8-1.9-9.3-5.2-12.6l-674-674%0D%09%09%09C271.9%2C2478.1%2C267.4%2C2476.2%2C262.6%2C2476.2z%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%09%3Cg%3E%0D%09%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M262.6%2C3209.6c-10.6%2C0-21.3-4.1-29.4-12.2c-16.2-16.2-16.2-42.6%2C0-58.8l674-674%0D%09%09%09c16.2-16.2%2C42.6-16.2%2C58.8%2C0c16.2%2C16.2%2C16.2%2C42.6%2C0%2C58.8l-674%2C674C283.9%2C3205.6%2C273.2%2C3209.6%2C262.6%2C3209.6z%22%2F%3E%0D%09%09%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M262.6%2C3233.4c-17.5%2C0-33.9-6.8-46.2-19.1c-25.5-25.5-25.5-66.9%2C0-92.4l674-674%0D%09%09%09c12.3-12.3%2C28.8-19.1%2C46.2-19.1c17.5%2C0%2C33.9%2C6.8%2C46.2%2C19.1c12.3%2C12.3%2C19.1%2C28.8%2C19.1%2C46.2c0%2C17.5-6.8%2C33.9-19.1%2C46.2l-674%2C674%0D%09%09%09C296.5%2C3226.6%2C280.1%2C3233.4%2C262.6%2C3233.4z M936.6%2C2476.2c-4.8%2C0-9.3%2C1.9-12.6%2C5.2l-674%2C674c-7%2C7-7%2C18.3%2C0%2C25.3%0D%09%09%09c3.4%2C3.4%2C7.9%2C5.2%2C12.6%2C5.2c4.8%2C0%2C9.3-1.9%2C12.6-5.2l674-674c3.4-3.4%2C5.2-7.9%2C5.2-12.6c0-4.8-1.9-9.3-5.2-12.6%0D%09%09%09S941.3%2C2476.2%2C936.6%2C2476.2z%22%2F%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  /*background-image: url(../../assets/imgs/magnifier.svg);*/\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-position: center;\n  border-radius: 5px 0px 0px 5px;\n  cursor: pointer;\n  height: 48px;\n  max-width: 50px;\n  min-width: 50px; }\n\n/* line 50, ../sass/_SignInModule.scss */\n\n.SignInModule-body {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 5px;\n  width: 100%;\n  background-color: white; }\n\n/* line 58, ../sass/_SignInModule.scss */\n\n.SignInModule-body-inputcontainer {\n  width: 85%;\n  max-width: 95%;\n  padding: 5px 0; }\n\n/* line 62, ../sass/_SignInModule.scss */\n\n.SignInModule-body-inputcontainer label {\n  color: #525C65;\n  font-size: 12px; }\n\n/* line 66, ../sass/_SignInModule.scss */\n\n.SignInModule-body-inputcontainer-text {\n  width: 100%;\n  border: 1px solid transparent;\n  color: #525C65;\n  border-bottom: 1px solid #525C65;\n  height: 35px;\n  font-size: 18px;\n  padding-bottom: 4px;\n  padding-top: 5px; }\n\n/* line 76, ../sass/_SignInModule.scss */\n\n.SignInModule-body-inputcontainer-select {\n  width: 100%;\n  font-size: 18px;\n  height: 35px;\n  border: 1px solid transparent;\n  background-color: #fff;\n  color: #525C65;\n  border-bottom: 1px solid #525C65; }\n\n/* line 85, ../sass/_SignInModule.scss */\n\n.SignInModule-body-inputcontainer-checkboxcontainer {\n  margin-top: 26px; }\n\n/* line 88, ../sass/_SignInModule.scss */\n\n.SignInModule-body-inputcontainer-checkboxlabel {\n  vertical-align: middle; }\n\n/* line 92, ../sass/_SignInModule.scss */\n\n.SignInModule-body-btn {\n  box-shadow: 0 0 7px 0 #525c65;\n  transition: all 150ms linear;\n  background-color: #525C65;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n  font-family: Cairo-Bold;\n  height: 42px;\n  line-height: 32px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  padding: 6px 46px;\n  text-align: center;\n  text-align: center;\n  text-decoration: none; }\n\n/* line 108, ../sass/_SignInModule.scss */\n\n.SignInModule-body-btn:hover {\n  box-shadow: 0 0 15px 0 #525c65; }\n\n/* line 113, ../sass/_SignInModule.scss */\n\n.SignInModule-footer {\n  margin-top: 40px;\n  background-color: white;\n  text-align: center;\n  background-color: white;\n  color: #525C65;\n  width: 100%;\n  line-height: 50px;\n  font-size: 14px; }\n\n@media screen and (max-width: 780px) {\n  .SignUpModule-body-inputcontainer {\n    line-height: 35px;\n    margin-top: 0; }\n  .SignUpModule-footer {\n    margin-top: 0; } }\n\n/* line 3, ../sass/_SignInModuleContainer.scss */\n\n.SignInModuleContainer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.containt = data.containt;
    }
    DialogComponent.prototype.cansel = function () {
        this.dialogRef.close(false);
    };
    DialogComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/dialog/dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"login100-form\" class=\"login100-form validate-form\">\n\t\t\t<span class=\"login100-form-title p-b-37\">\n\t\t\t\t\tتسجيل الدخول\n\t\t\t\t</span>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الهاتف\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"phone-l\" placeholder=\"رقم الهاتف\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.password\" type=\"password\" name=\"pass-l\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t<button (click)=\"signIn()\" class=\"login100-form-btn\">\n\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t  أو\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button    id=\"signup-form-btn\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"signup100-form\" class=\"signup100-form validate-form \">\n\t\t\t<span class=\"signup100-form-title p-b-37\">\n\t\t\t\t\tحساب جديد\n\t\t\t\t</span> \n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الاسم\">\n\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username-s\" placeholder=\"الاسم\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني\">\n\t\t\t\t<input class=\"input100\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email-s\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass-s\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"كلمة المرور غير متطابقة !\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass-re-s\" placeholder=\"أعد إدخال كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الموبايل\">\n\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username-s\" [(ngModel)]=\"user.mobile\" placeholder=\"رقم الموبايل\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\"  data-validate=\"يرجى إدخال تاريخ الميلاد\">\n\t\t\t\t<input ngx-mydatepicker name=\"mydate\" [(ngModel)]=\"user.birthdate\" [options]=\"myOptions\"\n\t\t\t #dp=\"ngx-mydatepicker\" class=\"input100\" (click)=\"dp.toggleCalendar()\" type=\"text\" id=\"birth-s\" name=\"birth-s\" placeholder=\"الميلاد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار الجنس\">\n\t\t\t\t<select class=\"form-control select-input100\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.gender\" id=\"sel1\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>الجنس</option>\n\t\t\t\t\t\t<option  value=\"ذكر\">ذكر</option>\n\t\t\t\t\t\t<option value=\"أنثى\">أنثى</option>\n\t\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار مهنة من القائمة\">\n\t\t\t\t<select class=\"form-control select-input100\" id=\"sel2\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.profession\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>المهنة</option>\n\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t<option value=\"4\">4</option>\n \t\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button (click)=\"signUp()\" type=\"submit\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>-->\n\n\n\n<div class=\"container-login100\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"login100-form\" class=\"login100-form validate-form \">\n\t\t\t<span class=\"login100-form-title p-b-37\">\n\t\t\t\t\tتسجيل الدخول\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني \">\n\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"loginUser.email\" name=\"phone-l\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" type=\"password\" [(ngModel)]=\"loginUser.password\" name=\"pass-l\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t<button (click)=\"signIn()\" class=\"login100-form-btn\">\n\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t  أو\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button id=\"signup-form-btn\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\" style=\"padding: 10px;\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t<a id=\"forget100-form-show\" href=\"#\">نسيت كلمة المرور ؟</a>\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\" style=\"padding: 10px;padding-bottom: 0px\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t<a id=\"forget100-form-show\" routerLink=\"{{'/verification'}}\">تاكيد الحساب ؟</a>\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"forget100-form\" class=\"forget100-form validate-form \">\n\t\t\t<span class=\"forget100-form-title p-b-37\">\n\t\t\t\t\tأدخل البريد الإلكتروني الخاص بك و سيتم إرسال رسالة لاستعادة كلمة المرور\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني\">\n\t\t\t\t<input class=\"input100\" type=\"text\" name=\"phone-f\" [(ngModel)]=\"loginUser.email\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"container-forget100-form-btn\">\n\t\t\t\t<button id=\"verify100-form-show\" (click)=\"resetPassword()\" class=\"forget100-form-btn\">\n\t\t\t\t\tإرسال الرمز\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t<a id=\"back-to-login\" href=\"#\">العودة للخلف</a>\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"signup100-form\" class=\"signup100-form validate-form \">\n\t\t\t<span class=\"signup100-form-title p-b-37\">\n\t\t\t\t\tحساب جديد\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الاسم\">\n\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username-s\" placeholder=\"الاسم\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني\">\n\t\t\t\t<input class=\"input100\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email-s\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass-s\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الموبايل\">\n\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username-s\" [(ngModel)]=\"user.mobile\" placeholder=\"رقم الموبايل\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال تاريخ الميلاد\">\n\t\t\t\t<input ngx-mydatepicker name=\"mydate\" [(ngModel)]=\"user.birthdate\" [options]=\"myOptions\" #dp=\"ngx-mydatepicker\" class=\"input100\"\n\t\t\t\t (click)=\"dp.toggleCalendar()\" type=\"text\" id=\"birth-s\" name=\"birth-s\" placeholder=\"الميلاد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار الجنس\">\n\t\t\t\t<select class=\"form-control select-input100\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.gender\" id=\"sel1\">\n\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>الجنس</option>\n\t\t\t\t\t<option  value=\"ذكر\">ذكر</option>\n\t\t\t\t\t<option value=\"أنثى\">أنثى</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار مهنة من القائمة\">\n\t\t\t\t<select class=\"form-control select-input100\" id=\"sel2\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.profession\">\n\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>المهنة</option>\n\t\t\t\t\t<option value=\"الإدارة وخدمات الدعم الإداري\">الإدارة وخدمات الدعم الإداري</option>\n\t\t\t\t\t<option value=\"النقل والخدمات اللوجستية\">النقل والخدمات اللوجستية</option>\n\t\t\t\t\t<option value=\"لخدمات الإجتماعية\">الخدمات الإجتماعية</option>\n\t\t\t\t\t<option value=\"الإعلام والإعلان\">الإعلام والإعلان</option>\n\t\t\t\t\t<option value=\"المبيعات والتسويق\">المبيعات والتسويق</option>\n\t\t\t\t\t<option value=\"والتصنيع\">الصناعة والتصنيع</option>\n\t\t\t\t\t<option value=\"الخدمات الطبية والعلوم\">الخدمات الطبية والعلوم</option>\n\t\t\t\t\t<option value=\"الطاقة والنفط والغاز\">الطاقة والنفط والغاز</option>\n\t\t\t\t\t<option value=\"فنادق ومطاعم\">فنادق ومطاعم</option>\n\t\t\t\t\t<option value=\"التشيد والعقارات\">التشيد والعقارات</option>\n\t\t\t\t\t<option value=\"البنوك والصيرفة\">البنوك والصيرفة</option>\n\t\t\t\t\t<option value=\"التكنولوجيا والإتصالات\">التكنولوجيا والإتصالات</option>\n\t\t\t\t\t<option value=\"محاسبة\">محاسبة</option>\n\t\t\t\t\t<option value=\"تعليم\">تعليم</option>\n\t\t\t\t\t<option value=\"الفنون والتصميم\">الفنون والتصميم</option>\n\t\t\t\t\t<option value=\"خدمات قانونية\">خدمات قانونية</option>\n\t\t\t\t\t<option value=\"المهن اليدوية والحرفية\">المهن اليدوية والحرفية</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button type=\"submit\" (click)=\"signUp()\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t<a id=\"signin-form-btn\" href=\"#\">العودة لتسجيل الدخول</a>\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"successLogin-form\" class=\"verify100-form validate-form\" style=\"\">\n\t\t\t<span class=\"verify100-form-title p-b-37\">\n                تم تسجيل الدخول بنجاح\n\t\t\t\t</span>\n\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button id=\"signup-form-btn\" (click)=\"gotToLink()\" class=\"signup100-btn\">\n\t\t\t\t\tالذهاب لصبحة النت\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n<!--\n\t\t<form id=\"successLogin-form\" class=\"verify100-form validate-form\" style=\"\"  action=\"https://www.google.com/\" target=\"_blank\" method=\"post\">\n\t\t\t<input type=\"\" name=\"dst\" value=\"ASAS\" />\n\t\t\t<input type=\"\" name=\"popup\" value=\"true\" />\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n  <input type=\"submit\" value=\"Submit\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>-->\n\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>"

/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _Services_main_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Services/main-service.service */ "./src/app/Services/main-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(mainServ, route) {
        var _this = this;
        this.mainServ = mainServ;
        this.route = route;
        this.user = {};
        this.loginUser = {};
        this.reset = {};
        this.myOptions = {
            minYear: 1901,
            maxYear: 2020,
            // TODO
            // maxYear: parseInt(moment().format('YYYY'), 10),
            dateFormat: 'dd.mm.yyyy',
        };
        this.user['birthdate'] = { date: { year: 2018, month: 10, day: 9 } };
        this.route.queryParams
            .subscribe(function (params) {
            if (params['mac'] != null) {
                console.log("Params");
                _this.mainServ.global.setParams(params);
            }
            else {
                console.log("no Params");
            }
        });
    }
    MainPageComponent.prototype.validateAll = function () {
        var input = $('.signup100-form.validate-input .input100  ,.signup100-form.validate-input .select-input100');
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (this.validate(input[i]) == false) {
                check = false;
            }
        }
        return check;
    };
    MainPageComponent.prototype.validate = function (input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                alert("email is false");
                return false;
            }
        }
        else if ($(input).is('select')) {
            if ($(input).val() == null) {
                alert("select is false");
                return false;
            }
        }
        else {
            if ($(input).val().toString().trim() == '') {
                console.log("input");
                console.log(input);
                return false;
            }
        }
    };
    MainPageComponent.prototype.ngOnInit = function () {
        (function ($) {
            "use strict";
            /*==================================================================
            [ Hide Login Form And Show signup Form ]*/
            // $('#date').bootstrapMaterialDatePicker({ weekStart: 0, time: false });
            $('#date').hide();
            $("#signup-form-btn").click(function (evt) {
                evt.preventDefault();
                $('#signup100-form').removeClass('animated fadeOutUp');
                $('#login100-form').removeClass('animated fadeInDown');
                ;
                $('#login100-form').addClass('animated fadeOutDown');
                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#signup100-form').show();
                    $('#signup100-form').addClass('animated fadeInUp');
                    ;
                }, 500);
                $('#birth-s').val('');
            });
            $("#signin-form-btn").click(function (evt) {
                evt.preventDefault();
                $('#signup100-form').removeClass('animated fadeInUp');
                ;
                $('#login100-form').removeClass('animated fadeOutDown');
                $('#signup100-form').addClass('animated fadeOutUp');
                setTimeout(function () {
                    $('#signup100-form').hide();
                    $('#login100-form').show();
                    $('#login100-form').addClass('animated fadeInDown');
                    ;
                }, 500);
                $('#birth-s').val('');
            });
            /*==================================================================
            [ Hide Login Form And Show forget Form ]*/
            $("#forget100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#forget100-form').removeClass('animated fadeOutRight');
                $('#login100-form').removeClass('animated fadeInLeft');
                ;
                $('#login100-form').addClass('animated fadeOutLeft');
                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#forget100-form').show();
                    $('#forget100-form').addClass('animated fadeInRight');
                    ;
                }, 500);
            });
            $("#back-to-login").click(function (evt) {
                evt.preventDefault();
                $('#login100-form').removeClass('animated fadeOutLeft');
                $('#forget100-form').removeClass('animated fadeInRight');
                ;
                $('#forget100-form').addClass('animated fadeOutRight');
                setTimeout(function () {
                    $('#forget100-form').hide();
                    $('#login100-form').show();
                    $('#login100-form').addClass('animated fadeInLeft');
                    ;
                }, 500);
            });
            /*==================================================================
            [ Hide Forget Form And Show verify Form ]*/
            // $("#verify100-form-show").click(function (evt) {
            //     evt.preventDefault();
            //     $('#forget100-form').addClass('animated fadeOutLeft');
            //     setTimeout(function () {
            //         $('#forget100-form').hide();
            //         $('#verify100-form').show();
            //         $('#verify100-form').addClass('animated fadeInRight');;
            //     }, 500);
            // });
            /*==================================================================
            [ Hide verify Form And Show reset Form ]*/
            $("#reset100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#verify100-form').addClass('animated fadeOutLeft');
                setTimeout(function () {
                    $('#verify100-form').hide();
                    $('#reset100-form').show();
                    $('#reset100-form').addClass('animated fadeInRight');
                    ;
                }, 500);
            });
            /*==================================================================
            [ Data Picker Setup ]*/
            // $('input[name="birth-s"]').daterangepicker({
            //     singleDatePicker: true,
            //     showDropdowns: true,
            //     minYear: 1901,
            //     maxYear: parseInt(moment().format('YYYY'), 10)
            // });
            /*==================================================================
            [ Validate after type ]*/
            $('.validate-input .input100 , .validate-input .select-input100').each(function () {
                $(this).on('blur', function () {
                    if (validate(this) == false) {
                        showValidate(this);
                    }
                    else {
                        $(this).parent().addClass('true-validate');
                    }
                });
            });
            /*==================================================================
            [ Validate after Change Menu ]*/
            $('.validate-input .select-input100').each(function () {
                $(this).on('change', function () {
                    console.log(this);
                    if (validate(this) == false) {
                        showValidate(this);
                    }
                    else {
                        $(this).parent().addClass('true-validate');
                    }
                });
            });
            /*==================================================================
            [ Validate ]*/
            var input = $('.validate-input .input100  , .validate-input .select-input100');
            $('.validate-form').on('submit', function () {
                var check = true;
                for (var i = 0; i < input.length; i++) {
                    if (validate(input[i]) == false) {
                        showValidate(input[i]);
                        check = false;
                    }
                }
                return check;
            });
            $('.validate-form .input100 , .validate-form .select-input100').each(function () {
                $(this).focus(function () {
                    hideValidate(this);
                    $(this).parent().removeClass('true-validate');
                });
            });
            function validate(input) {
                if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                    if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                        return false;
                    }
                }
                else if ($(input).is('select')) {
                    if ($(input).val() == null) {
                        return false;
                    }
                }
                else {
                    if ($(input).val().toString().trim() == '') {
                        return false;
                    }
                }
            }
            function showValidate(input) {
                var thisAlert = $(input).parent();
                $(thisAlert).addClass('alert-validate');
                $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>');
                $('.btn-hide-validate').each(function () {
                    $(this).on('click', function () {
                        hideValidate(this);
                    });
                });
            }
            function hideValidate(input) {
                var thisAlert = $(input).parent();
                $(thisAlert).removeClass('alert-validate');
                $(thisAlert).find('.btn-hide-validate').remove();
            }
        })(jQuery);
        // (function ($) {
        //     "use strict";
        //     /*==================================================================
        //     [ Hide Login Form ]*/
        //     $("#signup-form-btn").click(function (evt) {
        //         evt.preventDefault();
        //         $('#login100-form').addClass('animated fadeOutDown');
        //         setInterval(function () {
        //             $('#login100-form').hide();
        //             $('#signup100-form').show();
        //             $('#signup100-form').addClass('animated fadeInUp');;
        //         }, 1000);
        //         $('#birth-s').val('');
        //     });
        //     // $('input[name="birth-s"]').IMyDpOptions({
        //     //     singleDatePicker: true,
        //     //     showDropdowns: true,
        //     //     minYear: 1901,
        //     //     maxYear: 1902,
        //     //     //   maxYear: parseInt(moment().format('YYYY'),10)
        //     // });
        //     /*==================================================================
        //     [ Validate after type ]*/
        //     $('.validate-input .input100 , .validate-input .select-input100').each(function () {
        //         $(this).on('blur', function () {
        //             if (validate(this) == false) {
        //                 showValidate(this);
        //             }
        //             else {
        //                 $(this).parent().addClass('true-validate');
        //             }
        //         })
        //     });
        //     /*==================================================================
        //     [ Validate after Change Menu ]*/
        //     $('.validate-input .select-input100').each(function () {
        //         $(this).on('change', function () {
        //             console.log(this);
        //             if (validate(this) == false) {
        //                 showValidate(this);
        //             }
        //             else {
        //                 $(this).parent().addClass('true-validate');
        //             }
        //         })
        //     });
        //     /*==================================================================
        //     [ Validate ]*/
        //     var input = $('.validate-input .input100  , .validate-input .select-input100');
        //     $('.validate-form').on('submit', function () {
        //         var check = true;
        //         for (var i = 0; i < input.length; i++) {
        //             if (validate(input[i]) == false) {
        //                 showValidate(input[i]);
        //                 check = false;
        //             }
        //         }
        //         return check;
        //     });
        //     $('.validate-form .input100 , .validate-form .select-input100').each(function () {
        //         $(this).focus(function () {
        //             hideValidate(this);
        //             $(this).parent().removeClass('true-validate');
        //         });
        //     });
        //     function validate(input) {
        //         if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        //             if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //                 return false;
        //             }
        //         } else if ($(input).is('select')) {
        //             if ($(input).val() == null) {
        //                 return false;
        //             }
        //         }
        //         else {
        //             if ($(input).val().toString().trim() == '') {
        //                 return false;
        //             }
        //         }
        //     }
        //     function showValidate(input) {
        //         var thisAlert = $(input).parent();
        //         $(thisAlert).addClass('alert-validate');
        //         $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
        //         $('.btn-hide-validate').each(function () {
        //             $(this).on('click', function () {
        //                 hideValidate(this);
        //             });
        //         });
        //     }
        //     function hideValidate(input) {
        //         var thisAlert = $(input).parent();
        //         $(thisAlert).removeClass('alert-validate');
        //         $(thisAlert).find('.btn-hide-validate').remove();
        //     }
        // })(jQuery);
    };
    MainPageComponent.prototype.signUp = function () {
        var _this = this;
        if (this.validateAll() == true) {
            this.user['birthdate'] = this.user['birthdate']['jsdate'];
            if (this.user['mobile'].substring(0, 2) == "09") {
                this.user['mobile'] = "00963" + this.user['mobile'].substring(1);
            }
            else if (this.user['mobile'].substring(0, 4) == "+963") {
                this.user['mobile'] = "00963" + this.user['mobile'].substring(4);
            }
            this.mainServ.API.post("clients", this.user).subscribe(function (data) {
                if (_this.mainServ.API.getErrorCode() == 0) {
                    _this.mainServ.global.goTo('verification/');
                }
                else {
                    // if (this.mainServ.API.getErrorCode() == 401) {
                    _this.mainServ.global.somthingError("إنشاء الحساب");
                }
            });
        }
    };
    MainPageComponent.prototype.resetPassword = function () {
        var _this = this;
        this.mainServ.API.post("clients/reset", this.reset).subscribe(function (data) {
            if (_this.mainServ.API.getErrorCode() == 0) {
                _this.mainServ.global.goTo("reset/");
            }
            else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                _this.mainServ.global.somthingError("تسجيل الدخول");
            }
        });
    };
    MainPageComponent.prototype.signIn = function () {
        var _this = this;
        this.mainServ.API.post("clients/login?include=user", this.loginUser).subscribe(function (data) {
            if (_this.mainServ.API.getErrorCode() == 0) {
                $('#login100-form').addClass('animated fadeOut');
                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#successLogin-form').show();
                    $('#successLogin-form').addClass('animated fadeIn');
                    ;
                }, 500);
            }
            else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                _this.mainServ.global.somthingError("تسجيل الدخول");
            }
        });
    };
    MainPageComponent.prototype.gotToLink = function () {
        var params = this.mainServ.global.getParams();
        var link = params['link-login-only'];
        link += "?mac=" + params['mac'] +
            "&" + "ip=" + params['ip'] +
            "&" + "username=" + params['username'] +
            "&" + "link-login=" + params['link-login'] +
            "&" + "link-orig=" + params['link-orig'] +
            "&" + "error=" + params['error'] +
            "&" + "trial=" + params['trial'] +
            "&" + "login-by=" + params['login-by'] +
            "&" + "chap-id=" + params['chap-id'] +
            "&" + "chap-challenge=" + params['chap-challenge'] +
            "&" + "link-login-only=" + params['link-login-only'] +
            "&" + "link-orig-esc=" + params['link-orig-esc'] +
            "&" + "mac-esc=" + params['mac-esc'] +
            "&" + "identity=" + params['identity'] +
            "&" + "bytes-in-nice=" + params['bytes-in-nice'] +
            "&" + "bytes-out-nice=" + params['bytes-out-nice'] +
            "&" + "session-time-left=" + params['session-time-left'] +
            "&" + "uptime=" + params['uptime'] +
            "&" + "refresh-timeout=" + params['refresh-timeout'] +
            "&" + "link-status=" + params['link-status'];
        this.mainServ.global.goTo(link, false);
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_main_service_service__WEBPACK_IMPORTED_MODULE_0__["MainServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"login100-form\" class=\"login100-form validate-form\">\n\t\t\t<span class=\"login100-form-title p-b-37\">\n\t\t\t\t\tتسجيل الدخول\n\t\t\t\t</span>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الهاتف\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"phone-l\" placeholder=\"رقم الهاتف\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.password\" type=\"password\" name=\"pass-l\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t<button (click)=\"signIn()\" class=\"login100-form-btn\">\n\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t  أو\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button    id=\"signup-form-btn\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"signup100-form\" class=\"signup100-form validate-form \">\n\t\t\t<span class=\"signup100-form-title p-b-37\">\n\t\t\t\t\tحساب جديد\n\t\t\t\t</span> \n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الاسم\">\n\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username-s\" placeholder=\"الاسم\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني\">\n\t\t\t\t<input class=\"input100\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email-s\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass-s\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"كلمة المرور غير متطابقة !\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass-re-s\" placeholder=\"أعد إدخال كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الموبايل\">\n\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username-s\" [(ngModel)]=\"user.mobile\" placeholder=\"رقم الموبايل\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\"  data-validate=\"يرجى إدخال تاريخ الميلاد\">\n\t\t\t\t<input ngx-mydatepicker name=\"mydate\" [(ngModel)]=\"user.birthdate\" [options]=\"myOptions\"\n\t\t\t #dp=\"ngx-mydatepicker\" class=\"input100\" (click)=\"dp.toggleCalendar()\" type=\"text\" id=\"birth-s\" name=\"birth-s\" placeholder=\"الميلاد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار الجنس\">\n\t\t\t\t<select class=\"form-control select-input100\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.gender\" id=\"sel1\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>الجنس</option>\n\t\t\t\t\t\t<option  value=\"ذكر\">ذكر</option>\n\t\t\t\t\t\t<option value=\"أنثى\">أنثى</option>\n\t\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار مهنة من القائمة\">\n\t\t\t\t<select class=\"form-control select-input100\" id=\"sel2\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.profession\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>المهنة</option>\n\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t<option value=\"4\">4</option>\n \t\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button (click)=\"signUp()\" type=\"submit\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>-->\n\n\n\n<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n    <div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n        <form id=\"verify100-form\" class=\"verify100-form validate-form\" style=\"display: inherit\">\n            <span class=\"verify100-form-title p-b-37\">\n                404 Not Found !\n\t\t\t\t</span>\n        </form>\n        <!--<form id=\"reset100-form\" class=\"reset100-form validate-form \">\n\t\t\t<span class=\"forget100-form-title p-b-37\">\n\t\t\t\t\tيرجى إدخال كلمة المرور الجديدة\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال كلمة المرور\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"newPassword-r\" [(ngModel)]=\"newPassword.newpasword\" placeholder=\"كلمة المرور الجديد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"container-reset100-form-btn\">\n\t\t\t\t<button class=\"reset100-form-btn\">\n\t\t\t\t\tتعيين كلمة المرور \n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>-->\n\n    </div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"login100-form\" class=\"login100-form validate-form\">\n\t\t\t<span class=\"login100-form-title p-b-37\">\n\t\t\t\t\tتسجيل الدخول\n\t\t\t\t</span>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الهاتف\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"phone-l\" placeholder=\"رقم الهاتف\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.password\" type=\"password\" name=\"pass-l\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t<button (click)=\"signIn()\" class=\"login100-form-btn\">\n\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t  أو\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button    id=\"signup-form-btn\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"signup100-form\" class=\"signup100-form validate-form \">\n\t\t\t<span class=\"signup100-form-title p-b-37\">\n\t\t\t\t\tحساب جديد\n\t\t\t\t</span> \n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الاسم\">\n\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username-s\" placeholder=\"الاسم\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني\">\n\t\t\t\t<input class=\"input100\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email-s\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass-s\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"كلمة المرور غير متطابقة !\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass-re-s\" placeholder=\"أعد إدخال كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الموبايل\">\n\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username-s\" [(ngModel)]=\"user.mobile\" placeholder=\"رقم الموبايل\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\"  data-validate=\"يرجى إدخال تاريخ الميلاد\">\n\t\t\t\t<input ngx-mydatepicker name=\"mydate\" [(ngModel)]=\"user.birthdate\" [options]=\"myOptions\"\n\t\t\t #dp=\"ngx-mydatepicker\" class=\"input100\" (click)=\"dp.toggleCalendar()\" type=\"text\" id=\"birth-s\" name=\"birth-s\" placeholder=\"الميلاد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار الجنس\">\n\t\t\t\t<select class=\"form-control select-input100\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.gender\" id=\"sel1\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>الجنس</option>\n\t\t\t\t\t\t<option  value=\"ذكر\">ذكر</option>\n\t\t\t\t\t\t<option value=\"أنثى\">أنثى</option>\n\t\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار مهنة من القائمة\">\n\t\t\t\t<select class=\"form-control select-input100\" id=\"sel2\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.profession\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>المهنة</option>\n\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t<option value=\"4\">4</option>\n \t\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button (click)=\"signUp()\" type=\"submit\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>-->\n\n\n\n<div class=\"container-login100\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"verify100-form\" class=\"verify100-form validate-form\" style=\"display: inherit\">\n\t\t\t<span class=\"verify100-form-title p-b-37\">\n\t\t\t\t\tيرجى إدخال الرمز الذي سيصل إلى هاتفك ورقم الهاتف للتحقق من الحساب\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الرمز الخاص بك\">\n\t\t\t\t<input id=\"code-input-reset\" class=\"input100\" type=\"text\" name=\"code-v\" [(ngModel)]=\"code.code\" placeholder=\"رمز التحقق\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الهاتف الخاص بك\">\n\t\t\t\t<input id=\"mobile-input-reset\" class=\"input100\" type=\"text\" name=\"code-v\" [(ngModel)]=\"code.mobile\" placeholder=\"رقم الهاتف\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"newPassword\">\n\t\t\t\t<span class=\"forget100-form-title p-b-37\">\n\t\t\t\t\tيرجى إدخال كلمة المرور الجديدة\n\t\t\t\t</span>\n\t\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال كلمة المرور\">\n\t\t\t\t\t<input class=\"input100\" type=\"password\" name=\"newPassword-r\" [(ngModel)]=\"newPassword.newpasword\" placeholder=\"كلمة المرور الجديد\">\n\t\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container-verify100-form-btn\">\n\t\t\t\t<button id=\"reset100-form-show\" class=\"verify100-form-btn\">\n\t\t\t\t\tتحديث\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--<form id=\"reset100-form\" class=\"reset100-form validate-form \">\n\t\t\t<span class=\"forget100-form-title p-b-37\">\n\t\t\t\t\tيرجى إدخال كلمة المرور الجديدة\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال كلمة المرور\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"newPassword-r\" [(ngModel)]=\"newPassword.newpasword\" placeholder=\"كلمة المرور الجديد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"container-reset100-form-btn\">\n\t\t\t\t<button class=\"reset100-form-btn\">\n\t\t\t\t\tتعيين كلمة المرور \n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>-->\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newPassword {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _Services_main_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Services/main-service.service */ "./src/app/Services/main-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(mainServ) {
        this.mainServ = mainServ;
        this.code = {};
        this.newPassword = {};
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        (function ($) {
            "use strict";
            /*==================================================================
            [ Hide Login Form And Show signup Form ]*/
            // $('#date').bootstrapMaterialDatePicker({ weekStart: 0, time: false });
            $('#date').hide();
            $("#signup-form-btn").click(function (evt) {
                evt.preventDefault();
                $('#login100-form').addClass('animated fadeOutDown');
                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#signup100-form').show();
                    $('#signup100-form').addClass('animated fadeInUp');
                    ;
                }, 500);
                $('#birth-s').val('');
            });
            /*==================================================================
            [ Hide Login Form And Show forget Form ]*/
            $("#forget100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#login100-form').addClass('animated fadeOutLeft');
                setTimeout(function () {
                    $('#login100-form').hide();
                    $('#forget100-form').show();
                    $('#forget100-form').addClass('animated fadeInRight');
                    ;
                }, 500);
            });
            /*==================================================================
            [ Hide Forget Form And Show verify Form ]*/
            $("#verify100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#forget100-form').addClass('animated fadeOutLeft');
                setTimeout(function () {
                    $('#forget100-form').hide();
                    $('#verify100-form').show();
                    $('#verify100-form').addClass('animated fadeInRight');
                    ;
                }, 500);
            });
            /*==================================================================
            [ Hide verify Form And Show reset Form ]*/
            $("#reset100-form-show").click(function (evt) {
                evt.preventDefault();
                $('#verify100-form').addClass('animated fadeOutLeft');
                setTimeout(function () {
                    $('#verify100-form').hide();
                    $('#reset100-form').show();
                    $('#reset100-form').addClass('animated fadeInRight');
                    ;
                }, 500);
            });
            /*==================================================================
            [ Data Picker Setup ]*/
            // $('input[name="birth-s"]').daterangepicker({
            //     singleDatePicker: true,
            //     showDropdowns: true,
            //     minYear: 1901,
            //     maxYear: parseInt(moment().format('YYYY'), 10)
            // });
            /*==================================================================
            [ Validate after type ]*/
            $('.validate-input .input100 , .validate-input .select-input100').each(function () {
                $(this).on('blur', function () {
                    if (validate(this) == false) {
                        showValidate(this);
                    }
                    else {
                        $(this).parent().addClass('true-validate');
                    }
                });
            });
            /*==================================================================
            [ Validate after Change Menu ]*/
            $('.validate-input .select-input100').each(function () {
                $(this).on('change', function () {
                    console.log(this);
                    if (validate(this) == false) {
                        showValidate(this);
                    }
                    else {
                        $(this).parent().addClass('true-validate');
                    }
                });
            });
            /*==================================================================
            [ Validate ]*/
            var input = $('.validate-input .input100  , .validate-input .select-input100');
            $('.validate-form').on('submit', function () {
                var check = true;
                for (var i = 0; i < input.length; i++) {
                    if (validate(input[i]) == false) {
                        showValidate(input[i]);
                        check = false;
                    }
                }
                return check;
            });
            $('.validate-form .input100 , .validate-form .select-input100').each(function () {
                $(this).focus(function () {
                    hideValidate(this);
                    $(this).parent().removeClass('true-validate');
                });
            });
            function validate(input) {
                if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                    if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                        return false;
                    }
                }
                else if ($(input).is('select')) {
                    if ($(input).val() == null) {
                        return false;
                    }
                }
                else {
                    if ($(input).val().toString().trim() == '') {
                        return false;
                    }
                }
            }
            function showValidate(input) {
                var thisAlert = $(input).parent();
                $(thisAlert).addClass('alert-validate');
                $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>');
                $('.btn-hide-validate').each(function () {
                    $(this).on('click', function () {
                        hideValidate(this);
                    });
                });
            }
            function hideValidate(input) {
                var thisAlert = $(input).parent();
                $(thisAlert).removeClass('alert-validate');
                $(thisAlert).find('.btn-hide-validate').remove();
            }
            $("#mobile-input-reset , #code-input-reset").on('input', function () {
                if ($('#mobile-input-reset').val() == "" || $('#mobile-input-reset').val() == null || $('#code-input-reset').val() == "" || $('#code-input-reset').val() == null) {
                    if ($('.newPassword').is(":hidden") == false) {
                        $('.newPassword').hide();
                    }
                }
                else {
                    if ($('.newPassword').is(":hidden") == true) {
                        $('.newPassword').show();
                    }
                }
            });
        })(jQuery);
        // (function ($) {
        //     "use strict";
        //     /*==================================================================
        //     [ Hide Login Form ]*/
        //     $("#signup-form-btn").click(function (evt) {
        //         evt.preventDefault();
        //         $('#login100-form').addClass('animated fadeOutDown');
        //         setInterval(function () {
        //             $('#login100-form').hide();
        //             $('#signup100-form').show();
        //             $('#signup100-form').addClass('animated fadeInUp');;
        //         }, 1000);
        //         $('#birth-s').val('');
        //     });
        //     // $('input[name="birth-s"]').IMyDpOptions({
        //     //     singleDatePicker: true,
        //     //     showDropdowns: true,
        //     //     minYear: 1901,
        //     //     maxYear: 1902,
        //     //     //   maxYear: parseInt(moment().format('YYYY'),10)
        //     // });
        //     /*==================================================================
        //     [ Validate after type ]*/
        //     $('.validate-input .input100 , .validate-input .select-input100').each(function () {
        //         $(this).on('blur', function () {
        //             if (validate(this) == false) {
        //                 showValidate(this);
        //             }
        //             else {
        //                 $(this).parent().addClass('true-validate');
        //             }
        //         })
        //     });
        //     /*==================================================================
        //     [ Validate after Change Menu ]*/
        //     $('.validate-input .select-input100').each(function () {
        //         $(this).on('change', function () {
        //             console.log(this);
        //             if (validate(this) == false) {
        //                 showValidate(this);
        //             }
        //             else {
        //                 $(this).parent().addClass('true-validate');
        //             }
        //         })
        //     });
        //     /*==================================================================
        //     [ Validate ]*/
        //     var input = $('.validate-input .input100  , .validate-input .select-input100');
        //     $('.validate-form').on('submit', function () {
        //         var check = true;
        //         for (var i = 0; i < input.length; i++) {
        //             if (validate(input[i]) == false) {
        //                 showValidate(input[i]);
        //                 check = false;
        //             }
        //         }
        //         return check;
        //     });
        //     $('.validate-form .input100 , .validate-form .select-input100').each(function () {
        //         $(this).focus(function () {
        //             hideValidate(this);
        //             $(this).parent().removeClass('true-validate');
        //         });
        //     });
        //     function validate(input) {
        //         if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        //             if ($(input).val().toString().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //                 return false;
        //             }
        //         } else if ($(input).is('select')) {
        //             if ($(input).val() == null) {
        //                 return false;
        //             }
        //         }
        //         else {
        //             if ($(input).val().toString().trim() == '') {
        //                 return false;
        //             }
        //         }
        //     }
        //     function showValidate(input) {
        //         var thisAlert = $(input).parent();
        //         $(thisAlert).addClass('alert-validate');
        //         $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
        //         $('.btn-hide-validate').each(function () {
        //             $(this).on('click', function () {
        //                 hideValidate(this);
        //             });
        //         });
        //     }
        //     function hideValidate(input) {
        //         var thisAlert = $(input).parent();
        //         $(thisAlert).removeClass('alert-validate');
        //         $(thisAlert).find('.btn-hide-validate').remove();
        //     }
        // })(jQuery);
    };
    ResetPasswordComponent.prototype.reset = function () {
        var _this = this;
        this.mainServ.API.post("clients/login?include=user", this.code).subscribe(function (data) {
            if (_this.mainServ.API.getErrorCode() == 0) {
                $("#reset100-form-show").click(function (evt) {
                    evt.preventDefault();
                    $('#verify100-form').addClass('animated fadeOutLeft');
                    setTimeout(function () {
                        $('#verify100-form').hide();
                        $('#reset100-form').show();
                        $('#reset100-form').addClass('animated fadeInRight');
                        ;
                    }, 500);
                });
            }
            else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                _this.mainServ.global.somthingError("نسيان كلمة السر");
            }
        });
    };
    ResetPasswordComponent.prototype.change = function () {
        var _this = this;
        this.mainServ.API.post("clients/login?include=user", this.code).subscribe(function (data) {
            if (_this.mainServ.API.getErrorCode() == 0) {
                $("#reset100-form-show").click(function (evt) {
                    evt.preventDefault();
                    $('#verify100-form').addClass('animated fadeOutLeft');
                    setTimeout(function () {
                        $('#verify100-form').hide();
                        $('#reset100-form').show();
                        $('#reset100-form').addClass('animated fadeInRight');
                        ;
                    }, 500);
                });
            }
            else {
                // if (this.mainServ.API.getErrorCode() == 401) {
                _this.mainServ.global.somthingError("إدخال الرمز");
            }
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_main_service_service__WEBPACK_IMPORTED_MODULE_0__["MainServiceService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/success-login/success-login.component.html":
/*!************************************************************!*\
  !*** ./src/app/success-login/success-login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"login100-form\" class=\"login100-form validate-form\">\n\t\t\t<span class=\"login100-form-title p-b-37\">\n\t\t\t\t\tتسجيل الدخول\n\t\t\t\t</span>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الهاتف\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"phone-l\" placeholder=\"رقم الهاتف\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.password\" type=\"password\" name=\"pass-l\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t<button (click)=\"signIn()\" class=\"login100-form-btn\">\n\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t  أو\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button    id=\"signup-form-btn\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"signup100-form\" class=\"signup100-form validate-form \">\n\t\t\t<span class=\"signup100-form-title p-b-37\">\n\t\t\t\t\tحساب جديد\n\t\t\t\t</span> \n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الاسم\">\n\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username-s\" placeholder=\"الاسم\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني\">\n\t\t\t\t<input class=\"input100\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email-s\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass-s\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"كلمة المرور غير متطابقة !\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass-re-s\" placeholder=\"أعد إدخال كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الموبايل\">\n\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username-s\" [(ngModel)]=\"user.mobile\" placeholder=\"رقم الموبايل\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\"  data-validate=\"يرجى إدخال تاريخ الميلاد\">\n\t\t\t\t<input ngx-mydatepicker name=\"mydate\" [(ngModel)]=\"user.birthdate\" [options]=\"myOptions\"\n\t\t\t #dp=\"ngx-mydatepicker\" class=\"input100\" (click)=\"dp.toggleCalendar()\" type=\"text\" id=\"birth-s\" name=\"birth-s\" placeholder=\"الميلاد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار الجنس\">\n\t\t\t\t<select class=\"form-control select-input100\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.gender\" id=\"sel1\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>الجنس</option>\n\t\t\t\t\t\t<option  value=\"ذكر\">ذكر</option>\n\t\t\t\t\t\t<option value=\"أنثى\">أنثى</option>\n\t\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار مهنة من القائمة\">\n\t\t\t\t<select class=\"form-control select-input100\" id=\"sel2\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.profession\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>المهنة</option>\n\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t<option value=\"4\">4</option>\n \t\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button (click)=\"signUp()\" type=\"submit\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>-->\n\n\n\n<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"verify100-form\" class=\"verify100-form validate-form\" style=\"display: inherit\">\n\t\t\t<span class=\"verify100-form-title p-b-37\">\n                تم تسجيل الدخول بنجاح\n\t\t\t\t</span>\n\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button id=\"signup-form-btn\" class=\"signup100-btn\">\n\t\t\t\t\tالذهاب لصبحة النت\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--<form id=\"reset100-form\" class=\"reset100-form validate-form \">\n\t\t\t<span class=\"forget100-form-title p-b-37\">\n\t\t\t\t\tيرجى إدخال كلمة المرور الجديدة\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال كلمة المرور\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"newPassword-r\" [(ngModel)]=\"newPassword.newpasword\" placeholder=\"كلمة المرور الجديد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"container-reset100-form-btn\">\n\t\t\t\t<button class=\"reset100-form-btn\">\n\t\t\t\t\tتعيين كلمة المرور \n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>-->\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>"

/***/ }),

/***/ "./src/app/success-login/success-login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/success-login/success-login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/success-login/success-login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/success-login/success-login.component.ts ***!
  \**********************************************************/
/*! exports provided: SuccessLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessLoginComponent", function() { return SuccessLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SuccessLoginComponent = /** @class */ (function () {
    function SuccessLoginComponent() {
    }
    SuccessLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'success-login',
            template: __webpack_require__(/*! ./success-login.component.html */ "./src/app/success-login/success-login.component.html"),
            styles: [__webpack_require__(/*! ./success-login.component.scss */ "./src/app/success-login/success-login.component.scss")]
        })
    ], SuccessLoginComponent);
    return SuccessLoginComponent;
}());



/***/ }),

/***/ "./src/app/verification/verification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/verification/verification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<!--component html goes here -->\n<!--<div class=\"container-login100\" style=\"background-image: url('images/bg-01.jpg');\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"login100-form\" class=\"login100-form validate-form\">\n\t\t\t<span class=\"login100-form-title p-b-37\">\n\t\t\t\t\tتسجيل الدخول\n\t\t\t\t</span>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الهاتف\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.email\" type=\"text\" name=\"phone-l\" placeholder=\"رقم الهاتف\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" [(ngModel)]=\"loginUser.password\" type=\"password\" name=\"pass-l\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-login100-form-btn\">\n\t\t\t\t<button (click)=\"signIn()\" class=\"login100-form-btn\">\n\t\t\t\t\t\tتسجيل الدخول\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t  أو\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button    id=\"signup-form-btn\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\t\t<form id=\"signup100-form\" class=\"signup100-form validate-form \">\n\t\t\t<span class=\"signup100-form-title p-b-37\">\n\t\t\t\t\tحساب جديد\n\t\t\t\t</span> \n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الاسم\">\n\t\t\t\t<input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username-s\" placeholder=\"الاسم\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال البريد الإلكتروني\">\n\t\t\t\t<input class=\"input100\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email-s\" placeholder=\"البريد الإلكتروني\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"يرجى إدخال كلمة السر\">\n\t\t\t\t<input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass-s\" placeholder=\"كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"كلمة المرور غير متطابقة !\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"pass-re-s\" placeholder=\"أعد إدخال كلمة السر\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الموبايل\">\n\t\t\t\t<input class=\"input100\" type=\"text\" name=\"username-s\" [(ngModel)]=\"user.mobile\" placeholder=\"رقم الموبايل\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\"  data-validate=\"يرجى إدخال تاريخ الميلاد\">\n\t\t\t\t<input ngx-mydatepicker name=\"mydate\" [(ngModel)]=\"user.birthdate\" [options]=\"myOptions\"\n\t\t\t #dp=\"ngx-mydatepicker\" class=\"input100\" (click)=\"dp.toggleCalendar()\" type=\"text\" id=\"birth-s\" name=\"birth-s\" placeholder=\"الميلاد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار الجنس\">\n\t\t\t\t<select class=\"form-control select-input100\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.gender\" id=\"sel1\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>الجنس</option>\n\t\t\t\t\t\t<option  value=\"ذكر\">ذكر</option>\n\t\t\t\t\t\t<option value=\"أنثى\">أنثى</option>\n\t\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى اختيار مهنة من القائمة\">\n\t\t\t\t<select class=\"form-control select-input100\" id=\"sel2\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.profession\">\n\t\t\t\t\t\t<option [ngValue]=\"undefined\" disabled selected>المهنة</option>\n\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t<option value=\"4\">4</option>\n \t\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class=\"container-signup100-btn\">\n\t\t\t\t<button (click)=\"signUp()\" type=\"submit\" class=\"signup100-btn\">\n\t\t\t\t\t إنشاء حساب\n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>\n\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>-->\n\n\n\n<div class=\"container-login100\">\n\t<div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\n\t\t<form id=\"verify100-form\" class=\"verify100-form validate-form\" style=\"display: inherit\">\n\t\t\t<span class=\"verify100-form-title p-b-37\">\n\t\t\t\t\tيرجى إدخال الرمز الذي سيصل إلى هاتفك ورقم الهاتف للتحقق من الحساب\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال الرمز الخاص بك\">\n\t\t\t\t<input id=\"code-input-reset\" class=\"input100\" type=\"text\" name=\"code-v\" [(ngModel)]=\"code.code\" placeholder=\"رمز التحقق\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال رقم الهاتف الخاص بك\">\n\t\t\t\t<input id=\"mobile-input-reset\" class=\"input100\" type=\"text\" name=\"code-v\" [(ngModel)]=\"code.mobile\" placeholder=\"رقم الهاتف\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"container-verify100-form-btn\">\n\t\t\t\t<button id=\"reset100-form-show\" class=\"verify100-form-btn\">\n\t\t\t\t\tتاكيد\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"text-center p-t-20 p-b-20\" style=\"padding: 10px;padding-bottom: 0px\">\n\t\t\t\t<span class=\"txt1\">\n\t\t\t\t\t\t<a id=\"forget100-form-show\" routerLink=\"{{'/login'}}\">صفحة تسجيل الدخول </a>\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<!--<form id=\"reset100-form\" class=\"reset100-form validate-form \">\n\t\t\t<span class=\"forget100-form-title p-b-37\">\n\t\t\t\t\tيرجى إدخال كلمة المرور الجديدة\n\t\t\t\t</span>\n\t\t\t<div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"يرجى إدخال كلمة المرور\">\n\t\t\t\t<input class=\"input100\" type=\"password\" name=\"newPassword-r\" [(ngModel)]=\"newPassword.newpasword\" placeholder=\"كلمة المرور الجديد\">\n\t\t\t\t<span class=\"focus-input100\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"container-reset100-form-btn\">\n\t\t\t\t<button class=\"reset100-form-btn\">\n\t\t\t\t\tتعيين كلمة المرور \n\t\t\t\t\t</button>\n\t\t\t</div>\n\t\t</form>-->\n\n\t</div>\n</div>\n\n\n\n<div id=\"dropDownSelect1\"></div>"

/***/ }),

/***/ "./src/app/verification/verification.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/verification/verification.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/verification/verification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verification/verification.component.ts ***!
  \********************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VerificationComponent = /** @class */ (function () {
    function VerificationComponent() {
    }
    VerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'verification',
            template: __webpack_require__(/*! ./verification.component.html */ "./src/app/verification/verification.component.html"),
            styles: [__webpack_require__(/*! ./verification.component.scss */ "./src/app/verification/verification.component.scss")]
        })
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\NetworkCaptivePortal\network-captive-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map