"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var notfound_component_1 = require("./notfound.component");
var employ_detail_component_1 = require("./employ-detail.component");
var routing = [
    { path: "", component: home_component_1.HomeComponent },
    // {path:"", redirectTo: 'employee', pathMatch: "full"},
    { path: "employee-detail/:id", component: employ_detail_component_1.EmployeeDetailComponent },
    { path: "employee", component: employee_component_1.EmployeeListComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map