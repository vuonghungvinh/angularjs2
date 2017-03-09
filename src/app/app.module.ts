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
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, appRoutes ],
  declarations: [ AppComponent, Tutorial1Component, EmployeeListComponent, HomeComponent, NotFoundComponent, EmployeeDetailComponent ],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
