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
var router_1 = require('@angular/router');
var hero_service_1 = require('../service/hero.service');
var dialog_service_1 = require('../../app-service/dialog.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_hService, _dService, _rSegment) {
        this._hService = _hService;
        this._dService = _dService;
        this._rSegment = _rSegment;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._rSegment.getParam('id');
        this._hService.getHero(id)
            .then(function (hero) {
            _this.hero = hero;
            _this.unchangeStr = hero.name;
        });
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroDetailComponent.prototype.reset = function () {
        this.hero.name = this.unchangeStr;
    };
    HeroDetailComponent.prototype.routerCanDeactivate = function (next, prev) {
        if (!this.hero || this.hero.name == this.unchangeStr) {
            return true;
        }
        return this._dService.confirm("Will you leave?");
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: "app/hero-portal/hero/hero-detail.component.html",
            styleUrls: ["app/hero-portal/hero/hero-detail.component.css"],
            providers: [hero_service_1.HeroService, dialog_service_1.DialogService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, dialog_service_1.DialogService, router_1.RouteSegment])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map