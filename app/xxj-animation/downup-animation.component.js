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
var downup_animation_directive_1 = require('../app-directive/downup.animation.directive');
var unless_directive_1 = require('../app-directive/unless.directive');
var DownupAnimationComponent = (function () {
    function DownupAnimationComponent() {
        this.condition = true;
        this.visible = false;
        this.hideMyChild = {};
        this.items = [1, 2, 3, 4, 5];
    }
    DownupAnimationComponent.prototype.changeShow = function () {
        this.condition = !this.condition;
    };
    DownupAnimationComponent = __decorate([
        core_1.Component({
            selector: 'downupAnimation',
            template: "\n    <div downup-box #box=\"downup\" style=\"height:0; width:50%; overflow: hidden;\">Some content</div>\n    <button (click)=\"box.toggle(visible = !visible)\">Animate</button>\n    <br><hr>\n    <p *myUnless=\"condition\">\n       condition is false and myUnless is true.\n    </p>\n    <hr>\n    <p *myUnless=\"!condition\">\n       condition is true and myUnless is false.\n    </p>\n    <hr>\n    <button (click)=\"changeShow()\">{{condition ? \"show\" :\"hide\"}}</button>\n\t",
            styles: ["\n            button {font-size:1.2em;width:6em;height:1.5em; background-color:grey;}\n        "],
            directives: [downup_animation_directive_1.DownupBox, unless_directive_1.UnlessDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], DownupAnimationComponent);
    return DownupAnimationComponent;
}());
exports.DownupAnimationComponent = DownupAnimationComponent;
//# sourceMappingURL=downup-animation.component.js.map