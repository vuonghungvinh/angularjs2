import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
  	template: `<h1>Hello {{name}}</h1>
  	<h4>App main Component</h4>
  	<my-tutorial></my-tutorial>`,
  	// template: `<h1>Hello {{name}}</h1>`,
  	styles: ['h4 {color: blue;}']
})
export class AppComponent  { name = 'Angular'; }
