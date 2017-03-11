import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
@Injectable()
export class EmployeeService{
	private apiUrl = "http://58bfc3d44a1ab6120086a5fb.mockapi.io/api/employees";
	constructor(private _http:Http){

	}
	GetList(): Observable<any[]> {
		// let employees: any[] = [
		// 	{id:1, name:"Nguyen thi fake"},
		// 	{id:2, name:"Vuong Hung Vinh IT"},
		// 	{id:3, name:"Nguyen thi fake co ho"},
		// 	{id:4, name:"Nguyen thi fake co ho 1"},
		// 	{id:5, name:"Nguyen thi fake co ho 2"},
		// ];

		// return this._http.get(this.apiUrl).map((response:Response){
		// 	return response.json()
		// })
		return this._http.get(this.apiUrl).map((response:Response) => response.json())

		// return employees;
	}
	GetSingle(id: number): Observable<any>{
		return this._http.get(this.apiUrl+"/"+id).map((response: Response) => response.json())
	}
	Update(data: any, id: number): Observable<any> {
		return this._http.put(this.apiUrl+"/"+id, data).map((response: Response)=> response.json())
	}
	Add(data: any): Observable<any> {
		return this._http.post(this.apiUrl, data).map((response: Response)=> response.json())
	}
	Delete(id: number): Observable<any> {
		return this._http.delete(this.apiUrl+"/"+id).map((respoonse: Response)=> respoonse.json());
	}
}