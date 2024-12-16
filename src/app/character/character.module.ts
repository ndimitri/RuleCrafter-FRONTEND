import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterViewComponent} from './pages/character-view/character-view.component';
import {CharacterRoutingModule} from './character-routing.module';
import { CharacterHomeComponent } from './pages/character-home/character-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CharacterFormComponent } from './pages/character-form/character-form.component';



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
    ReactiveFormsModule
  ]
})
export class CharacterModule { }
