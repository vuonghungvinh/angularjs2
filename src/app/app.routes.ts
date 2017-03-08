import { Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {EmployeeListComponent} from "./employee.component";

const routing: Routes = [
	{path:"", component:HomeComponent},
	{path:"employee", component:EmployeeListComponent}
]

 export const appRoutes = RouterModule.forRoot(routing);