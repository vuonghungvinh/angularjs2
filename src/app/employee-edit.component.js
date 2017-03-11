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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_service_1 = require("./services/employee.service");
var EmployeeEditComponent = (function () {
    function EmployeeEditComponent(router, activatedRouter, employeeService) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.employeeService = employeeService;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subcription = this.activatedRouter.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        this.employeeService.GetSingle(this._id).subscribe(function (data) {
            _this.employee = data;
        });
    };
    EmployeeEditComponent.prototype.ngOnDestroy = function () {
        this.subcription.unsubscribe();
    };
    EmployeeEditComponent.prototype.GotoEmployee = function () {
        this.router.navigate(['employee']);
    };
    EmployeeEditComponent.prototype.saveForm = function () {
        var _this = this;
        this.employeeService.Update(this.employee, this._id).subscribe(function (respon) {
            if (respon) {
                alert("Save Success");
                _this.router.navigate(['employee']);
            }
        });
    };
    EmployeeEditComponent = __decorate([
        core_1.Component({
            selector: "employee-edit-component",
            templateUrl: "app/template/employee-edit.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, employee_service_1.EmployeeService])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
exports.EmployeeEditComponent = EmployeeEditComponent;
//# sourceMappingURL=employee-edit.component.js.map