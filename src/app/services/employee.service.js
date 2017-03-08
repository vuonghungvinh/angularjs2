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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.apiUrl = "http://58bfc3d44a1ab6120086a5fb.mockapi.io/api/employees";
    }
    EmployeeService.prototype.GetList = function () {
        // let employees: any[] = [
        // 	{id:1, name:"Nguyen thi fake"},
        // 	{id:2, name:"Vuong Hung Vinh IT"},
        // 	{id:3, name:"Nguyen thi fake co ho"},
        // 	{id:4, name:"Nguyen thi fake co ho 1"},
        // 	{id:5, name:"Nguyen thi fake co ho 2"},
        // ];
        // return this._http.get(this.apiUrl).map((response:Response){
        // 	return response.json()
        // })
        return this._http.get(this.apiUrl).map(function (response) { return response.json(); });
        // return employees;
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map