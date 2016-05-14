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
var common_1 = require('@angular/common');
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.check_evt = new core_1.EventEmitter();
        this.canSave = true;
        this.isUnchanged = false;
        this.isSpecial = true;
    }
    TodoListComponent.prototype.checkTask = function (i) {
        this.check_evt.emit(i);
    };
    TodoListComponent.prototype.setClasses = function () {
        this.classSet = {
            showHigh: this.canSave,
            redBG: !this.isUnchanged,
            showWide: this.isSpecial
        };
        return this.classSet;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoListComponent.prototype, "todoListIn", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoListComponent.prototype, "check_evt", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: "todo-list",
            template: "\n      <ul class=\"list-unstyled\" >\n        <li *ngFor=\"#todo of todoListIn #i=index\">\n            <input type=\"checkbox\" [(ngModel)]=\"todo.done\" (click)=\"checkTask(i)\"/>\n            <span class=\"done-{{todo.done}}\"  [ngClass]='setClasses()'\n                  >{{todo.text}}</span>\n        </li>\n      </ul>\n    ",
            styleUrls: ['../app/todo-portal/todo-list/todo-list.component.css'],
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map