import { Component } from '@angular/core';
import {MainMapOverviewDTO} from '../../../models/dtos/main-map-overview';
import {CampaignService} from '../../../service/campaign.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main-map-overview',
  templateUrl: './main-map-overview.component.html',
  styleUrl: './main-map-overview.component.scss'
})
export class MainMapOverviewComponent {

  mainMapOverview!: MainMapOverviewDTO;

  constructor(
    private _mainMapOverview: CampaignService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    const id: number = this._activatedRoute.snapshot.params['id'];
    this.getLocations(id);
  }

  getLocations(id: number): void {
    this._mainMapOverview.getMainMapOverview(id).subscribe({
      next: (result): void => {
        this.mainMapOverview = result;
      },
      error: (error): void => {
        console.log(error);
      }
    })
  }

}
