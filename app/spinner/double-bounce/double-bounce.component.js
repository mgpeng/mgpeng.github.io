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
var DoubleBounceComponent = (function (_super) {
    __extends(DoubleBounceComponent, _super);
    function DoubleBounceComponent() {
        _super.apply(this, arguments);
    }
    DoubleBounceComponent = __decorate([
        core_1.Component({
            selector: 'sk-double-bounce',
            styles: ["\n    .double-bounce-spinner {\n      position: relative;\n      width: 40px;\n      height: 40px;\n      margin: 25px auto;\n    }\n    \n    .double-bounce1,\n    .double-bounce2 {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      background-color: #333;\n      opacity: 0.6;\n      position: absolute;\n      top: 0;\n      left: 0;\n    \n      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n      animation: sk-bounce 2.0s infinite ease-in-out;\n    }\n    \n    .double-bounce2 {\n      -webkit-animation-delay: -1.0s;\n      animation-delay: -1.0s;\n    }\n    \n    @-webkit-keyframes sk-bounce {\n      0%, 100% {\n        -webkit-transform: scale(0.0)\n      } 50% {\n        -webkit-transform: scale(1.0)\n      }\n    }\n    \n    @keyframes sk-bounce {\n      0%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n      } 50% {\n        transform: scale(1.0);\n        -webkit-transform: scale(1.0);\n      }\n    }\n  "],
            templateUrl: 'app/spinner/double-bounce/double-bounce.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DoubleBounceComponent);
    return DoubleBounceComponent;
}(base_spinner_1.BaseSpinner));
exports.DoubleBounceComponent = DoubleBounceComponent;
//# sourceMappingURL=double-bounce.component.js.map