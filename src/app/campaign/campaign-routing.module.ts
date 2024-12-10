import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampaignHomeComponent} from './campaign-home/campaign-home.component';

const routes: Routes = [
  {path: 'campaign-home', component: CampaignHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
