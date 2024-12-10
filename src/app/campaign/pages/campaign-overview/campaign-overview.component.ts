import { Component } from '@angular/core';
import {CampaignOverviewDTO} from '../../models/campaign-overview';
import {CampaignService} from '../../service/campaign.service';

@Component({
  selector: 'app-campaign-overview',
  templateUrl: './campaign-overview.component.html',
  styleUrl: './campaign-overview.component.scss'
})
export class CampaignOverviewComponent {

  campaignOverview!: CampaignOverviewDTO;

  constructor(
    private _campaignOverviewService: CampaignService
  ) {

  }

  getCampaign(id: number): void {
    this._campaignOverviewService.getCampaign(id).subscribe({
      next: (result): void => {
        this.campaignOverview = result;
      },
      error: (error): void => {
        console.log(error)
      },
    });
  }

}
