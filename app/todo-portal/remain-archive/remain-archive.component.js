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
var RemainArchiveComponent = (function () {
    function RemainArchiveComponent() {
        this.delDone_evt = new core_1.EventEmitter();
    }
    RemainArchiveComponent.prototype.ngOnChanges = function (changes) {
        var tds = changes['tdListIn'].currentValue;
        if (tds) {
            this.totalLen = tds.length;
            this.remaining = tds.filter(function (td) { return !td.done; }).length;
        }
    };
    RemainArchiveComponent.prototype.archive = function () {
        var oldtds = this.tdListIn;
        this.delDone_evt.emit(oldtds.filter(function (oldtd) { return !oldtd.done; }));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RemainArchiveComponent.prototype, "tdListIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RemainArchiveComponent.prototype, "delDone_evt", void 0);
    RemainArchiveComponent = __decorate([
        core_1.Component({
            selector: 'remain-archive',
            template: "\n             <span>{{remaining}} of {{totalLen}} remaining</span>\n             <button (click)=\"archive()\">[archive]</button> \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RemainArchiveComponent);
    return RemainArchiveComponent;
}());
exports.RemainArchiveComponent = RemainArchiveComponent;
//# sourceMappingURL=remain-archive.component.js.map