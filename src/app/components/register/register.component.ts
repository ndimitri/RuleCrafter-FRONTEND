import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {RegisterFormModel} from '../../features/auth/models/register.form.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterForm} from '../../features/auth/forms/register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private _authService: AuthService, private router: Router, private readonly _fb: FormBuilder) {
    this.registerForm = this._fb.group({...RegisterForm});
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  register() {

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      console.log('Form invalid', this.registerForm.errors);
      return;
    }

    let formData: FormData = new FormData();

    formData.append('form',new Blob([JSON.stringify(this.registerForm.value)], {type: 'application/json'}));
    if (this.selectedFile) {
    formData.append('image', this.selectedFile);
    }

    this._authService.register(formData).subscribe({

        next: () => {
          console.log('Registration successful');
          this.router.navigate(['/auth/login']);
        },
        error: (error) => console.error('Registration failed', error)
      }
    );
  }
}
