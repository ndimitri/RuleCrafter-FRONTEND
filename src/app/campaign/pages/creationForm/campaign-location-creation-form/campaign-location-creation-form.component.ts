import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicsForm} from '../../../models/form/basics-form';
import {LocationForm} from '../../../models/form/location-form';

@Component({
  selector: 'app-campaign-location-creation-form',
  templateUrl: './campaign-location-creation-form.component.html',
  styleUrl: './campaign-location-creation-form.component.scss'
})
export class CampaignLocationCreationFormComponent {

  locationForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.locationForm = this._formBuilder.group({
      locationName: [null, [Validators.required, Validators.maxLength(123)]],
      locationDescription: [null, [Validators.required, Validators.maxLength(1000)]],
    })
  }
  submit(): void {

    this.locationForm.markAllAsTouched();

    if(!this.locationForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let location: LocationForm = this.locationForm.value;

    console.log(location);
  }


}
