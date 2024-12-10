import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {UserTokenDtoModel} from '../features/auth/models/user.token.dto.model';
import {Router} from '@angular/router';
import {RegisterFormModel} from '../features/auth/models/register.form.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser$: BehaviorSubject<UserTokenDtoModel|undefined>;

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router
  ) {
    let jsonUser = localStorage.getItem('currentUser');
    if(jsonUser){
      this._currentUser$ = new BehaviorSubject<UserTokenDtoModel|undefined>(JSON.parse(jsonUser));
    }
    else{
      this._currentUser$ = new BehaviorSubject<UserTokenDtoModel|undefined>(undefined);
    }
  }

  register(form: RegisterFormModel): Observable<UserTokenDtoModel> {
    return this._http.post<UserTokenDtoModel>(environment.apiUrl + "/auth/register", form);
  }

  login(user: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}/auth/login`, user).pipe(
      tap((response: any) => {
        this._currentUser$.next(response);
        localStorage.setItem('token', response.token); // Store token
      })
    );
  }

  logout(){
    this._currentUser$.next(undefined);
    localStorage.removeItem("currentUser");
    this._router.navigate(["/auth/login"]);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if token exists
  }

  get currentUser(): UserTokenDtoModel | undefined {
    return this._currentUser$.value;
  }

  get currentUser$(): Observable<UserTokenDtoModel|undefined> {
    return this._currentUser$.asObservable();
  }
}