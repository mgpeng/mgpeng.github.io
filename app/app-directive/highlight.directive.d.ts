import { ElementRef } from '@angular/core';
export declare class XxjHighlightDirective {
    private _el;
    xxjHighlight: string;
    private el;
    constructor(_el: ElementRef);
    onMouseEnter(): void;
    onMouseLeave(): void;
    private highlight(color);
}
