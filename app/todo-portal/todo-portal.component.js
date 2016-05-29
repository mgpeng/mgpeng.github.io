"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./service/todo.service');
var todo_list_component_1 = require('./todo-list/todo-list.component');
var todo_form_component_1 = require('./todo-form/todo-form.component');
var remain_archive_component_1 = require('./remain-archive/remain-archive.component');
var page_scroll_directive_1 = require('../page-scroll-directive/page-scroll.directive');
var TodoPortalComponent = (function () {
    function TodoPortalComponent(_tS) {
        this._tS = _tS;
        this.title = "Todo Portal";
        //----------------------------------//
        this.myEasing = function (t, b, c, d) {
            // easeInOutExpo easing
            if (t === 0)
                return b;
            if (t === d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
    }
    TodoPortalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tS.getTodoSlowly().then(function (tds) { return _this.todos = tds; });
    };
    TodoPortalComponent.prototype.checkTask = function (index) {
        this.todos[index].done = !this.todos[index].done;
        this.todos = [].concat(this.todos);
    };
    TodoPortalComponent.prototype.addNewTodo = function (todo) {
        this.todos = this.todos.concat(todo);
    };
    TodoPortalComponent.prototype.deleteDoneTask = function (tds) {
        this.todos = this.todos.filter(function (todo) { return !todo.done; });
        this.todos = [].concat(this.todos);
    };
    //-----------------------------------
    TodoPortalComponent.prototype.routerOnActivate = function (curr, prev, currTree, prevTree) {
        console.log("inside Todo OnActivate");
        setTimeout(function () {
            console.log("inside OnActivate setTimeout");
        }, 2000);
    };
    TodoPortalComponent.prototype.routerCanDeactivate = function (currTree, futureTree) {
        var _this = this;
        console.log("inside todo CanDeactivate");
        return new Promise(function (res, rej) {
            setTimeout(function () {
                res('Now ready.');
            }, 5000);
        }).then(function (r) { return _this.modelStatus = r; });
    };
    TodoPortalComponent = __decorate([
        core_1.Component({
            selector: 'todo-portal',
            templateUrl: "app/todo-portal/todo-portal.component.html",
            directives: [todo_list_component_1.TodoListComponent, todo_form_component_1.TodoFormComponent, remain_archive_component_1.RemainArchiveComponent,
                page_scroll_directive_1.PageScroll
            ],
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoPortalComponent);
    return TodoPortalComponent;
}());
exports.TodoPortalComponent = TodoPortalComponent;
//# sourceMappingURL=todo-portal.component.js.map