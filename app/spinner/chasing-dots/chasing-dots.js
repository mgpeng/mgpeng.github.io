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
var ChasingDotsComponent = (function (_super) {
    __extends(ChasingDotsComponent, _super);
    function ChasingDotsComponent() {
        _super.apply(this, arguments);
    }
    ChasingDotsComponent = __decorate([
        core_1.Component({
            selector: 'sk-chasing-dots',
            styles: ["\n    .chasing-dots-spinner {\n      position: relative;\n      width: 40px;\n      height: 40px;\n      margin: 25px auto;\n      \n      -webkit-animation: sk-rotate 2.0s infinite linear;\n      animation: sk-rotate 2.0s infinite linear;\n    }\n    \n    .dot1,\n    .dot2 {\n      width: 60%;\n      height: 60%;\n      display: inline-block;\n      position: absolute;\n      top: 0;\n      background-color: #333;\n      border-radius: 100%;\n      \n      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n      animation: sk-bounce 2.0s infinite ease-in-out;\n    }\n    \n    .dot2 {\n      top: auto;\n      bottom: 0;\n      -webkit-animation-delay: -1.0s;\n      animation-delay: -1.0s;\n    }\n    \n    @-webkit-keyframes sk-rotate {\n      100% {\n        -webkit-transform: rotate(360deg)\n      }\n    }\n    \n    @keyframes sk-rotate {\n      100% {\n        transform: rotate(360deg);\n        -webkit-transform: rotate(360deg)\n      }\n    }\n    \n    @-webkit-keyframes sk-bounce {\n      0%, 100% {\n        -webkit-transform: scale(0.0)\n      } 50% {\n        -webkit-transform: scale(1.0)\n      }\n    }\n    \n    @keyframes sk-bounce {\n      0%, 100% { \n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n      } 50% { \n        transform: scale(1.0);\n        -webkit-transform: scale(1.0);\n      }\n    }\n  "],
            templateUrl: 'app/spinner/chasing-dots/chasing-dots.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChasingDotsComponent);
    return ChasingDotsComponent;
}(base_spinner_1.BaseSpinner));
exports.ChasingDotsComponent = ChasingDotsComponent;
//# sourceMappingURL=chasing-dots.js.map