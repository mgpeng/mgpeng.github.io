import { OnInit } from '@angular/core';
import { Todo } from './data-class/todo';
import { TodoService } from './service/todo.service';
export declare class TodoPortalComponent implements OnInit {
    private _tS;
    title: string;
    todos: Todo[];
    constructor(_tS: TodoService);
    ngOnInit(): void;
    checkTask(index: number): void;
    addNewTodo(todo: Todo): void;
    deleteDoneTask(tds: Todo[]): void;
}
