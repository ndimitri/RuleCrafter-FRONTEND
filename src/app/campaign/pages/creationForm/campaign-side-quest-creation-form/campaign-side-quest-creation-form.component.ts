import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainQuestForm} from '../../../models/form/main-quest-form';

@Component({
  selector: 'app-campaign-side-quest-creation-form',
  templateUrl: './campaign-side-quest-creation-form.component.html',
  styleUrl: './campaign-side-quest-creation-form.component.scss'
})
export class CampaignSideQuestCreationFormComponent {

  sideQuestForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.sideQuestForm = this._formBuilder.group({
      sideQuestName: [null, [Validators.required, Validators.maxLength(123)]],
      sideQuestGoal: [null, [Validators.required, Validators.maxLength(500)]],
      sideQuestDescription: [null, [Validators.required, Validators.maxLength(1000)]],
      sideQuestType: [null, [Validators.required, Validators.maxLength(50)]],
      sideQuestTrigger: [null, [Validators.required, Validators.maxLength(80)]],
      sideQuestReward: [null, [Validators.required, Validators.maxLength(80)]]
    })
  }

  submit(): void {

    this.sideQuestForm.markAllAsTouched();

    if(!this.sideQuestForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let sideQuest: MainQuestForm = this.sideQuestForm.value;

    console.log(sideQuest);
  }

}
