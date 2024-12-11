import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignOverviewComponent } from './pages/campaign-overview/campaign-overview.component';
import { WorldOverviewComponent } from './pages/world-overview/world-overview.component';


@NgModule({
  declarations: [
    CampaignOverviewComponent,
    WorldOverviewComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
