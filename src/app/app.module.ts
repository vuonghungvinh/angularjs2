import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Tutorial1Component } from './tutorial1.component';
import { FormsModule} from "@angular/forms";
import { EmployeeListComponent } from "./employee.component";
import {EmployeeService} from "./services/employee.service";
import {HttpModule} from "@angular/http";
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, Tutorial1Component, EmployeeListComponent ],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
