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
var radio_1 = require('@angular2-material/radio');
var radio_dispatcher_1 = require('@angular2-material/radio/radio_dispatcher');
var RadioDemo = (function () {
    function RadioDemo() {
        this.isDisabled = false;
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioDemo = __decorate([
        core_1.Component({
            selector: 'radio-demo',
            templateUrl: 'demo-app/radio/radio-demo.html',
            styleUrls: ['demo-app/radio/radio-demo.css'],
            providers: [radio_dispatcher_1.MdRadioDispatcher],
            directives: [radio_1.MdRadioButton, radio_1.MdRadioGroup]
        }), 
        __metadata('design:paramtypes', [])
    ], RadioDemo);
    return RadioDemo;
}());
exports.RadioDemo = RadioDemo;
//# sourceMappingURL=radio-demo.js.map