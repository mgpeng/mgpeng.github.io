import { ComponentFactory, ComponentMetadata, ComponentResolver, ViewContainerRef } from '@angular/core';
export declare function createComponentFactory(resolver: ComponentResolver, metadata: ComponentMetadata): Promise<ComponentFactory<any>>;
export declare class DynamicHtmlOutletDirective {
    private vcRef;
    private resolver;
    src: string;
    constructor(vcRef: ViewContainerRef, resolver: ComponentResolver);
    ngOnChanges(): void;
}
