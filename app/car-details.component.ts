import { Component, Input } from '@angular/core';
import { Car } from './Car';


@Component({
    selector: 'my-car-details',
    template: `
    <div *ngIf="car">   
        <h2>{{car.model}} details!</h2>
        <div><label>id: </label>{{car.id}}</div>
        <div id ="editCar">
            <label>Brand: </label>
            <input [(ngModel)]="car.brand" placeholder="brand"><br>
            <label>Fuel Consumption: </label>
            <input [(ngModel)]="car.fuelConsump" placeholder="fuelConsump">
        </div>
     </div>
    `
})

export class CarDetailsComponent {
    @Input()
    car: Car;
}