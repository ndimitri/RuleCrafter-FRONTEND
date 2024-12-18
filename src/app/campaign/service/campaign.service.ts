import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CampaignHomeDTO} from '../models/dtos/campaign-home-model';
import {environment} from '../../../environments/environment';
import {CampaignOverviewDTO} from '../models/dtos/campaign-overview';
import {WorldOverviewDTO} from '../models/dtos/world-overview';
import {MainMapOverviewDTO} from '../models/dtos/main-map-overview';
import {CampaignCreationAssemblingDTO} from '../models/dtos/campaign-creation-assembling-dto';

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

  getMainMapOverview(id: number): Observable<MainMapOverviewDTO> {
    return this._http.get<MainMapOverviewDTO>(environment.API_URL + "/campaign/" + id + "/worldOverview/mainMapOverview");
  }

  getCreationAssembling(): Observable<CampaignCreationAssemblingDTO[]> {
    return this._http.get<CampaignCreationAssemblingDTO[]>(environment.API_URL + "/campaign/campaignCreation/campaignContainer")
  }



}
