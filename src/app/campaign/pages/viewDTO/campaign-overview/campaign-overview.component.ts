import { Component } from '@angular/core';
import {CampaignOverviewDTO} from '../../../models/dtos/campaign-overview';
import {CampaignService} from '../../../service/campaign.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-campaign-overview',
  templateUrl: './campaign-overview.component.html',
  styleUrl: './campaign-overview.component.scss'
})
export class CampaignOverviewComponent {

  campaignOverview!: CampaignOverviewDTO;

  constructor(
    private _campaignOverviewService: CampaignService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {
    let id = + this._activatedRoute.snapshot.params['id'];
    this.getCampaign(id);
    console.log(id)
  }

  getCampaign(id: number): void {
    this._campaignOverviewService.getCampaign(id).subscribe({
      next: (result): void => {
        this.campaignOverview = result;
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }

}
