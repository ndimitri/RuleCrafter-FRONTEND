import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credentials: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(() => {
      this.router.navigate(['/home']);
    }, error => {
      console.error('Login error: ', error);
    });
  }

}

/*
login(): Calls the AuthService to log in a user.
[(ngModel)]="credentials.username", [(ngModel)]="credentials.password": Two-way data binding for form fields.
 */
