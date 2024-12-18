import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../features/auth/service/auth.service';

interface Channel {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  visibleSidebar: boolean = true;
  burgerMenuOpen: boolean = false;
  isLoginPage: boolean = false;
  channels: Channel[] = [];
  nextChannelId: number = 1;

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

  addChannel() {
    const newChannel: Channel = {
      id: this.nextChannelId++,
      name: `channel-${this.nextChannelId}`,
      active: false
    };
    this.channels.push(newChannel);
  }
}
