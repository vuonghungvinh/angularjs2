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
var Tutorial1Component = (function () {
    function Tutorial1Component() {
        this.title = "This is TEDU Angular2";
        this.showline1 = false;
        this.color = "greensdf";
        this.colors = ['red', 'green', 'blue'];
    }
    Tutorial1Component = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>{{title}}</h2>\n\t<h3 *ngIf=\"showline1\">This ngif directive line.</h3>\n\t<div [ngSwitch]=\"color\">\n\t\t<p *ngSwitchCase=\"'red'\">This is line red</p>\n\t\t<p *ngSwitchCase=\"'blue'\">This is line blue</p>\n\t\t<p *ngSwitchCase=\"'green'\">This is line green</p>\n\t\t<p *ngSwitchDefault>This is line invalid</p>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let cl of colors\">{{cl}}</li>\n\t\t</ul>\n\t</div>\n\t",
        }), 
        __metadata('design:paramtypes', [])
    ], Tutorial1Component);
    return Tutorial1Component;
}());
exports.Tutorial1Component = Tutorial1Component;
//# sourceMappingURL=tutorial1.component.js.map