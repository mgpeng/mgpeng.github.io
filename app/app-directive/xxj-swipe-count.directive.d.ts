import { ElementRef } from '@angular/core';
export declare class XxjSwipeCountDirective {
    private _el;
    constructor(_el: ElementRef);
    swipeNumber: number;
    text: string;
    onSwipe(el: Element): void;
}
