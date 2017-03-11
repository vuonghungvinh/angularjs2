import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";

@Component({
	selector: 'login-component',
	templateUrl: 'app/template/login.component.html'
})

export class LoginComponent{
	constructor(
		private router: Router,
		private loginservice: LoginService
	){

	}
	CheckLogin(value: any){
		console.log(value);
		if (value.username=="admin" && value.password=="123")
		{
			this.loginservice.SetLogin(true);
		}
		this.router.navigate(['/']);
	}
}