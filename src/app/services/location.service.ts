import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  location: GeolocationPosition;

  constructor(private http: HttpClient) {
  }

  getLocation(): Observable<any>{
    return new Observable<any>(_ => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.location = position;
          _.next();
          _.complete();
        });
      } else {
        _.next();
        _.complete();
      }
    });
  }
}
