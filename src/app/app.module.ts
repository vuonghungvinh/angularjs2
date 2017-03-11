import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Tutorial1Component } from './tutorial1.component';
import { FormsModule} from "@angular/forms";
import { EmployeeListComponent } from "./employee.component";
import {EmployeeService} from "./services/employee.service";
import {HttpModule} from "@angular/http";
import {appRoutes} from "./app.routes";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./notfound.component";
import { EmployeeDetailComponent } from "./employ-detail.component";
import { EmployeeProjectComponent } from "./employee-project.component";
import { EmployeeOverviewComponent } from "./employee-overview.component";
import { LoginComponent } from "./login.component";
import { LoginService } from "./services/login.service";
import { CheckLoginGuard } from "./guards/check-login.guard";
import { CheckSaveFormGuard } from "./guards/check-save-form.guard";
import { EmployeeEditComponent } from "./employee-edit.component";
import { EmployeeAddComponent } from "./employee-add.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, appRoutes ],
  declarations: [ 
  	AppComponent, 
  	Tutorial1Component, 
  	EmployeeListComponent, 
  	HomeComponent, 
  	NotFoundComponent, 
  	EmployeeDetailComponent,
  	EmployeeProjectComponent,
  	EmployeeOverviewComponent,
    LoginComponent, 
    EmployeeEditComponent,
    EmployeeAddComponent
  ],
  providers: [
    EmployeeService, 
    LoginService, 
    CheckLoginGuard,
    CheckSaveFormGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
