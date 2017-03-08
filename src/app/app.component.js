"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.percent = 1.2345;
        this.today = Date.now();
        this.e = 2.718281828459045;
        this.collection = ['a', 'b', 'c', 'd'];
        this.object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name | uppercase}}</h1>\n  \t<h1>Hello {{name | lowercase}}</h1>\n  \t<p>Date today: {{today | date:'shortDate'}}</p>\n  \t<p>Percent: {{percent | percent: '4.3-5'}}</p>\n  \t<p>Percent: {{percent | percent}}</p>\n  \t<p>Decimal: {{e | number:\"3.1-5\"}}</p>\n  \t<p>Without JSON pipe:</p>\n    <pre>{{object}}</pre>\n    <p>With JSON pipe:</p>\n    <pre>{{object | json}}</pre>\n    <ul>\n    \t<li *ngFor=\"let i of collection | slice:1:3\">{{i}}</li>\n    </ul>\n    <p>2^10={{2 | exponentialStrength: 10}}</p>\n    <p>2^2={{2 | exponentialStrength: 2}}</p>\n  \t<my-tutorial></my-tutorial>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map