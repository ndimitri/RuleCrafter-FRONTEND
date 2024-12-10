import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkCurrentUser();
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']); // Redirect to login if not authenticated
    }
  }

  checkCurrentUser() {
    this.authService.currentUser$.subscribe((user) => {
      console.log('Current User:', user);
    });
  }
}
