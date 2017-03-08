import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'my-tutorial',
	template: `<h2>{{title}}</h2>
	<p>child name:{{name}}</p>
	<button [disabled]="voted" (click)="vote(true)">Agrre</button>
	<button [disabled]="voted" (click)="vote(false)">Disgree</button>
	Resuilt: {{voted}}
	`,
})
export class Tutorial1Component{
	title = "This is TEDU Angular2";
	voted:boolean = false;
	@Input() name:string;
	@Output() onVote = new EventEmitter<boolean>();
	vote(agree:boolean)
	{
		this.voted = true;
		this.onVote.emit(agree);
	}
	setTitle(title:string)
	{
		this.title = title;
	}
}