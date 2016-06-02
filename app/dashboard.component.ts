import { Component, OnInit } from '@angular/core';
import { Car } from './Car';
import { CarService } from './car.service';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    cars: Car[] = [];

    constructor(
        private router: Router,
        private carService: CarService) {
    }

    ngOnInit(){
        this.carService.getCars()
            .then(cars => this.cars = cars.slice(0,5));
    }

    gotoDetail(car: Car){
        let link = ['CarDetail', { id: car.id }];
        this.router.navigate(link);
    }
}