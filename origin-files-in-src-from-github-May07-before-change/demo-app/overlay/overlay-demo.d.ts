import { QueryList, ViewContainerRef } from '@angular/core';
import { Overlay } from '../../core/overlay/overlay';
import { Portal } from '../../core/portal/portal';
export declare class OverlayDemo {
    overlay: Overlay;
    viewContainerRef: ViewContainerRef;
    nextPosition: number;
    templatePortals: QueryList<Portal<any>>;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef);
    openRotiniPanel(): void;
    openFusilliPanel(): void;
}
