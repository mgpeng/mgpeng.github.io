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
var couple_card_component_1 = require('./couple-card/couple-card.component');
var top_frame_component_1 = require('./top-frame/top-frame.component');
//import { PromiseCompleter,PromiseWrapper } from '@angular/platform-browser-dynamic/esm/src/facade/promise';
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
    function AppComponent(_r, _renderer, _el) {
        this._r = _r;
        this._renderer = _renderer;
        this._el = _el;
        this.title = 'This is Home';
        this.htmlString = "<h1>test</h1>";
    }
    AppComponent.prototype.ngOnInit = function () {
        this._r.navigate(['/hero-portal']);
        // console.log(this._pw);
        // console.log(this._pc);  
        //        private _pw:PromiseWrapper,private _pc:PromiseCompleter<string>
        // let el=this._el.nativeElement;
        // console.log(el);
        // this._renderer.attachViewAfter(el, ["<h1>test</h1>","<span>hihi</span>"]);;
        // console.log(this._renderer);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app.component.html",
            styleUrls: ["app/app.component.css"],
            host: {
                'margin-top': '1em',
                'position': "absolute",
                "bottom": "1%"
            },
            directives: [
                router_1.ROUTER_DIRECTIVES,
                button_1.MdButton, button_1.MdAnchor,
                page_scroll_directive_1.PageScroll, top_frame_component_1.TopFrameComponent
            ],
            providers: []
        }),
        router_1.Routes([
            new router_1.Route({ path: '/hero-portal', component: hero_portal_component_1.HeroPortalComponent }),
            new router_1.Route({ path: '/todo-portal', component: todo_portal_component_1.TodoPortalComponent }),
            new router_1.Route({ path: '/xxj-animation', component: downup_animation_component_1.DownupAnimationComponent }),
            new router_1.Route({ path: '/demo-app', component: demo_app_1.DemoApp }),
            new router_1.Route({ path: '/couple-card', component: couple_card_component_1.CoupleCard })
        ]), 
        __metadata('design:paramtypes', [router_1.Router, core_1.Renderer, core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//-----insert html to component template use ElementRef and Renderer don't know how until now
//-----because Renderer.attchViewAfter(node,viewRootNode)  node ,viewRootNode is what? 
//# sourceMappingURL=app.component.js.map