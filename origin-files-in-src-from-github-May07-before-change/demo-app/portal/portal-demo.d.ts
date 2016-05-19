import { Portal } from '../../core/portal/portal';
import { QueryList } from '@angular/core';
import { ComponentPortal } from '../../core/portal/portal';
export declare class PortalDemo {
    templatePortals: QueryList<Portal<any>>;
    selectedPortal: Portal<any>;
    programmingJoke: Portal<any>;
    mathJoke: Portal<any>;
    scienceJoke: ComponentPortal;
}
