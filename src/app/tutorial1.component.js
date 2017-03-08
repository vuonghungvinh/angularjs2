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
        this.voted = false;
        this.onVote = new core_1.EventEmitter();
    }
    Tutorial1Component.prototype.vote = function (agree) {
        this.voted = true;
        this.onVote.emit(agree);
    };
    Tutorial1Component.prototype.setTitle = function (title) {
        this.title = title;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Tutorial1Component.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Tutorial1Component.prototype, "onVote", void 0);
    Tutorial1Component = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>{{title}}</h2>\n\t<p>child name:{{name}}</p>\n\t<button [disabled]=\"voted\" (click)=\"vote(true)\">Agrre</button>\n\t<button [disabled]=\"voted\" (click)=\"vote(false)\">Disgree</button>\n\tResuilt: {{voted}}\n\t",
        }), 
        __metadata('design:paramtypes', [])
    ], Tutorial1Component);
    return Tutorial1Component;
}());
exports.Tutorial1Component = Tutorial1Component;
//# sourceMappingURL=tutorial1.component.js.map