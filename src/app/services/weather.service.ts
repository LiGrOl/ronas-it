import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  apiKey = 'cc8343fcc9c2041448033c0bbc583943';
  private selectedWeather: any;

  constructor(private http: HttpClient) {}

  setCurWeather(data: any): void {
    this.selectedWeather = data;
  }

  getSelectedWeather(): void {
    return this.selectedWeather;
  }

  getWeatherByCity(cityName: string): Observable<any> {
    if (cityName) {
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`);
    }

    throw new Error();
  }

  getWeatherByPoints(lat: number, lon: number): Observable<any> {
    if (lat && lon) {
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
    }

    throw new Error();
  }

  kelToCel(temp: number): number {
    return Math.round(temp - 273.15);
  }

  get
}
