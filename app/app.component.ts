import { Component } from '@angular/core';

export class Car {
    id: number;
    model: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{car.model}}</h2>
    <div><label>id: </label>{{car.id}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="car.model" placeholder="model">
    </div>

    `
})
export class AppComponent {
    title = 'World of Cars';
    car: Car = {
        id: 1,
        model: 'BMW M3'
    };
}