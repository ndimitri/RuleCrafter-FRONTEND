import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterViewComponent} from './pages/character-view/character-view.component';
import {CharacterHomeComponent} from './pages/character-home/character-home.component';
import {CharacterFormComponent} from './pages/character-form/character-form.component';


const routes: Routes = [
  {path: '', component: CharacterHomeComponent},
  {path: 'new', component: CharacterFormComponent},
  {path: ':id', component: CharacterViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
