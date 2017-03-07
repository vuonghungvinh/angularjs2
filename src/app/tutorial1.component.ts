import { Component } from '@angular/core';

@Component({
	selector:'my-tutorial',
	template: `<h2>This is TEDU Angular2</h2>
	<h3 [class.redcolor]="applyclass">Property binding</h3>
	<h4 [style.color]="bluecolor?'blue':'red'">style Binding</h4>
	`,
	styles: [`.redcolor{
		color: red
	}`]
})
export class Tutorial1Component{
	applyclass = true;
	bluecolor= true;
}