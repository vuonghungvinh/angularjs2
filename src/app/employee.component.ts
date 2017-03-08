import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./services/employee.service";
@Component({
	selector: "employee-list",
	templateUrl: "app/template/employee.component.html",
	// providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
	public employees: any[];
	constructor(private employeeService : EmployeeService){

	}
	ngOnInit()
	{
		this.employeeService.GetList().subscribe((response:any)=>{
			this.employees = response
		}, (err)=>{
			console.log("System error api");
			console.log(err);
		});
	}
}