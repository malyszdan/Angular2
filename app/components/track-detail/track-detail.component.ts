import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
//import { FormBuilder, Validators } from '@angular/common';
//import { ControlMessages } from './control-messages.component';

import { Track } from '../../shared/track/Track';
import { TrackService } from '../../services/track.service';

@Component({
    selector: 'my-track-detail',
    template: `
  <div *ngIf="track">
    <h2>{{track.start}} {{track.meta}} distance</h2>
    <div>
      <label>Distance: </label>
      <input  [(ngModel)]="track.distance" placeholder="distance"/>
    </div>
    <button (click)="goBack()">Back</button>
  </div>
`
})
export class TrackDetailComponent {
    track: Track;


    constructor(
        private trackService: TrackService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.trackService.getTrack(id)
            .then(track => this.track = track);
    }
    
    goBack() {
        window.history.back();
    }
}
