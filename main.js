"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
// import {DemoApp} from './demo-app/demo-app';
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
//import {MdIconRegistry} from './components/icon/icon-registry';
//import {OVERLAY_CONTAINER_TOKEN} from './core/overlay/overlay';
//import {MdLiveAnnouncer} from './core/live-announcer/live-announcer';
//import {provide} from '@angular/core';
//import {createOverlayContainer} from './core/overlay/overlay-container';
//import {Renderer} from '@angular/core';
//import {MdGestureConfig} from './core/gestures/MdGestureConfig';
require('rxjs/Rx');
var app_component_1 = require('./app/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    //MdLiveAnnouncer,
    //provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
    http_1.HTTP_PROVIDERS,
]);
//# sourceMappingURL=main.js.map