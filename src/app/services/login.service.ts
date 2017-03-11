import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
	private _isLoggedIn : boolean;
	IsLogged(): boolean{
		return this._isLoggedIn;
	}
	SetLogin(isLoggin: boolean){
		this._isLoggedIn = isLoggin;
	}
}