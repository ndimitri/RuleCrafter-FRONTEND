import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterViewComponent} from './pages/character-view/character-view.component';


const routes: Routes = [
  {path: ':id', component: CharacterViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
