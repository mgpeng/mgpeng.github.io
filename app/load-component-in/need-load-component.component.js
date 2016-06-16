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
var load_to_component_service_1 = require('./load-to-component.service');
var NeedLoadComponentComponent = (function () {
    function NeedLoadComponentComponent(_s) {
        this._s = _s;
    }
    NeedLoadComponentComponent.prototype.create = function () {
        this._s.open();
    };
    NeedLoadComponentComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [load_to_component_service_1.LoadToComponentService, core_1.ViewContainerRef],
            template: " \n    <button (click)=\"create()\">Load and create a component</button>\n  ",
        }), 
        __metadata('design:paramtypes', [load_to_component_service_1.LoadToComponentService])
    ], NeedLoadComponentComponent);
    return NeedLoadComponentComponent;
}());
exports.NeedLoadComponentComponent = NeedLoadComponentComponent;
//# sourceMappingURL=need-load-component.component.js.map