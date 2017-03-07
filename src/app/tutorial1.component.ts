import { Component } from '@angular/core';

@Component({
	selector:'my-tutorial',
	template: `<h2>{{title}}</h2>
	<h3 *ngIf="showline1">This ngif directive line.</h3>
	<div [ngSwitch]="color">
		<p *ngSwitchCase="'red'">This is line red</p>
		<p *ngSwitchCase="'blue'">This is line blue</p>
		<p *ngSwitchCase="'green'">This is line green</p>
		<p *ngSwitchDefault>This is line invalid</p>
		<ul>
			<li *ngFor="let cl of colors">{{cl}}</li>
		</ul>
	</div>
	`,
})
export class Tutorial1Component{
	title = "This is TEDU Angular2";
	showline1 = false;
	color = "greensdf";
	colors: string[] = ['red', 'green', 'blue'];
}