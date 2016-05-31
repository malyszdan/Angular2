import { Component } from '@angular/core';
import { Car } from './Car';
import { CarDetailsComponent } from './car-details.component';

//noinspection TypeScriptValidateTypes
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Cars</h2>
    <ul class="cars">
      <li *ngFor = "let car of cars" 
        [class.selected]="car === selectedCar"
        (click)="onSelect(car)">
        <span class="card">{{car.id}}</span> 
        {{car.brand}} {{car.model}}
    <!-- each car goes here -->
      </li>
    </ul>
    <my-car-details [car] = "selectedCar"></my-car-details>
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
  }`],
    directives: [CarDetailsComponent]
})

export class AppComponent {
    public cars = CARS;
    title = 'World of Cars';
    selectedCar: Car;

    onSelect(car: Car) {
        this.selectedCar = car;
    }
}

var CARS: Car[] = [
    { "id": 1, "brand": "WV", "model" : "Golf",  "fuelConsump" : 3.5},
    { "id": 2, "brand": "BMW", "model" : "M3",  "fuelConsump" : 4.5 },
    { "id": 3, "brand": "AUDI", "model" : "A8",  "fuelConsump" : 7.5 },

];