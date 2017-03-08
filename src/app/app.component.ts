import { Component, ViewChild } from '@angular/core';
import {Tutorial1Component} from "./tutorial1.component";
@Component({
	selector: 'my-app',
  	templateUrl: 'app/template/app.component.html',
  	styleUrls: ['app/static/app.component.css']
})
export class AppComponent  {
 title = 'Form';
 public cities = [{id:1, name:"ha noi"}, {id:2, name:"Da Nang"}, {id:3, name:"Hue"}];
 onSubmit(value:any)
 {
 	console.log(value);
 }
}
