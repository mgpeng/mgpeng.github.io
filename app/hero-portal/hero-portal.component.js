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
//import { HeroService } from '../hero-portal/service/hero.service';
var heroes_component_1 = require('../hero-portal/hero/heroes.component');
var hero_detail_component_1 = require('../hero-portal/hero/hero-detail.component');
var dashborad_component_1 = require('../hero-portal/dashborad/dashborad.component');
var hero_form_component_1 = require('../hero-portal/hero/hero-form.component');
var HeroPortalComponent = (function () {
    function HeroPortalComponent(_rtr) {
        this._rtr = _rtr;
        this.title = 'Tour of Heroes';
    }
    HeroPortalComponent = __decorate([
        core_1.Component({
            selector: 'my-enter-hero',
            template: "\n             <h1>{{title}}</h1>\n             <hr>\n             <nav>\n             <a [routerLink]=\"['dashborad']\">Dashborad</a> \n             <a [routerLink]=\"['hero']\">Heroes</a>\n             <a [routerLink]=\"['hero-form']\">+</a>\n             </nav>\n             <router-outlet></router-outlet>\n    ",
            styleUrls: ["app/app.component.css"],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            new router_1.Route({ path: '/dashborad', component: dashborad_component_1.DashboradComponent }),
            new router_1.Route({ path: '/hero', component: heroes_component_1.HeroesComponent }),
            new router_1.Route({ path: '/detail/:id', component: hero_detail_component_1.HeroDetailComponent }),
            new router_1.Route({ path: '/hero-form', component: hero_form_component_1.HeroFormComponent })
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeroPortalComponent);
    return HeroPortalComponent;
}());
exports.HeroPortalComponent = HeroPortalComponent;
//# sourceMappingURL=hero-portal.component.js.map