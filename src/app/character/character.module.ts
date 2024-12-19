import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterViewComponent} from './pages/character-view/character-view.component';
import {CharacterRoutingModule} from './character-routing.module';
import { CharacterHomeComponent } from './pages/character-home/character-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CharacterFormComponent } from './pages/character-form/character-form.component';
import { MatButtonModule} from '@angular/material/button';
import {

  MatStepperModule
} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    CharacterViewComponent,
    CharacterHomeComponent,
    CharacterFormComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,

  ]
})
export class CharacterModule { }
