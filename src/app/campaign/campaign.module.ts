import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignOverviewComponent } from './pages/viewDTO/campaign-overview/campaign-overview.component';
import { WorldOverviewComponent } from './pages/viewDTO/world-overview/world-overview.component';
import { MainMapOverviewComponent } from './pages/viewDTO/main-map-overview/main-map-overview.component';
import { CampaignBasicsCreationComponent } from './pages/creationForm/campaign-basics-creation-form/campaign-basics-creation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { CampaignRegionCreationComponent } from './pages/creationForm/campaign-region-creation-form/campaign-region-creation.component';
import { CampaignLocationCreationFormComponent } from './pages/creationForm/campaign-location-creation-form/campaign-location-creation-form.component';
import { CampaignFactionCreationFormComponent } from './pages/creationForm/campaign-faction-creation-form/campaign-faction-creation-form.component';
import { CampaignNpcCreationFormComponent } from './pages/creationForm/campaign-npc-creation-form/campaign-npc-creation-form.component';
import { CampaignMainQuestCreationFormComponent } from './pages/creationForm/campaign-main-quest-creation-form/campaign-main-quest-creation-form.component';
import { CampaignSideQuestCreationFormComponent } from './pages/creationForm/campaign-side-quest-creation-form/campaign-side-quest-creation-form.component';
import { CampaignScenarioCreationFormComponent } from './pages/creationForm/campaign-scenario-creation-form/campaign-scenario-creation-form.component';
import {RouterModule} from '@angular/router';
import { RacesOverviewComponent } from './pages/viewDTO/races-overview/races-overview.component';


@NgModule({
  declarations: [
    CampaignOverviewComponent,
    WorldOverviewComponent,
    MainMapOverviewComponent,
    CampaignBasicsCreationComponent,
    CampaignRegionCreationComponent,
    CampaignLocationCreationFormComponent,
    CampaignFactionCreationFormComponent,
    CampaignNpcCreationFormComponent,
    CampaignMainQuestCreationFormComponent,
    CampaignSideQuestCreationFormComponent,
    CampaignScenarioCreationFormComponent,
    RacesOverviewComponent,
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
  ]
})
export class CampaignModule { }
