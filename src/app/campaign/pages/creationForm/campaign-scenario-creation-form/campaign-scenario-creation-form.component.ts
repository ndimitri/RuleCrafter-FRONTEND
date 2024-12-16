import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicsForm} from '../../../models/form/basics-form';
import {ScenarioForm} from '../../../models/form/scenario-form';

@Component({
  selector: 'app-campaign-scenario-creation-form',
  templateUrl: './campaign-scenario-creation-form.component.html',
  styleUrl: './campaign-scenario-creation-form.component.scss'
})
export class CampaignScenarioCreationFormComponent {

  scenarioForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.scenarioForm = this._formBuilder.group({
      story: [null, [Validators.required, Validators.maxLength(100000)]],
    })
  }

  submit(): void {

    this.scenarioForm.markAllAsTouched();

    if(!this.scenarioForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let scenario: ScenarioForm = this.scenarioForm.value;

    console.log(scenario);
  }

}
