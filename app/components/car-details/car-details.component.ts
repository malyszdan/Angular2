import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { CarService } from '../../services/car.service';
import {FORM_PROVIDERS, FORM_DIRECTIVES} from '@angular/common';
import { Car } from '../../shared/car/Car';



@Component({
    selector: 'my-car-details',
    templateUrl: 'app/views/car-detail.view.html',
    styleUrls: ['app/assets/css/car-detail.component.css'],
    providers: [FORM_PROVIDERS],
    directives: [FORM_DIRECTIVES]
})

export class CarDetailsComponent implements OnInit {
    @Input() car: Car;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;
    active = false;

    constructor(private carService:CarService,
                private routeParams:RouteParams){
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.active = true;
            this.carService.getCar(id)
                .then(car => this.car = car);
        } else {
            this.navigated = false;
            this.active = true;
            this.car = new Car();
        }
    }

    save() {
        this.carService
            .save(this.car)
            .then(car => {
                this.car = car; // saved car, w/ id if new
                this.goBack(car);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedCar:Car = null) {
        this.close.emit(savedCar);
        if (this.navigated) {
            window.history.back();
        }
    }
}