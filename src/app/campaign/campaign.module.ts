import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignOverviewComponent } from './pages/campaign-overview/campaign-overview.component';


@NgModule({
  declarations: [
    CampaignOverviewComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
