import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Necessary for animations
import { SidebarModule } from 'primeng/sidebar';      // Sidebar module for the p-sidebar component
import { ButtonModule } from 'primeng/button';        // Button module for the pButton component
import { AppComponent } from './app.component';
import {NavComponent} from './layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   // For animations (important for PrimeNG components like p-sidebar)
    SidebarModule,             // For the sidebar component
    ButtonModule               // For the button component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
