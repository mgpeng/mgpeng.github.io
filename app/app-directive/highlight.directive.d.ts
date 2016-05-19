import { ElementRef } from '@angular/core';
export declare class HighlightDirective {
    private _el;
    xxjHighlight: string;
    private el;
    constructor(_el: ElementRef);
    onMouseEnter(): void;
    onMouseLeave(): void;
    private highlight(color);
}
