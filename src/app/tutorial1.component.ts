import { Component } from '@angular/core';

@Component({
	selector:'my-tutorial',
	template: `<h2>{{title}}</h2>
	<p [ngClass]="{classOne: cone, classTwo: ctwo}">This is Ngclass apply style</p>
	<button (click)="toggle()">Click</button>
	<p [ngStyle]="{'font-style': style, 'font-size': size}">This paragrap will be apply ngStyle</p>
	`,
	styles:[`
		.classOne{
			color: red;
		}
		.classTwo{
			background-color: black;
		}
	`]
})
export class Tutorial1Component{
	title = "This is TEDU Angular2";
	cone = true;
	ctwo= true;
	style = 'italic';
	size="20px";
	toggle(){
		this.cone = !this.cone;
		this.ctwo = !this.ctwo;
	}
}