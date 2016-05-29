"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_spinner_1 = require('../base-spinner');
var ThreeBounceComponent = (function (_super) {
    __extends(ThreeBounceComponent, _super);
    function ThreeBounceComponent() {
        _super.apply(this, arguments);
    }
    ThreeBounceComponent = __decorate([
        core_1.Component({
            selector: 'sk-three-bounce',
            styles: ["\n    .three-bounce-spinner {\n      width: 70px;\n      margin: 25px auto;\n    }\n    \n    .three-bounce-spinner > div {\n      width: 18px;\n      height: 18px;\n      background-color: #333;\n    \n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    }\n    \n    .three-bounce-spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s;\n    }\n    \n    .three-bounce-spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s;\n    }\n    \n    @-webkit-keyframes sk-bouncedelay {\n      0%, 80%, 100% {\n        -webkit-transform: scale(0)\n      } 40% {\n        -webkit-transform: scale(1.0)\n      }\n    }\n    \n    @keyframes sk-bouncedelay {\n      0%, 80%, 100% { \n        -webkit-transform: scale(0);\n        transform: scale(0);\n      } 40% { \n        -webkit-transform: scale(1.0);\n        transform: scale(1.0);\n      }\n    }\n  "],
            templateUrl: 'app/spinner/three-bounce/three-bounce.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ThreeBounceComponent);
    return ThreeBounceComponent;
}(base_spinner_1.BaseSpinner));
exports.ThreeBounceComponent = ThreeBounceComponent;
//# sourceMappingURL=three-bounce.js.map