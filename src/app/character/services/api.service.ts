import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.development';
import {APIClassesResult} from '../models/APIClassesResult';
import {APIRacesResult} from '../models/APIRacesResult';
import {APIStatsResult} from '../models/APIStatsResult';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient, ) {

  }

  getClasses() : Observable<APIClassesResult>{
    return this.http.get<APIClassesResult>(`${environment.API_DND_URL}/classes/`);
  }

  getRaces() : Observable<APIRacesResult>{
    return this.http.get<APIRacesResult>(`${environment.API_DND_URL}/races/`);
  }

  getStats() : Observable<APIStatsResult>{
    return this.http.get<APIStatsResult>(`${environment.API_DND_URL}/ability-scores/`);
  }





}
