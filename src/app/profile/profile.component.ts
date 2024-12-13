import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterForm} from '../features/auth/forms/register.form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  selectedFile: File | null = null;


  constructor(
    private _authService: AuthService,
    private readonly _fb: FormBuilder
  ) {
    this.profileForm = this._fb.group({...RegisterForm});
  }


  ngOnInit(): void {
    const storedUser = this._authService.currentUser;
    this.profileForm.get('username')?.setValue(storedUser?.user.username);
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      const formData = new FormData();
      formData.append('form', this.profileForm.value);
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      this._authService.updateProfile(formData).subscribe({
        next: (response) => {
          console.log('Profile updated successfully:', response);
        },
        error: (err) => {
          console.error('Profile update failed:', err);
        },
      });
    }
  }
}

