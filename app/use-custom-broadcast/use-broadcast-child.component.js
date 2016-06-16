// import { Component } from '@angular/core';
// import { Broadcaster } from '../custom-broadcast/broadcaster';
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
// @Component({
//     selector: 'use-broadcast-child'
// })
// export class UseBroadcastChildComponent {
//   constructor(private broadcaster: Broadcaster) {
//   }
//   registerStringBroadcast() {
//     this.broadcaster.on<string>('MyEvent')
//       .subscribe(message => {
//          console.log("register string event MyEvent");
//       });
//   }
//   emitStringBroadcast() {
//     this.broadcaster.broadcast('MyEvent', 'some message');
//     console.log("emited MyEvent");
//   }
// }
var core_1 = require('@angular/core');
var broadcaster_1 = require('../custom-broadcast/broadcaster');
var message_event_1 = require('../custom-broadcast/message-event');
var UseBroadcastChildComponent = (function () {
    function UseBroadcastChildComponent(broadcaster, messageEvent) {
        this.broadcaster = broadcaster;
        this.messageEvent = messageEvent;
    }
    UseBroadcastChildComponent.prototype.ngOnInit = function () {
        // this.registerStringBroadcast();
        this.registerTypeBroadcast();
        console.log(this);
    };
    UseBroadcastChildComponent.prototype.registerStringBroadcast = function () {
        var _this = this;
        this.broadcaster.on('message')
            .subscribe(function (message) {
            _this.message = message;
            if (_this._timer) {
                clearTimeout(_this._timer);
            }
            _this._timer = setTimeout(function () {
                _this.message = '';
                _this._timer = null;
            }, 3000);
        });
    };
    UseBroadcastChildComponent.prototype.registerTypeBroadcast = function () {
        var _this = this;
        this.messageEvent.on()
            .subscribe(function (message) {
            _this.message = message;
            if (_this._timer) {
                clearTimeout(_this._timer);
            }
            _this._timer = setTimeout(function () {
                _this.message = '';
                _this._timer = null;
            }, 3000);
        });
    };
    UseBroadcastChildComponent.prototype.emit = function () {
        // this.emitStringBroadcast();
        this.emitTypeBroadcast();
        console.log("ckp: event--" + this.eventType);
    };
    UseBroadcastChildComponent.prototype.emitStringBroadcast = function () {
        this.broadcaster.broadcast('message', "Message from " + this.childId);
    };
    UseBroadcastChildComponent.prototype.emitTypeBroadcast = function () {
        this.messageEvent.fire("Message from " + this.childId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UseBroadcastChildComponent.prototype, "childId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UseBroadcastChildComponent.prototype, "eventType", void 0);
    UseBroadcastChildComponent = __decorate([
        core_1.Component({
            selector: 'use-broadcast-child',
            template: "\n        <div class=\"container\">\n          <b>Child#{{childId}}--{{eventType}}</b>\n          <button on-{{eventType}}=\"emit()\">Emit</button>\n          <span>{{message}}</span>\n          <ng-content></ng-content>\n        </div>\n",
            styles: ["\n      .container {\n        border: solid 1px black;\n        padding: 5px;\n        margin: 5px;\n      }\n"],
            providers: [
                message_event_1.MessageEvent
            ],
        }), 
        __metadata('design:paramtypes', [broadcaster_1.Broadcaster, message_event_1.MessageEvent])
    ], UseBroadcastChildComponent);
    return UseBroadcastChildComponent;
}());
exports.UseBroadcastChildComponent = UseBroadcastChildComponent;
//# sourceMappingURL=use-broadcast-child.component.js.map