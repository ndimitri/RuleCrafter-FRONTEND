import { Component } from '@angular/core';
import {CampaignHomeDTO} from '../../shared/models/campaign-home-model';
import {CampaignHomeCardService} from './service/campaign-home-card.service';

@Component({
  selector: 'app-campaign-home',
  templateUrl: './campaign-home.component.html',
  styleUrl: './campaign-home.component.scss'
})
export class CampaignHomeComponent {

  campaignHomeCard!: CampaignHomeDTO[];

  constructor(
    private _campaignHomeCardService: CampaignHomeCardService
  ) {
    this.getCards();
  }

  getCards(): void {
    this._campaignHomeCardService.getCards().subscribe({
      next: (result): void => {
        this.campaignHomeCard = result;
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }

}
