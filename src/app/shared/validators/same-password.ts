import {AbstractControl, ValidationErrors} from '@angular/forms';

export const samePassword = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { samePassword: true };
  }
  return null;
};
