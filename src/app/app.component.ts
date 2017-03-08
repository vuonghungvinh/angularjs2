import { Component, ViewChild } from '@angular/core';
import {Tutorial1Component} from "./tutorial1.component";
@Component({
	selector: 'my-app',
  	template: `<h1>Hello {{name}}</h1>
  	<input type="text" #textname (keyup)="0"/>
  	<p>Agree number: {{agree}}</p>
  	<p>Disgree number: {{disgree}}</p>
  	<button (click)="changeName()">change title</button>
  	<my-tutorial *ngFor="let person of names" [name]="person" (onVote)="parentVote($event)"></my-tutorial>`,
})
export class AppComponent  {
 name = 'Angular';
 public agree:number = 0;
 public disgree:number = 0;
 public names = ['Mr A', "Mr B", "Mr C", "Mr D"];
 @ViewChild(Tutorial1Component)
 private Tutorial1Component: Tutorial1Component
 parentVote(agree:boolean)
 {
 	if (agree){
 		this.agree++;
 	}
 	else{
 		this.disgree++;
 	}
 }
 changeName()
 {
 	this.Tutorial1Component.setTitle("Change Title in Parent");
 }
}
