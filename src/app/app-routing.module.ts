import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthService} from './features/auth/service/auth.service';
import {ProfileComponent} from './pages/profile/profile.component';
import {MonstersComponent} from './pages/monsters/monsters.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'bestiary', component: MonstersComponent},
  { path: 'about', component: AboutComponent},
  { path: 'campaign', loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
