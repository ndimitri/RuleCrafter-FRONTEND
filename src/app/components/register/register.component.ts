import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration error: ', error);
    });
  }

}

/*
register(): Calls the AuthService to register a new user.
[(ngModel)]="user.username", [(ngModel)]="user.email", [(ngModel)]="user.password": Two-way data binding for form fields.
 */
