import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/car/Car';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router-deprecated';
import { Track } from '../../shared/track/Track';
import {TrackService } from '../../services/track.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/views/dashboard.view.html',
    styleUrls: ['app/assets/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    cars: Car[] = [];
    tracks: Track[] = [];

    constructor(
        private router: Router,
        private carService: CarService,
        private trackService: TrackService) {
    }

    ngOnInit(){
        this.carService.getCars()
            .then(cars => this.cars = cars.slice(0,5));
        this.trackService.getTracks()
            .then(tracks => this.tracks = tracks.slice(0,5));
    }

    gotoDetail(car: Car){
        let link = ['CarDetail', { id: car.id }];
        this.router.navigate(link);
    }

    gotoDetailTr(track: Track){
        let link = ['TrackDetail', { id: track.id }];
        this.router.navigate(link);
    }
}