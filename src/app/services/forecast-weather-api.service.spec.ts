import { TestBed } from '@angular/core/testing';

import { ForecastWeatherApiService } from './forecast-weather-api.service';

describe('ForecastWeatherApiService', () => {
  let service: ForecastWeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastWeatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
