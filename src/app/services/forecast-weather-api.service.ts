import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastWeatherApiService {

  url: string = 'http://api.weatherapi.com/v1/forecast.json';
  apiKey: string = '2c4a037d6f98436697d151952211309';
  q: string = 'Sincelejo';

  path: string = `${this.url}?key=${this.apiKey}&days=7&lang=es&q=`;

  constructor(private http: HttpClient) { }

  getForecastWeather(cityName: string){
    return this.http.get(`${this.path}${cityName}`);
  }
}
