import  { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import {EmployeeService} from "./services/employee.service";


@Component({
	selector: "employee-detail-component",
	templateUrl: "app/template/employee-detail.component.html"
})

export class EmployeeDetailComponent implements OnInit, OnDestroy{
	private _id: number;
	private subcription: any;
	public employee: any;
	constructor(private router: Router, private activaterouter: ActivatedRoute, private employeeservie: EmployeeService){

	}
	ngOnInit()
	{
		this.subcription = this.activaterouter.params.subscribe(params=>{
			this._id= params['id'];
		});
		this.employeeservie.GetSingle(this._id).subscribe((response: any)=>{
			console.log(response)
			this.employee = response
		});
	}
	GoToEmployee()
	{
		this.router.navigate(['employee']);
	}
	ngOnDestroy(){
		this.subcription.unsubscribe();
	}
}