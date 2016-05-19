import { ElementRef } from '@angular/core';
import { AnimationBuilder } from '@angular/platform-browser/src/animate/animation_builder';
export declare class DownupBox {
    private _db;
    private _el;
    constructor(_db: AnimationBuilder, _el: ElementRef);
    toggle(isVisiable?: boolean): void;
}
