import { Component, ViewChild, OnInit } from '@angular/core';
import {Tutorial1Component} from "./tutorial1.component";
import { LoginService } from "./services/login.service";
import { Router } from "@angular/router";

@Component({
	selector: 'my-app',
  	templateUrl: 'app/template/app.component.html',
  	styleUrls: ['app/static/app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Form';
 public isLoggedin: boolean;
 public cities = [{id:1, name:"ha noi"}, {id:2, name:"Da Nang"}, {id:3, name:"Hue"}];
 constructor(
 	private loginService: LoginService,
 	private router: Router
 	){}
 onSubmit(value:any)
 {
 	console.log(value);
 }
 ngOnInit(){
 	this.isLoggedin = this.loginService.IsLogged();
 }
 Logout(){
 	this.loginService.SetLogin(false);
 	this.router.navigate(['']);
 }
}
