import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "home-component",
	template: `<h1>This is Home Component</h1>
				<button (click)="gotoemployee()">Go to employee page</button> 
				`
})
export class HomeComponent{
	constructor(private router:Router){

	}
	gotoemployee()
	{
		this.router.navigate(["employee"]);
	}
}