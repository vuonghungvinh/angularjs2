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
var router_1 = require('@angular/router');
var employee_service_1 = require("./services/employee.service");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(router, activaterouter, employeeservie) {
        this.router = router;
        this.activaterouter = activaterouter;
        this.employeeservie = employeeservie;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subcription = this.activaterouter.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        this.employeeservie.GetSingle(this._id).subscribe(function (response) {
            console.log(response);
            _this.employee = response;
        });
    };
    EmployeeDetailComponent.prototype.GoToEmployee = function () {
        this.router.navigate(['employee']);
    };
    EmployeeDetailComponent.prototype.ngOnDestroy = function () {
        this.subcription.unsubscribe();
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: "employee-detail-component",
            templateUrl: "app/template/employee-detail.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, employee_service_1.EmployeeService])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employ-detail.component.js.map