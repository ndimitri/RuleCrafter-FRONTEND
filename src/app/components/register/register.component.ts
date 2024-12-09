import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // Import the Router service
import { RegisterFormModel } from '../../features/auth/models/register.form.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] // Fix typo "styleUrl" to "styleUrls"
})
export class RegisterComponent {
  user: RegisterFormModel = { username: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {} // Inject Router

  register() {
    this.authService.register(this.user).subscribe(
      () => {
        console.log('Registration successful');
        this.router.navigate(['/auth/login']); // Redirect to the login page
      },
      error => console.error('Registration failed', error)
    );
  }
}
