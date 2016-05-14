import { EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Todo } from '../data-class/todo';
export declare class RemainArchiveComponent implements OnChanges {
    tdListIn: Todo[];
    delDone_evt: EventEmitter<Todo[]>;
    remaining: number;
    totalLen: number;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    archive(): void;
}
