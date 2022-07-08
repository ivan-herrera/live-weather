import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastWeatherApiService {

  url: string = 'http://api.weatherapi.com/v1/forecast.json';
  apiKey: string = 'baf7fd7b47fe455a8f623947220807';
  q: string = 'Sincelejo';

  path: string = `${this.url}?key=${this.apiKey}&days=7&lang=es&q=`;

  constructor(private http: HttpClient) { }

  getForecastWeather(cityName: string){
    return this.http.get(`${this.path}${cityName}`);
  }
}
