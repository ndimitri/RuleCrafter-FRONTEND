import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  visibleSidebar: boolean = true;  // Sidebar always visible
  burgerMenuOpen: boolean = false; // Tracks burger menu state

  // Toggles the burger menu
  toggleBurgerMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }
}
