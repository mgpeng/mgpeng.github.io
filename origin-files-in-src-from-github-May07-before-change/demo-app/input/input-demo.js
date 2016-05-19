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
var input_1 = require('../../components/input/input');
var button_1 = require('../../components/button/button');
var card_1 = require('../../components/card/card');
var checkbox_1 = require('../../components/checkbox/checkbox');
var icon_1 = require('../../components/icon/icon');
var toolbar_1 = require('../../components/toolbar/toolbar');
var max = 5;
var InputDemo = (function () {
    function InputDemo() {
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
    }
    InputDemo.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    InputDemo = __decorate([
        core_1.Component({
            selector: 'input-demo',
            templateUrl: 'demo-app/input/input-demo.html',
            styleUrls: ['demo-app/input/input-demo.css'],
            directives: [card_1.MdCard, checkbox_1.MdCheckbox, button_1.MdButton, icon_1.MdIcon, toolbar_1.MdToolbar, input_1.MD_INPUT_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], InputDemo);
    return InputDemo;
}());
exports.InputDemo = InputDemo;
//# sourceMappingURL=input-demo.js.map