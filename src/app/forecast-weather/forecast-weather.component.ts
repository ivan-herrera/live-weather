import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastWeatherApiService } from '../services/forecast-weather-api.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {

  @Input() forecastW:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
