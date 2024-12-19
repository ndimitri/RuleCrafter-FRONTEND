import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDtoModel} from '../features/auth/models/user.dto.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getUserProfile(): Observable<UserDtoModel> {
    return this._http.get<UserDtoModel>(`${environment.API_URL}/auth/profile`);
  }

  updateProfile(form: FormData): Observable<UserDtoModel> {
    return this._http.put<UserDtoModel>(`${environment.API_URL}/auth/profile`, form);
  }
}
