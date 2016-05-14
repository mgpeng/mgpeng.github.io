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
var MdList = (function () {
    function MdList() {
    }
    MdList = __decorate([
        core_1.Component({
            selector: 'md-list, md-nav-list',
            host: { 'role': 'list' },
            template: '<ng-content></ng-content>',
            styleUrls: ['./components/list/list.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdList);
    return MdList;
}());
exports.MdList = MdList;
/* Need directive for a ContentChildren query in list-item */
var MdLine = (function () {
    function MdLine() {
    }
    MdLine = __decorate([
        core_1.Directive({ selector: '[md-line]' }), 
        __metadata('design:paramtypes', [])
    ], MdLine);
    return MdLine;
}());
exports.MdLine = MdLine;
/* Need directive for a ContentChild query in list-item */
var MdListAvatar = (function () {
    function MdListAvatar() {
    }
    MdListAvatar = __decorate([
        core_1.Directive({ selector: '[md-list-avatar]' }), 
        __metadata('design:paramtypes', [])
    ], MdListAvatar);
    return MdListAvatar;
}());
exports.MdListAvatar = MdListAvatar;
var MdListItem = (function () {
    function MdListItem(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    MdListItem.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._setLineClass(this._lines.length);
        this._lines.changes.subscribe(function () {
            _this._setLineClass(_this._lines.length);
        });
    };
    Object.defineProperty(MdListItem.prototype, "_hasAvatar", {
        set: function (avatar) {
            this._setClass('md-list-avatar', avatar != null);
        },
        enumerable: true,
        configurable: true
    });
    MdListItem.prototype._setLineClass = function (count) {
        this._resetClasses();
        if (count === 2 || count === 3) {
            this._setClass("md-" + count + "-line", true);
        }
    };
    MdListItem.prototype._resetClasses = function () {
        this._setClass('md-2-line', false);
        this._setClass('md-3-line', false);
    };
    MdListItem.prototype._setClass = function (className, bool) {
        this._renderer.setElementClass(this._element.nativeElement, className, bool);
    };
    __decorate([
        core_1.ContentChildren(MdLine), 
        __metadata('design:type', core_1.QueryList)
    ], MdListItem.prototype, "_lines", void 0);
    __decorate([
        core_1.ContentChild(MdListAvatar), 
        __metadata('design:type', MdListAvatar), 
        __metadata('design:paramtypes', [MdListAvatar])
    ], MdListItem.prototype, "_hasAvatar", null);
    MdListItem = __decorate([
        core_1.Component({
            selector: 'md-list-item, a[md-list-item]',
            host: { 'role': 'listitem' },
            templateUrl: './components/list/list-item.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MdListItem);
    return MdListItem;
}());
exports.MdListItem = MdListItem;
exports.MD_LIST_DIRECTIVES = [MdList, MdListItem, MdLine, MdListAvatar];
//# sourceMappingURL=list.js.map