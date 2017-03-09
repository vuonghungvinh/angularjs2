import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
	selector: 'employee-overview-component',
	template: "<h3>Overview Employee</h3>"
})

export class EmployeeOverviewComponent implements OnInit, OnDestroy{
	public parameter: number;
	public sub: Subscription;
	constructor(private activateRouter: ActivatedRoute){

	}
	ngOnInit(){
		this.sub = this.activateRouter.parent.params.subscribe(params=>{
			this.parameter = params['id'];
			console.log(this.parameter);
		})
	}
	ngOnDestroy(){

	}
}