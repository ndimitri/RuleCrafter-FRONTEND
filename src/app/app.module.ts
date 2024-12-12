import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Necessary for animations
import { SidebarModule } from 'primeng/sidebar';      // Sidebar module for the p-sidebar component
import { ButtonModule } from 'primeng/button';        // Button module for the pButton component
import { AppComponent } from './app.component';
import {NavComponent} from './layout/nav/nav.component';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {provideHttpClient} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
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
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
