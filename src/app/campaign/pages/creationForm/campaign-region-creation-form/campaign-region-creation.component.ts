import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicsForm} from '../../../models/form/basics-form';
import {RegionForm} from '../../../models/form/region-form';

@Component({
  selector: 'app-campaign-region-creation',
  templateUrl: './campaign-region-creation.component.html',
  styleUrl: './campaign-region-creation.component.scss'
})
export class CampaignRegionCreationComponent {

  regionForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.regionForm = this._formBuilder.group({
      regionName: [null, [Validators.required, Validators.maxLength(123)]],
      regionDescription: [null, [Validators.required, Validators.maxLength(1000)]],
      // regionPicture: [null, [Validators.required]]
    })
  }

  submit(): void {

    this.regionForm.markAllAsTouched();

    if(!this.regionForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let region: RegionForm = this.regionForm.value;

    console.log(region);
  }

}
