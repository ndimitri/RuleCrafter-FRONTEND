import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './components/form-error/form-error.component';
import {FormsModule} from '@angular/forms';
import { CampaignCreationNavBarComponent } from './navBar/campaignCreation/campaign-creation-nav-bar/campaign-creation-nav-bar.component';
import { WorldBuildingCreationNavBarComponent } from './navBar/campaignCreation/world-building-creation-nav-bar/world-building-creation-nav-bar.component';
import {RouterLink} from '@angular/router';



@NgModule({
    declarations: [
        FormErrorComponent,
        CampaignCreationNavBarComponent,
        WorldBuildingCreationNavBarComponent,
    ],
    exports: [
        FormErrorComponent,
        FormsModule,
        CampaignCreationNavBarComponent,
        WorldBuildingCreationNavBarComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ]
})
export class SharedModule { }
