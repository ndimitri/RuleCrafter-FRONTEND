import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampaignHomeComponent} from './pages/viewDTO/campaign-home/campaign-home.component';
import {CampaignOverviewComponent} from './pages/viewDTO/campaign-overview/campaign-overview.component';
import {WorldOverviewComponent} from './pages/viewDTO/world-overview/world-overview.component';
import {CampaignBasicsCreationComponent} from './pages/creationForm/campaign-basics-creation-form/campaign-basics-creation.component';
import {CampaignRegionCreationComponent} from './pages/creationForm/campaign-region-creation-form/campaign-region-creation.component';
import {
  CampaignLocationCreationFormComponent
} from './pages/creationForm/campaign-location-creation-form/campaign-location-creation-form.component';
import {
  CampaignFactionCreationFormComponent
} from './pages/creationForm/campaign-faction-creation-form/campaign-faction-creation-form.component';
import {
  CampaignMainQuestCreationFormComponent
} from './pages/creationForm/campaign-main-quest-creation-form/campaign-main-quest-creation-form.component';
import {
  CampaignNpcCreationFormComponent
} from './pages/creationForm/campaign-npc-creation-form/campaign-npc-creation-form.component';
import {
  CampaignScenarioCreationFormComponent
} from './pages/creationForm/campaign-scenario-creation-form/campaign-scenario-creation-form.component';
import {
  CampaignSideQuestCreationFormComponent
} from './pages/creationForm/campaign-side-quest-creation-form/campaign-side-quest-creation-form.component';
import {
  CampaignCreationAssemblingComponent
} from './pages/creationForm/campaign-creation-assembling/campaign-creation-assembling.component';

const routes: Routes = [
  {path: '', component: CampaignHomeComponent},
  {path: ':id', component: CampaignOverviewComponent},
  {path: ':id/worldOverview', component: WorldOverviewComponent},
  {path: 'campaignCreation/basicsInfo', component: CampaignBasicsCreationComponent},
  {path: 'campaignCreation/region', component: CampaignRegionCreationComponent},
  {path: 'campaignCreation/location', component: CampaignLocationCreationFormComponent},
  {path: 'campaignCreation/faction', component: CampaignFactionCreationFormComponent},
  {path: 'campaignCreation/mainQuest', component: CampaignMainQuestCreationFormComponent},
  {path: 'campaignCreation/npc', component: CampaignNpcCreationFormComponent},
  {path: 'campaignCreation/scenario', component: CampaignScenarioCreationFormComponent},
  {path: 'campaignCreation/sideQuest', component: CampaignSideQuestCreationFormComponent},
  {path: 'campaignCreation/campaignContainer', component: CampaignCreationAssemblingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
