import { QueryList, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular2-material/core/overlay/overlay';
import { Portal } from '@angular2-material/core/portal/portal';
export declare class OverlayDemo {
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    nextPosition: number;
    templatePortals: QueryList<Portal<any>>;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef);
    openRotiniPanel(): void;
    openFusilliPanel(): void;
}
