import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampaignHomeComponent} from './pages/campaign-home/campaign-home.component';
import {CampaignOverviewComponent} from './pages/campaign-overview/campaign-overview.component';
import {WorldOverviewComponent} from './pages/world-overview/world-overview.component';
import {CampaignBasicsCreationComponent} from './pages/campaign-basics-creation/campaign-basics-creation.component';

const routes: Routes = [
  {path: '', component: CampaignHomeComponent},
  {path: ':id', component: CampaignOverviewComponent},
  {path: ':id/worldOverview', component: WorldOverviewComponent},
  {path: '/campaignCreation/basics', component: CampaignBasicsCreationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
