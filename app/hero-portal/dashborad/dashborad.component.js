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
//import { HeroDetailComponent } from '../hero/hero-detail.component';
var DashboradComponent = (function () {
    function DashboradComponent(_hService, _router) {
        this._hService = _hService;
        this._router = _router;
        this.heroes = [];
    }
    DashboradComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hService.getHeroes()
            .then(function (heroes) {
            _this.heroes = heroes.slice(1, 5);
            console.log(heroes);
        });
    };
    DashboradComponent.prototype.gotoDetail = function (hero) {
        var link = ['detail', { id: hero.id }];
        var id = hero.id;
        this._router.navigateByUrl("app/hero-portal/detail/" + id);
        console.log("ck pnt dashborad");
        // router.navigateByUrl("//11");
    };
    DashboradComponent = __decorate([
        core_1.Component({
            selector: 'my-dashborad',
            templateUrl: "app/hero-portal/dashborad/dashborad.component.html",
            styleUrls: ['app/hero-portal/dashborad/dashborad.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], DashboradComponent);
    return DashboradComponent;
}());
exports.DashboradComponent = DashboradComponent;
//# sourceMappingURL=dashborad.component.js.map