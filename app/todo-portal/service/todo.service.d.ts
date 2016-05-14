import { Todo } from '../data-class/todo';
export declare class TodoService {
    getTodo(): Promise<Todo[]>;
    getTodoSlowly(): Promise<Todo[]>;
    setNewTodo(todo: Todo): void;
}
