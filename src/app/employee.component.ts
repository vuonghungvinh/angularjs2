import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./services/employee.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
	selector: "employee-list",
	templateUrl: "app/template/employee.component.html",
	// providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
	public employees: any[];
	public pages: number[];
	public curentPage: number;
	constructor(private employeeService : EmployeeService,
				private router: Router,
				private activaterouter: ActivatedRoute
	){

	}
	ngOnInit()
	{
		this.activaterouter.queryParams.subscribe(params=>{
			this.curentPage = params['page'] || 1;
			console.log(this.curentPage);
			console.log(params['filter']);
		});
		this.loadData();
		this.pages = [1, 2, 3, 4, 5];
	}
	Delete(id: number){
		let confirmResuilt = confirm("are you sure delete Employee");
		if (confirmResuilt){
			this.employeeService.Delete(id).subscribe(response=>{
				if (response){
					alert("Delete Success");
					this.loadData();
				}
			})
		}
	}
	loadData(){
		this.employeeService.GetList().subscribe((response:any)=>{
			this.employees = response
		}, (err)=>{
			console.log("System error api");
			console.log(err);
		});
	}
}