import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterViewComponent} from './pages/character-view/character-view.component';
import {CharacterRoutingModule} from './character-routing.module';
import { CharacterHomeComponent } from './pages/character-home/character-home.component';



@NgModule({
  declarations: [
    CharacterViewComponent,
    CharacterHomeComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
