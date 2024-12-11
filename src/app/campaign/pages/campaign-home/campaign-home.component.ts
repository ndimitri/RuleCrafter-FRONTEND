import { Component } from '@angular/core';
import {CampaignHomeDTO} from '../../models/campaign-home-model';
import {CampaignService} from '../../service/campaign.service';

@Component({
  selector: 'app-campaign-home',
  templateUrl: './campaign-home.component.html',
  styleUrl: './campaign-home.component.scss'
})
export class CampaignHomeComponent {

  campaignHomeCard!: CampaignHomeDTO[];

  constructor(
    private _campaignHomeCardService: CampaignService
  ) {
    this.getCampaigns();
  }

  getCampaigns(): void {
    this._campaignHomeCardService.getCampaigns().subscribe({
      next: (result): void => {
        this.campaignHomeCard = result;
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }

  // goToCampaignOverview(): void {
  //   if (this.campaignHomeCard.)
  // }

}
