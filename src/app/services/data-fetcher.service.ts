import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { USData } from '../models/dataModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataFetcherService {
  private url = 'https://api.covidtracking.com';

  constructor(private _http: HttpClient) {}

  getUSData(): Observable<USData[]> {
    return this._http.get<USData[]>(`${this.url}/v1/us/daily.json`);
  }

  getDailyData(): Observable<[]> {
    return this._http.get<[]>(`${this.url}/us/daily`);
  }

  getStatesName(): Observable<[]> {
    return this._http.get<[]>(`${this.url}/v1/states/current.json`);
  }

  getStatesData(): Observable<USData[]> {
    return this._http.get<[]>(`${this.url}/v1/states/current.json`);
  }
}
