import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class UnlessDirective {
    private templateRef;
    private viewContainer;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
    myUnless: boolean;
}
