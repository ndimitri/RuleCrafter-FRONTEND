import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterViewComponent} from './character-view/character-view.component';


const routes: Routes = [
  {path: 'character', component: CharacterViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
