import { Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {EmployeeListComponent} from "./employee.component";
import { NotFoundComponent } from "./notfound.component";
import { EmployeeDetailComponent } from "./employ-detail.component";
import { EmployeeProjectComponent } from "./employee-project.component";
import { EmployeeOverviewComponent } from "./employee-overview.component";
import { LoginComponent } from "./login.component";
import { CheckLoginGuard } from "./guards/check-login.guard";
import { CheckSaveFormGuard } from "./guards/check-save-form.guard";

const routing: Routes = [
	{path:"", component:HomeComponent},
	{path: "login", component: LoginComponent},
	// {path:"", redirectTo: 'employee', pathMatch: "full"},
	{path: "employee-detail/:id", component: EmployeeDetailComponent, canDeactivate: [CheckSaveFormGuard], children: [
		{path: "overview", component: EmployeeOverviewComponent},
		{path: "projects", component: EmployeeProjectComponent}
	]},
	{path:"employee", component:EmployeeListComponent, canActivate: [CheckLoginGuard]},
	{path: '**', component: NotFoundComponent}
]

 export const appRoutes = RouterModule.forRoot(routing);