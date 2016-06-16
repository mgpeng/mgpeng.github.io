import { Broadcaster } from '../custom-broadcast/broadcaster';
import { MessageEvent } from '../custom-broadcast/message-event';
export declare class UseBroadcastChildComponent {
    private broadcaster;
    private messageEvent;
    childId: string;
    eventType: string;
    message: string;
    _timer: any;
    constructor(broadcaster: Broadcaster, messageEvent: MessageEvent);
    ngOnInit(): void;
    registerStringBroadcast(): void;
    registerTypeBroadcast(): void;
    emit(): void;
    emitStringBroadcast(): void;
    emitTypeBroadcast(): void;
}
