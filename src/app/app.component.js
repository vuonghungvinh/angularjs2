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
var core_1 = require('@angular/core');
var login_service_1 = require("./services/login.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.title = 'Form';
        this.cities = [{ id: 1, name: "ha noi" }, { id: 2, name: "Da Nang" }, { id: 3, name: "Hue" }];
    }
    AppComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedin = this.loginService.IsLogged();
    };
    AppComponent.prototype.Logout = function () {
        this.loginService.SetLogin(false);
        this.router.navigate(['']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/template/app.component.html',
            styleUrls: ['app/static/app.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map