import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeatherApiService } from './services/current-weather-api.service';
import { ForecastWeatherApiService } from './services/forecast-weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  texto: string = 'Hola que hace'

  title = 'live-weather';

  current$ = new Observable;
  forecast$ = new Observable;

  currentLocationWeather: any;
  currentWeather:any;
  forecastWeather:any;
  city: string = 'Sincelejo';

  constructor(private service: CurrentWeatherApiService, private serviceF: ForecastWeatherApiService) {}

  ngOnInit(): void {
    //this.current$ = this.service.getCurrentWeather();
    this.service.getCurrentWeather(this.city).subscribe((data:any)=>{
      console.log(data);
      this.currentLocationWeather = data.location;
      this.currentWeather = data.current;
    })

    this.serviceF.getForecastWeather(this.city).subscribe((data:any)=>{
      console.log(data);
      //this.currentLocationWeather = data.location;
      this.forecastWeather = data.forecast;
    })
  }

  searchLocation(cityName: HTMLInputElement){
    this.city = cityName.value
    this.service.getCurrentWeather(this.city).subscribe((data:any)=>{
      //console.log(data);
      this.currentLocationWeather = data.location;
      this.currentWeather = data.current;
    })

    this.serviceF.getForecastWeather(this.city).subscribe((data:any)=>{
      //console.log(data);
      //this.currentLocationWeather = data.location;
      this.forecastWeather = data.forecast;
    })

    
    console.log(cityName.value);
    return false;
  }
}
