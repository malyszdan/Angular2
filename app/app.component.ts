import { Component } from '@angular/core';

export class Car {
    id: number;
    model: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Cars</h2>
    <ul class="cars">
    <li *ngFor = "let car of cars" (click)="onSelect(car)">
    <span class="card">{{car.id}}</span> {{car.model}}
    <!-- each car goes here -->
    </li>
    </ul>
    <h2>{{car.model}}</h2>
    <div><label>id: </label>{{car.id}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="car.model" placeholder="model">
    </div>

    `,
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .cars {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .cars li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .cars li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .cars li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .cars .text {
    position: relative;
    top: -3px;
  }
  .cars .card {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
    public cars = CARS;
    title = 'World of Cars';
    car: Car = {
        id: 1,
        model: 'BMW M3'
    };
}

var CARS: Car[] = [
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