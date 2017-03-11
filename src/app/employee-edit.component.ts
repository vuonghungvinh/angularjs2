import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeeService } from "./services/employee.service";
import { Subscription } from "rxjs";
@Component({
	selector: "employee-edit-component",
	templateUrl: "app/template/employee-edit.component.html"
})

export class EmployeeEditComponent implements OnInit, OnDestroy{
	public _id: number;
	public subcription: Subscription;
	public employee: any;
	constructor(
		private router: Router,
		private activatedRouter: ActivatedRoute,
		private  employeeService: EmployeeService
	){}
	ngOnInit(){
		this.subcription = this.activatedRouter.params.subscribe(params=>{
			this._id = params['id'];
		})
		this.employeeService.GetSingle(this._id).subscribe(data=>{
			this.employee = data;
		})
	}
	ngOnDestroy(){
		this.subcription.unsubscribe();
	}
	GotoEmployee() {
		this.router.navigate(['employee']);
	}
	saveForm()
	{
		this.employeeService.Update(this.employee, this._id).subscribe(respon=>{
			if (respon)
			{
				alert("Save Success");
				this.router.navigate(['employee']);
			}
		})
	}
}