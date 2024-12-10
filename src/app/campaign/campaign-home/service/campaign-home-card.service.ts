import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CampaignHomeDTO} from '../../../shared/models/campaign-home-model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampaignHomeCardService {

  constructor(
    private _http: HttpClient,
  ) { }

  getCards(): Observable<CampaignHomeDTO[]> {
    return this._http.get<CampaignHomeDTO[]>(environment.API_URL + "/campaign");
  }
}
