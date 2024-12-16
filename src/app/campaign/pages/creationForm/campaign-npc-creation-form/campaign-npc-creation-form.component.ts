import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicsForm} from '../../../models/form/basics-form';
import {NpcForm} from '../../../models/form/npc-form';

@Component({
  selector: 'app-campaign-npc-creation-form',
  templateUrl: './campaign-npc-creation-form.component.html',
  styleUrl: './campaign-npc-creation-form.component.scss'
})
export class CampaignNpcCreationFormComponent {

  npcForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.npcForm = this._formBuilder.group({
      npcName: [null, [Validators.required, Validators.maxLength(123)]],
      npcDescription: [null, [Validators.required, Validators.maxLength(1000)]]
    })
  }

  submit(): void {

    this.npcForm.markAllAsTouched();

    if(!this.npcForm.valid) {
      console.log("Uncorrect form");
      return;
    }
    console.log("Valid");

    let npc: NpcForm = this.npcForm.value;

    console.log(npc);
  }

}
