import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
  	template: `<h1>Hello {{name}}</h1>
  	<img [src]="image">
  	<input type="text" [value]="welcome">
  	<my-tutorial></my-tutorial>`,
})
export class AppComponent  {
 name = 'Angular'; 
 image = "http://lorempixel.com/300/300";
 welcome = "welcome to Angularjs2";
}
