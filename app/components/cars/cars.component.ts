import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Car } from '../../shared/car/Car';
import { CarService } from '../../services/car.service';
import { CarDetailsComponent } from '../car-details/car-details.component';



@Component({
    selector: 'my-cars',
    templateUrl: 'app/views/cars.view.html',
    styleUrls: ['app/assets/css/cars.component.css'],
    directives: [CarDetailsComponent]
})

export class CarsComponent implements OnInit {
    cars : Car[];
    selectedCar: Car;
    addingCar = false;
    error: any;

    constructor(
        private router: Router,
        private carService: CarService) { }


    getCars(){
        this.carService.getCars().then(cars => this.cars = cars).
            catch(error => this.error = error);
    }

    addCar() {
        this.addingCar = true;
        this.selectedCar = null;
    }

    close(savedCar: Car) {
        this.addingCar = false;
        if (savedCar) { this.getCars(); }
    }

    delete(car: Car, event: any) {
        event.stopPropagation();
        this.carService
            .delete(car)
            .then( res => {
                this.cars = this.cars.filter(h => h !== car);
                if (this.selectedCar === car) { this.selectedCar = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    ngOnInit(){
        this.getCars();
    }

    onSelect(car: Car) {
        this.selectedCar = car;
        this.addingCar = false;
    }
    gotoDetail() {
        this.router.navigate(['CarDetail', { id: this.selectedCar.id }]);
    }

}

