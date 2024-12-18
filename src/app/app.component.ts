import { Component } from '@angular/core';
import {AuthService} from './features/auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RuleCrafter-FRONTEND';
  isSidebarVisible: boolean | undefined;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe(user => {
      this.isSidebarVisible = !!user; // Sidebar is visible if a user is logged in
    });
  }
}
