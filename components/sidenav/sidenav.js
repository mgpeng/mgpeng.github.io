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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var dir_1 = require('../../core/rtl/dir');
var promise_completer_1 = require('../../core/async/promise-completer');
var error_1 = require('../../core/errors/error');
/**
 * Exception thrown when two MdSidenav are matching the same side.
 */
var MdDuplicatedSidenavError = (function (_super) {
    __extends(MdDuplicatedSidenavError, _super);
    function MdDuplicatedSidenavError(align) {
        _super.call(this, "A sidenav was already declared for 'align=\"" + align + "\"'");
    }
    return MdDuplicatedSidenavError;
}(error_1.MdError));
exports.MdDuplicatedSidenavError = MdDuplicatedSidenavError;
/**
 * <md-sidenav> component.
 *
 * This component corresponds to the drawer of the sidenav.
 *
 * Please refer to README.md for examples on how to use it.
 */
var MdSidenav = (function () {
    /**
     * @param _elementRef The DOM element reference. Used for transition and width calculation.
     *     If not available we do not hook on transitions.
     */
    function MdSidenav(_elementRef) {
        this._elementRef = _elementRef;
        /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
        this.align = 'start';
        /** Mode of the sidenav; whether 'over' or 'side'. */
        this.mode = 'over';
        /** Whether the sidenav is opened. */
        this._opened = false;
        /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
        this.onOpenStart = new core_1.EventEmitter();
        /** Event emitted when the sidenav is fully opened. */
        this.onOpen = new core_1.EventEmitter();
        /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
        this.onCloseStart = new core_1.EventEmitter();
        /** Event emitted when the sidenav is fully closed. */
        this.onClose = new core_1.EventEmitter();
        this._transition = false;
    }
    Object.defineProperty(MdSidenav.prototype, "opened", {
        /**
         * Whether the sidenav is opened. We overload this because we trigger an event when it
         * starts or end.
         */
        get: function () { return this._opened; },
        set: function (v) {
            this.toggle(v);
        },
        enumerable: true,
        configurable: true
    });
    /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
     * rejected if it didn't). */
    MdSidenav.prototype.open = function () {
        return this.toggle(true);
    };
    /**
     * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
     * rejected if it didn't).
     */
    MdSidenav.prototype.close = function () {
        return this.toggle(false);
    };
    /**
     * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
     * close() when it's closed.
     * @param isOpen
     */
    MdSidenav.prototype.toggle = function (isOpen) {
        if (isOpen === void 0) { isOpen = !this.opened; }
        // Shortcut it if we're already opened.
        if (isOpen === this.opened) {
            if (!this._transition) {
                return Promise.resolve();
            }
            else {
                return isOpen ? this._openPromise : this._closePromise;
            }
        }
        this._opened = isOpen;
        this._transition = true;
        if (isOpen) {
            this.onOpenStart.emit(null);
        }
        else {
            this.onCloseStart.emit(null);
        }
        if (isOpen) {
            if (this._openPromise == null) {
                var completer = new promise_completer_1.PromiseCompleter();
                this._openPromise = completer.promise;
                this._openPromiseReject = completer.reject;
                this._openPromiseResolve = completer.resolve;
            }
            return this._openPromise;
        }
        else {
            if (this._closePromise == null) {
                var completer = new promise_completer_1.PromiseCompleter();
                this._closePromise = completer.promise;
                this._closePromiseReject = completer.reject;
                this._closePromiseResolve = completer.resolve;
            }
            return this._closePromise;
        }
    };
    /**
     * When transition has finished, set the internal state for classes and emit the proper event.
     * The event passed is actually of type TransitionEvent, but that type is not available in
     * Android so we use any.
     * @param e The event.
     * @private
     */
    MdSidenav.prototype.onTransitionEnd = function (e) {
        if (e.target == this._elementRef.nativeElement
            && e.propertyName.endsWith('transform')) {
            this._transition = false;
            if (this._opened) {
                if (this._openPromise != null) {
                    this._openPromiseResolve();
                }
                if (this._closePromise != null) {
                    this._closePromiseReject();
                }
                this.onOpen.emit(null);
            }
            else {
                if (this._closePromise != null) {
                    this._closePromiseResolve();
                }
                if (this._openPromise != null) {
                    this._openPromiseReject();
                }
                this.onClose.emit(null);
            }
            this._openPromise = null;
            this._closePromise = null;
        }
    };
    Object.defineProperty(MdSidenav.prototype, "_isClosing", {
        get: function () {
            return !this._opened && this._transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isOpening", {
        get: function () {
            return this._opened && this._transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isClosed", {
        get: function () {
            return !this._opened && !this._transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isOpened", {
        get: function () {
            return this._opened && !this._transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isEnd", {
        get: function () {
            return this.align == 'end';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modeSide", {
        get: function () {
            return this.mode == 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modeOver", {
        get: function () {
            return this.mode == 'over';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modePush", {
        get: function () {
            return this.mode == 'push';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_width", {
        /**
         * This is public because we need it from MdSidenavLayout, but it's undocumented and should
         * not be used outside.
         * @private
         */
        get: function () {
            if (this._elementRef.nativeElement) {
                return this._elementRef.nativeElement.offsetWidth;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "align", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "mode", void 0);
    __decorate([
        core_1.Input('opened'), 
        __metadata('design:type', Boolean)
    ], MdSidenav.prototype, "_opened", void 0);
    __decorate([
        core_1.Output('open-start'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onOpenStart", void 0);
    __decorate([
        core_1.Output('open'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onOpen", void 0);
    __decorate([
        core_1.Output('close-start'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onCloseStart", void 0);
    __decorate([
        core_1.Output('close'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "onClose", void 0);
    __decorate([
        core_1.HostListener('transitionend', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MdSidenav.prototype, "onTransitionEnd", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-closing'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_isClosing", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-opening'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_isOpening", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-closed'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_isClosed", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-opened'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_isOpened", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-end'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_isEnd", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-side'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_modeSide", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-over'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_modeOver", null);
    __decorate([
        core_1.HostBinding('class.md-sidenav-push'), 
        __metadata('design:type', Object)
    ], MdSidenav.prototype, "_modePush", null);
    MdSidenav = __decorate([
        core_1.Component({
            selector: 'md-sidenav',
            template: '<ng-content></ng-content>',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdSidenav);
    return MdSidenav;
}());
exports.MdSidenav = MdSidenav;
/**
 * <md-sidenav-layout> component.
 *
 * This is the parent component to one or two <md-sidenav>s that validates the state internally
 * and coordinate the backdrop and content styling.
 */
var MdSidenavLayout = (function () {
    function MdSidenavLayout(_dir, _element, _renderer) {
        var _this = this;
        this._dir = _dir;
        this._element = _element;
        this._renderer = _renderer;
        // If a `Dir` directive exists up the tree, listen direction changes and update the left/right
        // properties to point to the proper start/end.
        if (_dir != null) {
            _dir.dirChange.add(function () { return _this._validateDrawers(); });
        }
    }
    Object.defineProperty(MdSidenavLayout.prototype, "start", {
        get: function () { return this._start; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenavLayout.prototype, "end", {
        get: function () { return this._end; },
        enumerable: true,
        configurable: true
    });
    MdSidenavLayout.prototype.ngAfterContentInit = function () {
        var _this = this;
        // On changes, assert on consistency.
        this._sidenavs.changes.subscribe(function () { return _this._validateDrawers(); });
        this._sidenavs.forEach(function (sidenav) { return _this._watchSidenavToggle(sidenav); });
        this._validateDrawers();
    };
    /*
    * Subscribes to sidenav events in order to set a class on the main layout element when the sidenav
    * is open and the backdrop is visible. This ensures any overflow on the layout element is properly
    * hidden.
    * */
    MdSidenavLayout.prototype._watchSidenavToggle = function (sidenav) {
        var _this = this;
        if (!sidenav || sidenav.mode === 'side') {
            return;
        }
        sidenav.onOpen.subscribe(function () { return _this._setLayoutClass(sidenav, true); });
        sidenav.onClose.subscribe(function () { return _this._setLayoutClass(sidenav, false); });
    };
    /*
    * Toggles the 'md-sidenav-opened' class on the main 'md-sidenav-layout' element.
    * */
    MdSidenavLayout.prototype._setLayoutClass = function (sidenav, bool) {
        this._renderer.setElementClass(this._element.nativeElement, 'md-sidenav-opened', bool);
    };
    /**
     * Validate the state of the sidenav children components.
     * @private
     */
    MdSidenavLayout.prototype._validateDrawers = function () {
        var _this = this;
        this._start = this._end = null;
        // Ensure that we have at most one start and one end sidenav.
        this._sidenavs.forEach(function (sidenav) {
            if (sidenav.align == 'end') {
                if (_this._end != null) {
                    throw new MdDuplicatedSidenavError('end');
                }
                _this._end = sidenav;
            }
            else {
                if (_this._start != null) {
                    throw new MdDuplicatedSidenavError('start');
                }
                _this._start = sidenav;
            }
        });
        this._right = this._left = null;
        // Detect if we're LTR or RTL.
        if (this._dir == null || this._dir.value == 'ltr') {
            this._left = this._start;
            this._right = this._end;
        }
        else {
            this._left = this._end;
            this._right = this._start;
        }
    };
    MdSidenavLayout.prototype.closeModalSidenav = function () {
        if (this._start != null && this._start.mode != 'side') {
            this._start.close();
        }
        if (this._end != null && this._end.mode != 'side') {
            this._end.close();
        }
    };
    MdSidenavLayout.prototype.isShowingBackdrop = function () {
        return (this._isSidenavOpen(this._start) && this._start.mode != 'side')
            || (this._isSidenavOpen(this._end) && this._end.mode != 'side');
    };
    MdSidenavLayout.prototype._isSidenavOpen = function (side) {
        return side != null && side.opened;
    };
    /**
     * Return the width of the sidenav, if it's in the proper mode and opened.
     * This may relayout the view, so do not call this often.
     * @param sidenav
     * @param mode
     */
    MdSidenavLayout.prototype._getSidenavEffectiveWidth = function (sidenav, mode) {
        return (this._isSidenavOpen(sidenav) && sidenav.mode == mode) ? sidenav._width : 0;
    };
    MdSidenavLayout.prototype.getMarginLeft = function () {
        return this._getSidenavEffectiveWidth(this._left, 'side');
    };
    MdSidenavLayout.prototype.getMarginRight = function () {
        return this._getSidenavEffectiveWidth(this._right, 'side');
    };
    MdSidenavLayout.prototype.getPositionLeft = function () {
        return this._getSidenavEffectiveWidth(this._left, 'push');
    };
    MdSidenavLayout.prototype.getPositionRight = function () {
        return this._getSidenavEffectiveWidth(this._right, 'push');
    };
    __decorate([
        core_1.ContentChildren(MdSidenav), 
        __metadata('design:type', core_1.QueryList)
    ], MdSidenavLayout.prototype, "_sidenavs", void 0);
    MdSidenavLayout = __decorate([
        core_1.Component({
            selector: 'md-sidenav-layout',
            // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
            // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
            // changes its state.
            directives: [MdSidenav],
            templateUrl: './components/sidenav/sidenav.html',
            styleUrls: [
                './components/sidenav/sidenav.css',
                './components/sidenav/sidenav-transitions.css',
            ],
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [dir_1.Dir, core_1.ElementRef, core_1.Renderer])
    ], MdSidenavLayout);
    return MdSidenavLayout;
}());
exports.MdSidenavLayout = MdSidenavLayout;
exports.MD_SIDENAV_DIRECTIVES = [MdSidenavLayout, MdSidenav];
//# sourceMappingURL=sidenav.js.map