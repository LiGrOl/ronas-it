import {Component, OnInit} from '@angular/core';
import {WeatherService} from './services/weather.service';
import {LocationService} from './services/location.service';
import {StatModel} from './components/stat-block/stat-block.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: any;
  stats: any[];
  temp: number;
  selectedCity: string;
  iconSrc: string;
  desc: string;

  constructor(private weatherService: WeatherService,
              private locationService: LocationService) {
    this.locationService.getLocation().subscribe(_ => {
      if (this.locationService.location) {
        this.weatherService.getWeatherByPoints(
          this.locationService.location.coords.latitude,
          this.locationService.location.coords.longitude
        ).subscribe(res => {
          this.data = res;
          this.init();
        });
      }
    });
  }

  init(): void {
    this.temp = this.weatherService.kelToCel(this.data.main.temp);
    this.desc = this.data.weather[0].description;
    this.iconSrc = `http://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`;
    this.selectedCity = this.data.name;

    this.stats.push(new StatModel('Wind', `${this.data.wind.speed} m/s, `));
  }

  setCity(cityName: string): void {
    this.weatherService.getWeatherByCity(cityName).subscribe(res => {
      if (res.code && res.code === '404') {
        alert('City is undefined, please choose valid city name');
      } else {
        this.selectedCity = cityName;
        this.weatherService.setCurWeather(res);
        this.data = res;
        this.init();
      }
    });
  }

  setCurLocation(): void {
    this.weatherService.getWeatherByPoints(
      this.locationService.location.coords.latitude,
      this.locationService.location.coords.longitude
    ).subscribe(res => {
      this.data = res;
      this.init();
    });
  }
}
