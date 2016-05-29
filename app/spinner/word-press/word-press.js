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
var WordPressComponent = (function (_super) {
    __extends(WordPressComponent, _super);
    function WordPressComponent() {
        _super.apply(this, arguments);
    }
    WordPressComponent = __decorate([
        core_1.Component({
            selector: 'sk-word-press',
            styles: ["\n    .word-press-spinner {\n      position: relative;\n      width: 30px;\n      height: 30px;\n      margin: 25px auto;\n      background-color: #333;\n      border-radius: 30px;\n      \n      -webkit-animation: inner-circle 1s linear infinite;\n      animation: inner-circle 1s linear infinite;\n    }\n    \n    .inner-circle {\n      display: block;\n      background: #fff;\n      width: 8px;\n      height: 8px;\n      position: absolute;\n      border-radius: 8px;\n      top: 5px;\n      left: 5px;\n    }\n    \n    @-webkit-keyframes inner-circle {\n      0% {\n       -webkit-transform: rotate(0);\n      } 100% {\n       -webkit-transform: rotate(360deg);\n      }\n    }\n    \n    @keyframes inner-circle {\n      0% {\n        transform: rotate(0);\n        -webkit-transform:rotate(0);\n      }\n      100% {\n        transform: rotate(360deg);\n        -webkit-transform: rotate(360deg);\n      }\n    }\n  "],
            templateUrl: 'app/spinner/word-press/word-press.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WordPressComponent);
    return WordPressComponent;
}(base_spinner_1.BaseSpinner));
exports.WordPressComponent = WordPressComponent;
//# sourceMappingURL=word-press.js.map