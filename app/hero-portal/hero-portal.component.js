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
var platform_browser_1 = require('@angular/platform-browser');
var heroes_component_1 = require('../hero-portal/hero/heroes.component');
var hero_detail_component_1 = require('../hero-portal/hero/hero-detail.component');
var dashborad_component_1 = require('../hero-portal/dashborad/dashborad.component');
var hero_form_component_1 = require('../hero-portal/hero/hero-form.component');
var HeroPortalComponent = (function () {
    function HeroPortalComponent(_rtr, _t) {
        this._rtr = _rtr;
        this._t = _t;
        this.title = 'Tour of Heroes';
        this._t.setTitle("You in Hero-Portal");
    }
    HeroPortalComponent = __decorate([
        core_1.Component({
            selector: 'my-enter-hero',
            templateUrl: "app/hero-portal/hero-portal.component.html",
            styleUrls: ["app/hero-portal/hero-portal.component.css"],
            host: { "class": "ng-animate heroContainer" },
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [platform_browser_1.Title]
        }),
        router_1.Routes([
            new router_1.Route({ path: '/dashborad', component: dashborad_component_1.DashboradComponent }),
            new router_1.Route({ path: '/hero', component: heroes_component_1.HeroesComponent }),
            new router_1.Route({ path: '/detail/:id', component: hero_detail_component_1.HeroDetailComponent }),
            new router_1.Route({ path: '/hero-form', component: hero_form_component_1.HeroFormComponent })
        ]), 
        __metadata('design:paramtypes', [router_1.Router, platform_browser_1.Title])
    ], HeroPortalComponent);
    return HeroPortalComponent;
}());
exports.HeroPortalComponent = HeroPortalComponent;
//# sourceMappingURL=hero-portal.component.js.map