import { OnInit, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
export declare class Element {
    private nodeName;
    private parent;
    constructor(nodeName: string, parent?: Element);
    toString(): string;
}
export declare class AppComponent implements OnInit {
    private _r;
    private _renderer;
    private _el;
    title: string;
    htmlString: string;
    constructor(_r: Router, _renderer: Renderer, _el: ElementRef);
    ngOnInit(): void;
}
