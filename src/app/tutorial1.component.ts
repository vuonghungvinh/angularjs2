import { Component } from '@angular/core';

@Component({
	selector:'my-tutorial',
	template: `<h2>{{title}}</h2>
	<button (click)="OnClick(name.value)">Click me</button>
	<input type="text" #name/>
	<input type="text" [(ngModel)]= "fname" />
	<input type="text" [(ngModel)]= "lname" />
	<br>
	<p>Full name: {{fname}} {{lname}}</p>
	`,
	styles: [`.redcolor{
		color: red
	}`]
})
export class Tutorial1Component{
	title = "This is TEDU Angular2";
	fname= "";
	lname= "";
	OnClick(value){
		console.log("click me");
		console.log(value);
	}
}