"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
// import {DemoApp} from './demo-app/demo-app';
//import {HTTP_PROVIDERS} from '@angular/http';
var router_1 = require('@angular/router');
var icon_registry_1 = require('./components/icon/icon-registry');
//import {OVERLAY_CONTAINER_TOKEN} from './core/overlay/overlay';
//import {MdLiveAnnouncer} from './core/live-announcer/live-announcer';
var core_1 = require('@angular/core');
//import {createOverlayContainer} from './core/overlay/overlay-container';
var core_2 = require('@angular/core');
var MdGestureConfig_1 = require('./core/gestures/MdGestureConfig');
require('rxjs/Rx');
var app_component_1 = require('./app/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    //MdLiveAnnouncer,
    //provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
    // HTTP_PROVIDERS,
    icon_registry_1.MdIconRegistry,
    core_2.Renderer,
    core_1.provide(platform_browser_1.HAMMER_GESTURE_CONFIG, { useClass: MdGestureConfig_1.MdGestureConfig })
]);
//# sourceMappingURL=main.js.map