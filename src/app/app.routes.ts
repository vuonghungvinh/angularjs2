import { Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {EmployeeListComponent} from "./employee.component";
import { NotFoundComponent } from "./notfound.component";
import { EmployeeDetailComponent } from "./employ-detail.component";
import { EmployeeProjectComponent } from "./employee-project.component";
import { EmployeeOverviewComponent } from "./employee-overview.component";

const routing: Routes = [
	{path:"", component:HomeComponent},
	// {path:"", redirectTo: 'employee', pathMatch: "full"},
	{path: "employee-detail/:id", component: EmployeeDetailComponent, children: [
		{path: "overview", component: EmployeeOverviewComponent},
		{path: "projects", component: EmployeeProjectComponent}
	]},
	{path:"employee", component:EmployeeListComponent},
	{path: '**', component: NotFoundComponent}
]

 export const appRoutes = RouterModule.forRoot(routing);