import { Injectable } from '@angular/core';
import { TRACKS } from '../shared/data-tracks/data-tracks';
import { Track } from '../shared/track/Track';

@Injectable()
export class TrackService {

    getTrack(id: number) {
        return this.getTracks()
            .then(tracks => tracks.filter(track => track.id === id)[0]);
    }

    getTracks(){
        return new Promise<Track[]>(resolve =>
            setTimeout(()=>resolve(TRACKS), 1500)); // 1.5 seconds
    }
   

}