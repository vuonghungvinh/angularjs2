import { CanActivate } from '@angular/router';
import { Injectable } from "@angular/core";
import { LoginService } from "../services/login.service";
@Injectable()
export class CheckLoginGuard implements CanActivate{
	constructor(
		private loginservice: LoginService
	){

	}
	canActivate(){
		let status = this.loginservice.IsLogged();
		if (!status){
			alert("You don't have permision access to this page");
		}
		return status;
	}
}