//---this codes is from https://github.com/FuelInteractive/fuel-ui/blob/master/src/directives/Animation/
//--- check his demo for how to use
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
var XxjAnimation = (function () {
    function XxjAnimation(element) {
        this.onAnimationStart = new core_1.EventEmitter();
        this.onAnimationEnd = new core_1.EventEmitter();
        this.animationClasses = '';
        this.play = false;
        this.id = ''; // use for query filtering
        this.group = ''; // use for query filtering
        this._animationQueue = [];
        this._callbacks = [];
        this.element = element.nativeElement;
    }
    XxjAnimation.prototype.ngOnChanges = function () {
        this.setup();
    };
    XxjAnimation.prototype.ngOnInit = function () {
        this.setup();
    };
    XxjAnimation.prototype.addAnimation = function (animationClasses) {
        var _this = this;
        animationClasses.split(' ')
            .map(function (c) { return _this._animationQueue.push(c); });
        this.animationClasses += " " + animationClasses;
        return this;
    };
    XxjAnimation.prototype.setup = function () {
        this._animationQueue = this.animationClasses
            .split(" ")
            .filter(function (c) { return c.length > 0; });
        if (this.play && this._animationQueue.length > 0)
            this.startAnimation();
        return this;
    };
    XxjAnimation.prototype.startAnimation = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (callback != null)
            this._callbacks.push(callback);
        this._animationQueue.shift()
            .split('.')
            .filter(function (c) { return c.length > 0; })
            .map(function (c) { return _this.element.classList.add(c); });
        return this;
    };
    XxjAnimation.prototype.cleanAnimation = function () {
        var _this = this;
        this.animationClasses
            .replace('.', ' ')
            .split(' ')
            .filter(function (c) { return c.length > 0; })
            .map(function (c) {
            _this.element.classList.remove(c);
        });
        return this;
    };
    XxjAnimation.prototype.animationStarted = function (event) {
        this.onAnimationStart.next(null);
    };
    XxjAnimation.prototype.animationEnded = function (event) {
        this.cleanAnimation();
        if (this._animationQueue.length > 0) {
            this.startAnimation();
            return;
        }
        while (this._callbacks.length > 0)
            this._callbacks.shift()();
        this.onAnimationEnd.next(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], XxjAnimation.prototype, "onAnimationStart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], XxjAnimation.prototype, "onAnimationEnd", void 0);
    __decorate([
        core_1.Input('animation'), 
        __metadata('design:type', String)
    ], XxjAnimation.prototype, "animationClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], XxjAnimation.prototype, "play", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], XxjAnimation.prototype, "id", void 0);
    __decorate([
        // use for query filtering
        core_1.Input(), 
        __metadata('design:type', String)
    ], XxjAnimation.prototype, "group", void 0);
    XxjAnimation = __decorate([
        core_1.Directive({
            selector: '[animation]',
            host: {
                '(animationstart)': 'animationStarted($event)',
                '(webkitAnimationStart)': 'animationStarted($event)',
                '(oanimationstart)': 'animationStarted($event)',
                '(MSAnimationStart)': 'animationStarted($event)',
                '(animationend)': 'animationEnded($event)',
                '(webkitAnimationEnd)': 'animationEnded($event)',
                '(oanimationend)': 'animationEnded($event)',
                '(MSAnimationEnd)': 'animationEnded($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], XxjAnimation);
    return XxjAnimation;
}());
exports.XxjAnimation = XxjAnimation;
//# sourceMappingURL=xxj-animation.js.map