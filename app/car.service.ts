import { Injectable } from '@angular/core';
import { CARS } from './data-cars';

@Injectable()
export class CarService {

    getCars(){
        return CARS;
    }

}