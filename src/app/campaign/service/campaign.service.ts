import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CampaignHomeDTO} from '../models/campaign-home-model';
import {environment} from '../../../environments/environment';
import {CampaignOverviewDTO} from '../models/campaign-overview';

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

}
