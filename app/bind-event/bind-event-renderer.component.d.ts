import { Renderer, ElementRef, OnDestroy } from '@angular/core';
export declare class BindEventRendererComponent implements OnDestroy {
    listenFunc: Function;
    globalListenFunc: Function;
    constructor(elementRef: ElementRef, renderer: Renderer);
    removeListeners(): void;
    ngOnDestroy(): void;
}
