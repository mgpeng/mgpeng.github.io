import { EventEmitter } from '@angular/core';
import { Todo } from '../data-class/todo';
export declare class TodoFormComponent {
    addTask_evt: EventEmitter<Todo>;
    task: string;
    addNewTask(): void;
}
