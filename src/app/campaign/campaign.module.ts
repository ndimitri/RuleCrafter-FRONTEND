import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignOverviewComponent } from './pages/campaign-overview/campaign-overview.component';
import { WorldOverviewComponent } from './pages/world-overview/world-overview.component';
import { MainMapOverviewComponent } from './pages/main-map-overview/main-map-overview.component';
import { CampaignBasicsCreationComponent } from './pages/campaign-basics-creation/campaign-basics-creation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CampaignOverviewComponent,
    WorldOverviewComponent,
    MainMapOverviewComponent,
    CampaignBasicsCreationComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CampaignModule { }
