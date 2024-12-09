import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {LoginFormModel} from '../../features/auth/models/login.form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credentials: LoginFormModel = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      () => {console.log('Login successful');
        this.router.navigate(['/home']);}
      ,
      error => console.error('Login failed', error)
    );
  }
}
