"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_spinner_1 = require('../base-spinner');
var CubeGridComponent = (function (_super) {
    __extends(CubeGridComponent, _super);
    function CubeGridComponent() {
        _super.apply(this, arguments);
    }
    CubeGridComponent = __decorate([
        core_1.Component({
            selector: 'sk-cube-grid',
            styles: ["\n    .cube-grid-spinner {\n      width: 40px;\n      height: 40px;\n      margin: 25px auto;\n    }\n    \n    .cube-grid-spinner .cube {\n      width: 33%;\n      height: 33%;\n      background-color: #333;\n      float: left;\n      \n      -webkit-animation: cubeGridScaleDelay 1.3s infinite ease-in-out;\n      animation: cubeGridScaleDelay 1.3s infinite ease-in-out; \n    }\n    \n    .cube-grid-spinner .cube1 {\n      -webkit-animation-delay: 0.2s;\n      animation-delay: 0.2s;\n    }\n    \n    .cube-grid-spinner .cube2 {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n    }\n    \n    .cube-grid-spinner .cube3 {\n      -webkit-animation-delay: 0.4s;\n      animation-delay: 0.4s;\n    }\n    \n    .cube-grid-spinner .cube4 {\n      -webkit-animation-delay: 0.1s;\n      animation-delay: 0.1s;\n    }\n    \n    .cube-grid-spinner .cube5 {\n      -webkit-animation-delay: 0.2s;\n      animation-delay: 0.2s;\n    }\n    \n    .cube-grid-spinner .cube6 {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n    }\n    \n    .cube-grid-spinner .cube7 {\n      -webkit-animation-delay: 0s;\n      animation-delay: 0s;\n    }\n    \n    .cube-grid-spinner .cube8 {\n      -webkit-animation-delay: 0.1s;\n      animation-delay: 0.1s;\n    }\n    \n    .cube-grid-spinner .cube9 {\n      -webkit-animation-delay: 0.2s;\n      animation-delay: 0.2s;\n    }\n    \n    @-webkit-keyframes cubeGridScaleDelay {\n      0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n      } 35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1); \n      }\n    }\n    \n    @keyframes cubeGridScaleDelay {\n      0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n      } 35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1);\n      } \n    }\n  "],
            templateUrl: 'app/spinner/cube-grid/cube-grid.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CubeGridComponent);
    return CubeGridComponent;
}(base_spinner_1.BaseSpinner));
exports.CubeGridComponent = CubeGridComponent;
//# sourceMappingURL=cube-grid.js.map