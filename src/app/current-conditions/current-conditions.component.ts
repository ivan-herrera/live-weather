import { Component, Input, OnInit } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { CurrentWeatherApiService } from '../services/current-weather-api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  @Input() city: string;
  @Input() currentW:any; 
  @Input() locationW:any;

  //current$ = new Observable;

  //currentLocationWeather: any;
  //currentWeather:any;

  constructor() { }

  ngOnInit(): void {
    /*this.service.getCurrentWeather(this.city).subscribe((data:any)=>{
      console.log(data);
      this.currentLocationWeather = data.location;
      this.currentWeather = data.current;
    })*/
  }



}
