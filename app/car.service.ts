import { Injectable } from '@angular/core';
import { Car } from './Car';
import { CARS } from './data-cars';

@Injectable()
export class CarService {

    getCars(){
        return Promise.resolve(CARS);
    }
    
}