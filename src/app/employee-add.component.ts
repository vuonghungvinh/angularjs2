import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { EmployeeService } from "./services/employee.service";

@Component({
	selector: "employee-add-component",
	templateUrl: "app/template/employee-add.component.html"
})

export class EmployeeAddComponent{
	public employee: any;
	constructor(private router: Router, private employeeService: EmployeeService){}
	GotoEmployee() {
		this.router.navigate(['employee']);
	}
	saveForm(value: any){
		console.log(value);
		this.employeeService.Add(value).subscribe(response=>{
			if (response){
				alert('Add Success');
				this.router.navigate(['employee']);
			}
		})
	}
}