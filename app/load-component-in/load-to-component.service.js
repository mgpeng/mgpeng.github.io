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
var load_in_component_component_1 = require('./load-in-component.component');
var LoadToComponentService = (function () {
    function LoadToComponentService(_componentResolver, _injector, _vc, _loader) {
        this._componentResolver = _componentResolver;
        this._injector = _injector;
        this._vc = _vc;
        this._loader = _loader;
    }
    LoadToComponentService.prototype.open = function () {
        var _this = this;
        this._componentResolver.resolveComponent(load_in_component_component_1.LoadInComponentComponent)
            .then(function (cf) {
            var cRef = cf.create(_this._injector);
            console.log(cRef.location.nativeElement);
            //  document.getElementById('overly').appendChild(cRef.location.nativeElement);
            _this._loader.loadNextToLocation(load_in_component_component_1.LoadInComponentComponent, _this._vc);
        });
    };
    LoadToComponentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ComponentResolver, core_1.Injector, core_1.ViewContainerRef, core_1.DynamicComponentLoader])
    ], LoadToComponentService);
    return LoadToComponentService;
}());
exports.LoadToComponentService = LoadToComponentService;
//# sourceMappingURL=load-to-component.service.js.map