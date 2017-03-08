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
var tutorial1_component_1 = require("./tutorial1.component");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.agree = 0;
        this.disgree = 0;
        this.names = ['Mr A', "Mr B", "Mr C", "Mr D"];
    }
    AppComponent.prototype.parentVote = function (agree) {
        if (agree) {
            this.agree++;
        }
        else {
            this.disgree++;
        }
    };
    AppComponent.prototype.changeName = function () {
        this.Tutorial1Component.setTitle("Change Title in Parent");
    };
    __decorate([
        core_1.ViewChild(tutorial1_component_1.Tutorial1Component), 
        __metadata('design:type', tutorial1_component_1.Tutorial1Component)
    ], AppComponent.prototype, "Tutorial1Component", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1>\n  \t<input type=\"text\" #textname (keyup)=\"0\"/>\n  \t<p>Agree number: {{agree}}</p>\n  \t<p>Disgree number: {{disgree}}</p>\n  \t<button (click)=\"changeName()\">change title</button>\n  \t<my-tutorial *ngFor=\"let person of names\" [name]=\"person\" (onVote)=\"parentVote($event)\"></my-tutorial>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map