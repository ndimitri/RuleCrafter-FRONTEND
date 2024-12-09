import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  visibleSidebar: boolean = true; // Sidebar always visible
  burgerMenuOpen: boolean = false; // Tracks burger menu state
  isLoginPage: boolean = false;

  constructor(
    public authService: AuthService, // Inject AuthService
    private router: Router // Inject Router for navigation
  ) {}

  // Toggles the burger menu
  toggleBurgerMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }

  // Logs the user out
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']); // Redirect to login page
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.isLoginPage = currentUrl.includes('auth/login') || currentUrl.includes('auth/register');
    });
  }
}
