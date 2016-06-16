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
var broadcaster_1 = require('../custom-broadcast/broadcaster');
var use_broadcast_child_component_1 = require('./use-broadcast-child.component');
var UseBroadcastParentComponent = (function () {
    function UseBroadcastParentComponent() {
    }
    UseBroadcastParentComponent = __decorate([
        core_1.Component({
            selector: 'use-broadcast-parent',
            template: "\n                <main>\n                <use-broadcast-child childId=\"1\" eventType=\"click\">\n                    <use-broadcast-child childId=\"2\" eventType=\"swipe\"></use-broadcast-child>\n                    <use-broadcast-child childId=\"3\" eventType=\"press\"></use-broadcast-child>\n                </use-broadcast-child>\n                <use-broadcast-child childId=\"4\" eventType=\"drag\">\n                    <use-broadcast-child childId=\"5\" eventType=\"longpress\"></use-broadcast-child>\n                    <use-broadcast-child childId=\"6\" eventType=\"pan\"></use-broadcast-child>\n                </use-broadcast-child>\n                </main>\n    ",
            directives: [use_broadcast_child_component_1.UseBroadcastChildComponent],
            providers: [broadcaster_1.Broadcaster]
        }), 
        __metadata('design:paramtypes', [])
    ], UseBroadcastParentComponent);
    return UseBroadcastParentComponent;
}());
exports.UseBroadcastParentComponent = UseBroadcastParentComponent;
//# sourceMappingURL=use-broadcast-parent.component.js.map