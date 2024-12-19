import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicsForm} from '../../../models/form/basics-form';

@Component({
  selector: 'app-campaign-basics-creation',
  templateUrl: './campaign-basics-creation.component.html',
  styleUrl: './campaign-basics-creation.component.scss'
})
export class CampaignBasicsCreationComponent {

  basicsForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.basicsForm = this._formBuilder.group({
      campaignName: [null, [Validators.required, Validators.maxLength(100)]],
      campaignSummary: [null, [Validators.required, Validators.maxLength(1000)]],
      minCapacity: [null, [Validators.required, Validators.min(0)]],
      maxCapacity: [null, [Validators.required, Validators.min(1)]],
      partyRecommendation: [null, [Validators.required, Validators.maxLength(500)]],
    })
  }

  submit(): void {

    this.basicsForm.markAllAsTouched();

    if(!this.basicsForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let basics: BasicsForm = this.basicsForm.value;

    console.log(basics);
  }

}
