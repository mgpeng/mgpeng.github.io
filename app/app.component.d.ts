import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class Element {
    private nodeName;
    private parent;
    constructor(nodeName: string, parent?: Element);
    toString(): string;
}
export declare class AppComponent implements OnInit {
    private _r;
    title: string;
    constructor(_r: Router);
    ngOnInit(): void;
}
