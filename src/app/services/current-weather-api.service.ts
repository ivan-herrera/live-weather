import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherApiService {

  url: string = 'http://api.weatherapi.com/v1/current.json';
  apiKey: string = 'baf7fd7b47fe455a8f623947220807';
  q: string = 'Sincelejo';

  path: string = `${this.url}?key=${this.apiKey}&lang=es&q=`;

  constructor(private http: HttpClient) { }
  
  getCurrentWeather(location: string) {
    return this.http.get(`${this.path}${location}`);
  }
}
