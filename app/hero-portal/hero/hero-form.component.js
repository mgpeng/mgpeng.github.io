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
var common_1 = require('@angular/common');
var hero_1 = require('./hero');
var power_service_1 = require('../service/power.service');
var hero_service_1 = require('../service/hero.service');
var HeroFormComponent = (function () {
    function HeroFormComponent(_pService, _hService) {
        this._pService = _pService;
        this._hService = _hService;
        this.submibtted = false;
        this.model = new hero_1.Hero(999, "", "");
        this.maxId = 0;
    }
    HeroFormComponent.prototype.onSubmit = function (d) {
        this.data = JSON.stringify(d, null, 2);
    };
    HeroFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pService
            .getPowersSlowly()
            .then(function (powers) {
            _this.powers = powers;
        });
        this._hService
            .getMaxIdHero()
            .then(function (num) {
            _this.maxId = num;
            _this.model.id = _this.maxId;
        });
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: 'app/hero-portal/hero/hero-form.component.html',
            styles: [
                "\n    .ng-valid[required] {\n      border-left: 5px solid #42A948; /* green */\n    }\n\n    .ng-invalid {\n      border-left: 5px solid #a94442; /* red */\n    }\n    "
            ],
            directives: [common_1.NgForm],
            providers: [power_service_1.PowerService, hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [power_service_1.PowerService, hero_service_1.HeroService])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map