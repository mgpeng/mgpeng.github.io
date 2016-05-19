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
var overlay_1 = require('../../core/overlay/overlay');
var portal_1 = require('../../core/portal/portal');
var portal_directives_1 = require('../../core/portal/portal-directives');
var OverlayDemo = (function () {
    function OverlayDemo(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nextPosition = 0;
    }
    OverlayDemo.prototype.openRotiniPanel = function () {
        var _this = this;
        var config = new overlay_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(this.nextPosition + "px")
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        this.overlay.create(config).then(function (ref) {
            ref.attach(new portal_1.ComponentPortal(PastaPanel, _this.viewContainerRef));
        });
    };
    OverlayDemo.prototype.openFusilliPanel = function () {
        var _this = this;
        var config = new overlay_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        this.overlay.create(config).then(function (ref) {
            ref.attach(_this.templatePortals.first);
        });
    };
    __decorate([
        core_1.ViewChildren(portal_directives_1.TemplatePortalDirective), 
        __metadata('design:type', core_1.QueryList)
    ], OverlayDemo.prototype, "templatePortals", void 0);
    OverlayDemo = __decorate([
        core_1.Component({
            selector: 'overlay-demo',
            templateUrl: 'demo-app/overlay/overlay-demo.html',
            styleUrls: ['demo-app/overlay/overlay-demo.css'],
            directives: [portal_directives_1.TemplatePortalDirective],
            providers: [overlay_1.Overlay],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [overlay_1.Overlay, core_1.ViewContainerRef])
    ], OverlayDemo);
    return OverlayDemo;
}());
exports.OverlayDemo = OverlayDemo;
/** Simple component to load into an overlay */
var PastaPanel = (function () {
    function PastaPanel() {
        this.value = 9000;
    }
    PastaPanel = __decorate([
        core_1.Component({
            selector: 'pasta-panel',
            template: '<p class="demo-rotini">Rotini {{value}}</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], PastaPanel);
    return PastaPanel;
}());
//# sourceMappingURL=overlay-demo.js.map