import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../features/auth/service/auth.service';
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
        console.log(this.credentials);
        this.router.navigate(['/home']);}
      ,
      error => console.error('Login failed', error)
    );
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  submit() {
    this.authService.login(this.credentials).subscribe({
      next: datas => {
        console.log(datas);
        this.router.navigate(['/home']);
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
