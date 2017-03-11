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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var tutorial1_component_1 = require('./tutorial1.component');
var forms_1 = require("@angular/forms");
var employee_component_1 = require("./employee.component");
var employee_service_1 = require("./services/employee.service");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var home_component_1 = require("./home.component");
var notfound_component_1 = require("./notfound.component");
var employ_detail_component_1 = require("./employ-detail.component");
var employee_project_component_1 = require("./employee-project.component");
var employee_overview_component_1 = require("./employee-overview.component");
var login_component_1 = require("./login.component");
var login_service_1 = require("./services/login.service");
var check_login_guard_1 = require("./guards/check-login.guard");
var check_save_form_guard_1 = require("./guards/check-save-form.guard");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.appRoutes],
            declarations: [
                app_component_1.AppComponent,
                tutorial1_component_1.Tutorial1Component,
                employee_component_1.EmployeeListComponent,
                home_component_1.HomeComponent,
                notfound_component_1.NotFoundComponent,
                employ_detail_component_1.EmployeeDetailComponent,
                employee_project_component_1.EmployeeProjectComponent,
                employee_overview_component_1.EmployeeOverviewComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                employee_service_1.EmployeeService,
                login_service_1.LoginService,
                check_login_guard_1.CheckLoginGuard,
                check_save_form_guard_1.CheckSaveFormGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map