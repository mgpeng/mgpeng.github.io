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
var xxj_swipe_count_directive_1 = require('../app-directive/xxj-swipe-count.directive');
var highlight_directive_1 = require('../app-directive/highlight.directive');
var dynamic_html_outlet_directive_1 = require('../app-directive/dynamic-html-outlet.directive');
var bind_event_renderer_component_1 = require('../bind-event/bind-event-renderer.component');
var DownupAnimationComponent = (function () {
    function DownupAnimationComponent() {
        this.condition = true;
        this.visible = false;
        //   hideMyChild: Object = {};
        //   items: number[] = [1,2,3,4,5];
        this.htmlStr = '<div style="background:grey;color:red;">This is dynamic html outlet\'s text</div>';
    }
    DownupAnimationComponent.prototype.changeShow = function () {
        this.condition = !this.condition;
    };
    DownupAnimationComponent = __decorate([
        core_1.Component({
            selector: 'downupAnimation',
            template: "\n    <div downup-box #box=\"downup\" style=\"height:0; width:50%; overflow: hidden;\">Some content</div>\n    <button (click)=\"box.toggle(visible = !visible)\">Animate</button>\n    <hr>\n    <p class=\"small-show\" *myUnless=\"condition\">\n       condition is false and myUnless is true.\n    </p>\n    <hr>\n    <p class=\"small-show\" *myUnless=\"!condition\">\n       condition is true and myUnless is false.\n    </p>\n    <hr>\n    <button (click)=\"changeShow()\">{{condition ? \"show\" :\"hide\"}}</button>\n    <hr>\n    <div class=\"small-show\">Check Using HostBinding swipe</div>\n    <div class=\"small-show\" swipe-count>Counting how many swipes</div>\n    <div class=\"small-show\">Check Using mousein/out change style</div>\n    <div class=\"small-show\" xxjHighlight=\"green\">Change style</div>\n    <div class=\"small-show\">Binding Event by renderer</div>\n    <bind-event-renderer class=\"small-show\"></bind-event-renderer>\n    <dynamic-html-outlet [src]=\"htmlStr\" class=\"small-show\"></dynamic-html-outlet>\n    \n\t",
            styles: [
                "button {font-size:0.8em;width:6em;height:1em; background-color:grey;}",
                ".small-show{font-size:0.6em;color:black;background:grey;}"
            ],
            directives: [downup_animation_directive_1.DownupBox, unless_directive_1.UnlessDirective,
                xxj_swipe_count_directive_1.XxjSwipeCountDirective, highlight_directive_1.XxjHighlightDirective,
                dynamic_html_outlet_directive_1.DynamicHtmlOutletDirective,
                bind_event_renderer_component_1.BindEventRendererComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DownupAnimationComponent);
    return DownupAnimationComponent;
}());
exports.DownupAnimationComponent = DownupAnimationComponent;
//# sourceMappingURL=downup-animation.component.js.map