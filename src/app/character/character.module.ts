import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterViewComponent} from './pages/character-view/character-view.component';
import {CharacterRoutingModule} from './character-routing.module';



@NgModule({
  declarations: [
    CharacterViewComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
