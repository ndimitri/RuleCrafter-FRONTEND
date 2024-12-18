import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../features/auth/service/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {environment} from '../../../environments/environment';
import {UserForm} from '../../features/auth/forms/user.form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  profilePicture?: string;

  constructor(
    private _userService: UserService,
    private readonly _fb: FormBuilder
  ) {
    this.profileForm = this._fb.group({...UserForm});
  }

  ngOnInit(): void {
    this._userService.getUserProfile().subscribe({
      next: (user) => {
        this.profileForm.patchValue({
          id: user.id,
          username: user.username,
          email: user.email,
        });

        this.profilePicture = user.picture;
        console.log(this.profileForm);
      },
      error: (err) => console.error('Failed to fetch user profile:', err),
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  updateProfile(): void {
    console.log('updateProfile() called');
    if (this.profileForm.valid) {
      console.log('Valid')
      const formData = new FormData();
      const formJson = new Blob([JSON.stringify(this.profileForm.value)], {type: 'application/json'});
      formData.append('form', formJson);

      if (this.selectedFile) {
        console.log('jarrive au selected file')
        formData.append('image', this.selectedFile);
      }
      console.log('Jarrive avant le service')
      this._userService.updateProfile(formData).subscribe({
        next: (response) => {
          console.log('Profile updated successfully:', response);
        },
        error: (err) => {
          console.error('Profile update failed:', err);
        },
      });
    }
  }

  protected readonly environment = environment;
}
