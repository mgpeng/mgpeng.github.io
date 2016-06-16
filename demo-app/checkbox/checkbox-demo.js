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
var checkbox_1 = require('@angular2-material/checkbox');
var MdCheckboxDemoNestedChecklist = (function () {
    function MdCheckboxDemoNestedChecklist() {
        this.tasks = [
            {
                name: 'Reminders',
                completed: false,
                subtasks: [
                    { name: 'Cook Dinner', completed: false },
                    { name: 'Read the Material Design Spec', completed: false },
                    { name: 'Upgrade Application to Angular2', completed: false }
                ]
            },
            {
                name: 'Groceries',
                completed: false,
                subtasks: [
                    { name: 'Organic Eggs', completed: false },
                    { name: 'Protein Powder', completed: false },
                    { name: 'Almond Meal Flour', completed: false }
                ]
            }
        ];
    }
    MdCheckboxDemoNestedChecklist.prototype.allComplete = function (tasks) {
        return tasks.every(function (t) { return t.completed; });
    };
    MdCheckboxDemoNestedChecklist.prototype.someComplete = function (tasks) {
        var numComplete = tasks.filter(function (t) { return t.completed; }).length;
        return numComplete > 0 && numComplete < tasks.length;
    };
    MdCheckboxDemoNestedChecklist.prototype.setAllCompleted = function (tasks, completed) {
        tasks.forEach(function (t) { return t.completed = completed; });
    };
    MdCheckboxDemoNestedChecklist.prototype.updateOnSubtaskChange = function (task) {
        task.completed = this.allComplete(task.subtasks);
    };
    MdCheckboxDemoNestedChecklist = __decorate([
        core_1.Component({
            selector: 'md-checkbox-demo-nested-checklist',
            styles: ["\n    li {\n      margin-bottom: 4px;\n    }\n  "],
            templateUrl: 'demo-app/checkbox/nested-checklist.html',
            directives: [checkbox_1.MdCheckbox]
        }), 
        __metadata('design:paramtypes', [])
    ], MdCheckboxDemoNestedChecklist);
    return MdCheckboxDemoNestedChecklist;
}());
var CheckboxDemo = (function () {
    function CheckboxDemo() {
        this.isIndeterminate = false;
        this.isChecked = false;
        this.isDisabled = false;
        this.alignment = 'start';
    }
    CheckboxDemo.prototype.printResult = function () {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    };
    CheckboxDemo = __decorate([
        core_1.Component({
            selector: 'md-checkbox-demo',
            templateUrl: 'demo-app/checkbox/checkbox-demo.html',
            styleUrls: ['demo-app/checkbox/checkbox-demo.css'],
            directives: [checkbox_1.MdCheckbox, MdCheckboxDemoNestedChecklist, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckboxDemo);
    return CheckboxDemo;
}());
exports.CheckboxDemo = CheckboxDemo;
//# sourceMappingURL=checkbox-demo.js.map