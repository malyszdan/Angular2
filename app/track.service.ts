import { Injectable } from '@angular/core';
import { TRACKS } from './data-tracks';
import { Track } from './Track';

@Injectable()
export class TrackService {

    getTrack(id: number) {
        return this.getTracks()
            .then(tracks => tracks.filter(track => track.id === id)[0]);
    }

    getTracks(){
        return Promise.resolve(TRACKS);
    }

}