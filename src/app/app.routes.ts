import { Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {EmployeeListComponent} from "./employee.component";
import { NotFoundComponent } from "./notfound.component";

const routing: Routes = [
	{path:"", component:HomeComponent},
	// {path:"", redirectTo: 'employee', pathMatch: "full"},
	{path:"employee", component:EmployeeListComponent},
	{path: '**', component: NotFoundComponent}
]

 export const appRoutes = RouterModule.forRoot(routing);