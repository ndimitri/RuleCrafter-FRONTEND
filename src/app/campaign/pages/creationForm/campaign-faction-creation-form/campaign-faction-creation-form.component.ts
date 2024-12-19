import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicsForm} from '../../../models/form/basics-form';
import {FactionForm} from '../../../models/form/faction-form';

@Component({
  selector: 'app-campaign-faction-creation-form',
  templateUrl: './campaign-faction-creation-form.component.html',
  styleUrl: './campaign-faction-creation-form.component.scss'
})
export class CampaignFactionCreationFormComponent {

  factionForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.factionForm = this._formBuilder.group({
      factionName: [null, [Validators.required, Validators.maxLength(123)]],
      factionDescription: [null, [Validators.required, Validators.maxLength(1000)]],
    })
  }

  submit(): void {

    this.factionForm.markAllAsTouched();

    if(!this.factionForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let faction: FactionForm = this.factionForm.value;

    console.log(faction);
  }

}
