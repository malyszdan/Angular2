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
var Car = (function () {
    function Car() {
    }
    return Car;
}());
exports.Car = Car;
var AppComponent = (function () {
    function AppComponent() {
        this.cars = CARS;
        this.title = 'World of Cars';
        this.car = {
            id: 1,
            model: 'BMW M3'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Cars</h2>\n    <ul class=\"cars\">\n    <li *ngFor = \"let car of cars\" (click)=\"onSelect(car)\">\n    <span class=\"card\">{{car.id}}</span> {{car.model}}\n    <!-- each car goes here -->\n    </li>\n    </ul>\n    <h2>{{car.model}}</h2>\n    <div><label>id: </label>{{car.id}}</div>\n    <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"car.model\" placeholder=\"model\">\n    </div>\n\n    ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .cars {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .cars li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .cars li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .cars li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .cars .text {\n    position: relative;\n    top: -3px;\n  }\n  .cars .card {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var CARS = [
    { "id": 11, "model": "WV Golf" },
    { "id": 12, "model": "Audi A3" },
    { "id": 13, "model": "Mercedes S" },
    { "id": 14, "model": "Citroen" },
    { "id": 15, "model": "Skoda" },
    { "id": 16, "model": "BMW" },
    { "id": 17, "model": "Audi" },
    { "id": 18, "model": "Honda" },
    { "id": 19, "model": "Toyota" },
    { "id": 20, "model": "Fiat" }
];
//# sourceMappingURL=app.component.js.map