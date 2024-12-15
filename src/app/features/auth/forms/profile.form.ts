import { Validators } from '@angular/forms';

export const ProfileForm = {
  username: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
  email: [null, [Validators.required, Validators.email]],
  picture: [null]
};
