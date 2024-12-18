import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CampaignCreationAssemblingForm} from '../../../models/form/campaign-creation-assembling-form';
import {CampaignService} from '../../../service/campaign.service';
import {BasicsForm} from '../../../models/form/basics-form';
import {CampaignCreationAssemblingDTO} from '../../../models/dtos/campaign-creation-assembling-dto';

@Component({
  selector: 'app-campaign-creation-assembling',
  templateUrl: './campaign-creation-assembling.component.html',
  styleUrl: './campaign-creation-assembling.component.scss'
})
export class CampaignCreationAssemblingComponent {

  containerForm: FormGroup;

  campaignAssemblingForm!: CampaignCreationAssemblingForm;
  campaignAssemblingDTO!: CampaignCreationAssemblingDTO;

  constructor(
    private _campaignAssembling: CampaignService,
    private readonly _formBuilder: FormBuilder,
  ) {
    this.containerForm = this._formBuilder.group({
      campaign: [null],
      faction: [null],
      location: [null],
      region: [null],
      scenario: [null],
      npc: [null],
      mainQuest: [null],
      sideQuest: [null]
    });
    this.getInfos();
  }

  getInfos(): void {
    this._campaignAssembling.getCreationAssembling().subscribe({
      next: (result): void => {
        this.campaignAssemblingDTO = result;
      },
      error: (error): void => {
        console.log(error);
      },
    });
  }

  submit(): void {

    this.containerForm.markAllAsTouched();

    if(!this.containerForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let container: CampaignCreationAssemblingForm = this.containerForm.value;

    console.log(container);
  }

}
