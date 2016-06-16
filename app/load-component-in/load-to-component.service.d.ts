import { Injector, ComponentResolver, ViewContainerRef, DynamicComponentLoader } from '@angular/core';
export declare class LoadToComponentService {
    private _componentResolver;
    private _injector;
    private _vc;
    private _loader;
    constructor(_componentResolver: ComponentResolver, _injector: Injector, _vc: ViewContainerRef, _loader: DynamicComponentLoader);
    open(): void;
}
