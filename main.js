"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var demo_app_1 = require('./demo-app/demo-app');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var icon_registry_1 = require('./components/icon/icon-registry');
var overlay_1 = require('./core/overlay/overlay');
var live_announcer_1 = require('./core/live-announcer/live-announcer');
var core_1 = require('@angular/core');
var overlay_container_1 = require('./core/overlay/overlay-container');
var core_2 = require('@angular/core');
var MdGestureConfig_1 = require('./core/gestures/MdGestureConfig');
require('rxjs/Rx');
platform_browser_dynamic_1.bootstrap(demo_app_1.DemoApp, [
    router_1.ROUTER_PROVIDERS,
    live_announcer_1.MdLiveAnnouncer,
    core_1.provide(overlay_1.OVERLAY_CONTAINER_TOKEN, { useValue: overlay_container_1.createOverlayContainer() }),
    http_1.HTTP_PROVIDERS,
    icon_registry_1.MdIconRegistry,
    core_2.Renderer,
    core_1.provide(platform_browser_1.HAMMER_GESTURE_CONFIG, { useClass: MdGestureConfig_1.MdGestureConfig })
]);
//# sourceMappingURL=main.js.map