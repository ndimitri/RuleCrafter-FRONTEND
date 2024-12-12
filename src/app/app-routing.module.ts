import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterViewComponent} from './character/pages/character-view/character-view.component';


const routes: Routes = [
  // {path: 'character', component: CharacterViewComponent},
  {path: "character", loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
