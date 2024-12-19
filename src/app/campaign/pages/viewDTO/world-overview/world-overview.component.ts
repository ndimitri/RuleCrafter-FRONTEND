import { Component } from '@angular/core';
import {WorldOverviewDTO} from '../../../models/dtos/world-overview';
import {CampaignService} from '../../../service/campaign.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-world-overview',
  templateUrl: './world-overview.component.html',
  styleUrl: './world-overview.component.scss'
})
export class WorldOverviewComponent {

  worldOverview!: WorldOverviewDTO;

  constructor(
    private _worldOverviewService: CampaignService,
    private _activatedRoute: ActivatedRoute
  ) {
    const id: number = this._activatedRoute.snapshot.params['id'];
    this.getWorldOverview(id);
  }

  getWorldOverview(id: number): void {
    this._worldOverviewService.getWorldOverview(id).subscribe({
      next: (result): void => {
        this.worldOverview = result;
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }

}
