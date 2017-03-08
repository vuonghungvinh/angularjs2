import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'my-tutorial',
	template: `<h2>{{title}}</h2>
	`,
})
export class Tutorial1Component{
	title = "This is TEDU Angular2";
}