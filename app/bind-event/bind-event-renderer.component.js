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
var BindEventRendererComponent = (function () {
    function BindEventRendererComponent(elementRef, renderer) {
        this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', function (event) {
            console.log(event);
            console.log('Element clicked');
        });
        this.globalListenFunc = renderer.listenGlobal('document', 'click', function (event) {
            //  console.log(event);
            //  console.log('Document clicked');
        });
    }
    BindEventRendererComponent.prototype.removeListeners = function () {
        this.listenFunc();
        this.globalListenFunc();
    };
    BindEventRendererComponent.prototype.ngOnDestroy = function () {
        // Remove the listeners!
        this.listenFunc();
        this.globalListenFunc();
    };
    BindEventRendererComponent = __decorate([
        core_1.Component({
            selector: 'bind-event-renderer',
            template: 'Hello world! <button (click)="removeListeners()">Remove listeners!</button>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], BindEventRendererComponent);
    return BindEventRendererComponent;
}());
exports.BindEventRendererComponent = BindEventRendererComponent;
//# sourceMappingURL=bind-event-renderer.component.js.map