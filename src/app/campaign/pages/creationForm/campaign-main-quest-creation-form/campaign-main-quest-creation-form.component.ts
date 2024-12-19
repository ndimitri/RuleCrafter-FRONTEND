import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicsForm} from '../../../models/form/basics-form';
import {MainQuestForm} from '../../../models/form/main-quest-form';

@Component({
  selector: 'app-campaign-main-quest-creation-form',
  templateUrl: './campaign-main-quest-creation-form.component.html',
  styleUrl: './campaign-main-quest-creation-form.component.scss'
})
export class CampaignMainQuestCreationFormComponent {

  mainQuestForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.mainQuestForm = this._formBuilder.group({
      mainQuestName: [null, [Validators.required, Validators.maxLength(123)]],
      mainQuestGoal: [null, [Validators.required, Validators.maxLength(500)]],
      mainQuestDescription: [null, [Validators.required, Validators.maxLength(1000)]],
      mainQuestType: [null, [Validators.required, Validators.maxLength(50)]],
      mainQuestTrigger: [null, [Validators.required, Validators.maxLength(80)]],
      mainQuestReward: [null, [Validators.required, Validators.maxLength(80)]]
    })
  }

  submit(): void {

    this.mainQuestForm.markAllAsTouched();

    if(!this.mainQuestForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let mainQuest: MainQuestForm = this.mainQuestForm.value;

    console.log(mainQuest);
  }

}
