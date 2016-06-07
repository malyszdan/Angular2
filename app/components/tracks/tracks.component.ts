import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Track } from '../../shared/track/Track';
import { TrackService } from '../../services/track.service';

@Component({
    selector: 'my-tracks',
    templateUrl: 'app/views/tracks.view.html',
    styleUrls:  ['app/assets/css/tracks.component.css']
})


export class TracksComponent implements OnInit {
    tracks: Track[];
    selectedTrack: Track;

    constructor(
        private router: Router,
        private trackService: TrackService) { }

    getTracks() {
        this.trackService.getTracks().then(tracks => this.tracks = tracks);
    }
    ngOnInit() {
        this.getTracks();
    }
    onSelect(track: Track) { this.selectedTrack = track; }
    gotoDetail() {
        this.router.navigate(['TrackDetail', { id: this.selectedTrack.id }]);
    }
}