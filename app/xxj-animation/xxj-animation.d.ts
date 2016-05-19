import { EventEmitter, ElementRef, OnInit, OnChanges } from '@angular/core';
export declare class XxjAnimation implements OnInit, OnChanges {
    onAnimationStart: EventEmitter<any>;
    onAnimationEnd: EventEmitter<any>;
    animationClasses: string;
    play: boolean;
    id: string;
    group: string;
    _animationQueue: string[];
    _callbacks: (() => void)[];
    element: Element;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    ngOnInit(): void;
    addAnimation(animationClasses: string): XxjAnimation;
    setup(): XxjAnimation;
    startAnimation(callback?: () => void): XxjAnimation;
    cleanAnimation(): XxjAnimation;
    animationStarted(event: Event): void;
    animationEnded(event: Event): void;
}
