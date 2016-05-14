import { EventEmitter } from '@angular/core';
import { Todo } from '../data-class/todo';
export declare class TodoListComponent {
    todoListIn: Todo[];
    check_evt: EventEmitter<number>;
    classSet: any;
    canSave: boolean;
    isUnchanged: boolean;
    isSpecial: boolean;
    checkTask(i: number): void;
    setClasses(): any;
}
