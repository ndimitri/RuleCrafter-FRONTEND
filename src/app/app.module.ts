import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import {NavComponent} from './layout/nav/nav.component';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {jwtInterceptor} from './core/interceptors/jwt.interceptor';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { AboutComponent } from './pages/about/about.component';
import { CampaignHomeComponent } from './campaign/pages/viewDTO/campaign-home/campaign-home.component';
import { CharacterViewComponent } from './character/pages/character-view/character-view.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    MonstersComponent,
    AboutComponent,
    CampaignHomeComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,   // For animations (important for PrimeNG components like p-sidebar)
    SidebarModule,             // For the sidebar component
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    ),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
