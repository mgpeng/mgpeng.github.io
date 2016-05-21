import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IEasingFunction } from './page-scroll-config';
export declare class PageScroll implements OnDestroy {
    private el;
    private router;
    routerLink: any;
    href: string;
    pageScrollOffset: number;
    pageScrollDuration: number;
    pageScrollEasing: IEasingFunction;
    pageScrollFinish: EventEmitter<any>;
    private document;
    private body;
    private listener;
    private static timers;
    private static interfereEvents;
    private static interfereKeys;
    constructor(el: ElementRef, router: Router);
    ngOnDestroy(): any;
    private handleClick(event);
    private scrollView(anchor);
    private static stopTimers();
    private static stopTimer(timer);
}
