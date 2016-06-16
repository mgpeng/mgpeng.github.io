import { Observable } from 'rxjs/Observable';
import { Broadcaster } from './broadcaster';
export declare class MessageEvent {
    private broadcaster;
    constructor(broadcaster: Broadcaster);
    fire(data: string): void;
    on(): Observable<string>;
}
