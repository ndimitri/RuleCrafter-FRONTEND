import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CampaignHomeDTO} from '../models/campaign-home-model';
import {environment} from '../../../environments/environment';
import {CampaignOverviewDTO} from '../models/campaign-overview';
import {WorldOverviewDTO} from '../models/world-overview';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(
    private _http: HttpClient,
  ) { }

  getCampaigns(): Observable<CampaignHomeDTO[]> {
    return this._http.get<CampaignHomeDTO[]>(environment.API_URL + "/campaign");
  }

  getCampaign(id: number): Observable<CampaignOverviewDTO> {
    return this._http.get<CampaignOverviewDTO>(environment.API_URL + "/campaign/" + id);
  }

  getWorldOverview(id: number): Observable<WorldOverviewDTO> {
    return this._http.get<WorldOverviewDTO>(environment.API_URL + "/campaign/" + id + "/worldOverview");
  }

}
