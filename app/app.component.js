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
var button_1 = require('../components/button/button');
//import {MdIcon} from '../components/icon/icon';
//import {MD_LIST_DIRECTIVES} from '../components/list/list';
var page_scroll_directive_1 = require('./page-scroll-directive/page-scroll.directive');
var hero_portal_component_1 = require('./hero-portal/hero-portal.component');
var todo_portal_component_1 = require('./todo-portal/todo-portal.component');
var downup_animation_component_1 = require('./xxj-animation/downup-animation.component');
var demo_app_1 = require('../demo-app/demo-app');
var Element = (function () {
    function Element(nodeName, parent) {
        this.nodeName = nodeName;
        this.parent = parent;
    }
    Element.prototype.toString = function () {
        return '<' + this.nodeName + '>';
    };
    return Element;
}());
exports.Element = Element;
;
var AppComponent = (function () {
    function AppComponent(_r) {
        this._r = _r;
        this.title = 'This is Home';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._r.navigate(['/hero-portal']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n             <md-nav-list class=\"xxj-md-nav-list\">\n                <md-list-item class=\"xxj-md-list-item\">\n                    <a [routerLink]=\"['hero-portal']\"  \n                       md-raised-button color=\"primary\"\n                       class=\"xxj-md-raised-button\">Hero-Portal</a> \n                </md-list-item>\n                <md-list-item class=\"xxj-md-list-item\">\n                    <a [routerLink]=\"['todo-portal']\"  \n                       pageScroll href=\"#anchor2\"\n                       md-raised-button color=\"primary\"\n                       class=\"xxj-md-raised-button\">Todo-Portal</a> \n                </md-list-item>\n                <md-list-item class=\"xxj-md-list-item\">\n                    <a [routerLink]=\"['xxj-animation']\"  \n                    md-raised-button color=\"primary\"\n                    class=\"xxj-md-raised-button\">DownupAnimation</a> \n                </md-list-item>\n                <md-list-item class=\"xxj-md-list-item\">\n                    <a [routerLink]=\"['demo-app']\"  \n                    md-raised-button color=\"primary\"\n                    class=\"xxj-md-raised-button\">M2 Demo</a> \n                </md-list-item>\n             </md-nav-list>\n             \n             <div>\n             <router-outlet></router-outlet>\n             </div>\n             <hr>\n    ",
            styleUrls: ["app/app.component.css"],
            host: {
                'margin-top': '1em',
                'position': "absolute",
                "bottom": "1%"
            },
            directives: [router_1.ROUTER_DIRECTIVES,
                button_1.MdButton, button_1.MdAnchor,
                page_scroll_directive_1.PageScroll
            ]
        }),
        router_1.Routes([
            new router_1.Route({ path: '/hero-portal', component: hero_portal_component_1.HeroPortalComponent }),
            new router_1.Route({ path: '/todo-portal', component: todo_portal_component_1.TodoPortalComponent }),
            new router_1.Route({ path: '/xxj-animation', component: downup_animation_component_1.DownupAnimationComponent }),
            new router_1.Route({ path: '/demo-app', component: demo_app_1.DemoApp })
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//---add comment for testing
//# sourceMappingURL=app.component.js.map