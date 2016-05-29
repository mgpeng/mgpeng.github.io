import { OnInit } from '@angular/core';
import { RouteSegment, RouteTree } from '@angular/router';
import { Todo } from './data-class/todo';
import { TodoService } from './service/todo.service';
import { IEasingFunction } from '../page-scroll-directive/page-scroll-config';
export declare class TodoPortalComponent implements OnInit {
    private _tS;
    title: string;
    todos: Todo[];
    constructor(_tS: TodoService);
    ngOnInit(): void;
    checkTask(index: number): void;
    addNewTodo(todo: Todo): void;
    deleteDoneTask(tds: Todo[]): void;
    myEasing: IEasingFunction;
    routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void;
    modelStatus: any;
    routerCanDeactivate(currTree?: RouteTree, futureTree?: RouteTree): Promise<boolean>;
}
