import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Car } from './Car';
import { CarService } from './car.service';



@Component({
    selector: 'my-cars',
    templateUrl: 'app/cars.component.html',
    styleUrls: ['app/cars.component.css']
})

export class CarsComponent implements OnInit {
    cars : Car[];
    selectedCar: Car;

    constructor(
        private router: Router,
        private carService: CarService) { }


    getCars(){
        this.carService.getCars().then(cars => this.cars = cars);
    }
    ngOnInit(){
        this.getCars();
    }

    onSelect(car: Car) {
        this.selectedCar = car;
    }
    gotoDetail() {
        this.router.navigate(['CarDetail', { id: this.selectedCar.id }]);
    }
}

