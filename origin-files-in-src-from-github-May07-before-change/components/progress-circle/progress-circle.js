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
// TODO(josephperrott): Benchpress tests.
/**
 * <md-progress-circle> component.
 */
var MdProgressCircle = (function () {
    function MdProgressCircle() {
        /**
         * Value of the progress circle.
         *
         * Input:number, defaults to 0.
         * _value is bound to the host as the attribute aria-valuenow.
         */
        this._value = 0;
        /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         */
        this.mode = 'determinate';
    }
    /**
     * Gets the current stroke dash offset to represent the progress circle.
     *
     * The stroke dash offset specifies the distance between dashes in the circle's stroke.
     * Setting the offset to a percentage of the total circumference of the circle, fills this
     * percentage of the overall circumference of the circle.
     */
    MdProgressCircle.prototype.strokeDashOffset = function () {
        // To determine how far the offset should be, we multiple the current percentage by the
        // total circumference.
        // The total circumference is calculated based on the radius we use, 45.
        // PI * 2 * 45
        return 251.3274 * (100 - this._value) / 100;
    };
    Object.defineProperty(MdProgressCircle.prototype, "value", {
        /** Gets the progress value, returning the clamped value. */
        get: function () {
            return this._value;
        },
        /** Sets the progress value, clamping before setting the internal value. */
        set: function (v) {
            if (v != null) {
                this._value = MdProgressCircle.clamp(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Clamps a value to be between 0 and 100. */
    MdProgressCircle.clamp = function (v) {
        return Math.max(0, Math.min(100, v));
    };
    __decorate([
        core_1.HostBinding('attr.aria-valuenow'),
        core_1.Input('value'), 
        __metadata('design:type', Number)
    ], MdProgressCircle.prototype, "_value", void 0);
    __decorate([
        core_1.HostBinding('attr.mode'),
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdProgressCircle.prototype, "mode", void 0);
    MdProgressCircle = __decorate([
        core_1.Component({
            selector: 'md-progress-circle',
            host: {
                'role': 'progressbar',
                'aria-valuemin': '0',
                'aria-valuemax': '100',
            },
            templateUrl: './components/progress-circle/progress-circle.html',
            styleUrls: ['./components/progress-circle/progress-circle.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdProgressCircle);
    return MdProgressCircle;
}());
exports.MdProgressCircle = MdProgressCircle;
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-circle> instance.
 */
var MdSpinner = (function (_super) {
    __extends(MdSpinner, _super);
    function MdSpinner() {
        _super.call(this);
        this.mode = 'indeterminate';
    }
    MdSpinner = __decorate([
        core_1.Component({
            selector: 'md-spinner',
            host: {
                'role': 'progressbar',
            },
            templateUrl: './components/progress-circle/progress-circle.html',
            styleUrls: ['./components/progress-circle/progress-circle.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdSpinner);
    return MdSpinner;
}(MdProgressCircle));
exports.MdSpinner = MdSpinner;
//# sourceMappingURL=progress-circle.js.map