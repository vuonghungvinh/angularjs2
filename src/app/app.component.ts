import { Component, ViewChild } from '@angular/core';
import {Tutorial1Component} from "./tutorial1.component";
@Component({
	selector: 'my-app',
  	template: `<h1>Hello {{name | uppercase}}</h1>
  	<h1>Hello {{name | lowercase}}</h1>
  	<p>Date today: {{today | date:'shortDate'}}</p>
  	<p>Percent: {{percent | percent: '4.3-5'}}</p>
  	<p>Percent: {{percent | percent}}</p>
  	<p>Decimal: {{e | number:"3.1-5"}}</p>
  	<p>Without JSON pipe:</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe:</p>
    <pre>{{object | json}}</pre>
    <ul>
    	<li *ngFor="let i of collection | slice:1:3">{{i}}</li>
    </ul>
    <p>2^10={{2 | exponentialStrength: 10}}</p>
    <p>2^2={{2 | exponentialStrength: 2}}</p>
  	<my-tutorial></my-tutorial>`,
})
export class AppComponent  {
 name = 'Angular';
 percent:number = 1.2345;
 public today = Date.now();
  e: number = 2.718281828459045;
  collection: string[] = ['a', 'b', 'c', 'd'];
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
