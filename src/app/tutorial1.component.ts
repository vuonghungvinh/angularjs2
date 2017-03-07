import { Component } from '@angular/core';

@Component({
	selector:'my-tutorial',
	template: `<h2>{{title}}</h2>
	<button (click)="OnClick(name.value)">Click me</button>
	<input type="text" #name/>
	`,
	styles: [`.redcolor{
		color: red
	}`]
})
export class Tutorial1Component{
	title = "This is TEDU Angular2";
	OnClick(value){
		console.log("click me");
		console.log(value);
	}
}