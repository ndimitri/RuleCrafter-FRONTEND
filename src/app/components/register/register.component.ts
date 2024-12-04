import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {RegisterFormModel} from '../../features/auth/models/register.form.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: RegisterFormModel = { username: '', email: '', password: '' };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe(
      () => console.log('Registration successful'),
      error => console.error('Registration failed', error)
    );
  }
}
