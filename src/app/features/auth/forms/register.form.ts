import {Validators} from '@angular/forms';

export const RegisterForm = {
  username: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
  email: [null, [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(3)]],
  confirmPassword: ['', [Validators.required]]
} ;
