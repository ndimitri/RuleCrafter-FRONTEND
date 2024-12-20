import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {UserTokenDtoModel} from '../models/user.token.dto.model';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {LoginFormModel} from '../models/login.form.model';

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

  register(form: FormData): Observable<UserTokenDtoModel> {
    return this._http.post<UserTokenDtoModel>(environment.API_URL + "/auth/register", form);
  }

  login(user: LoginFormModel) {
    return this._http.post<UserTokenDtoModel>(`${environment.API_URL}/auth/login`, user).pipe(
      tap((user) => {
        this._currentUser$.next(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      })
    );
  }

  logout(){
    this._currentUser$.next(undefined);
    localStorage.removeItem("currentUser");
    this._router.navigate(["/auth/login"]);
  }

  updateProfile(form: FormData): Observable<UserTokenDtoModel> {
    return this._http.put<UserTokenDtoModel>(environment.API_URL + "/auth/profile", form);
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser'); // Check if token exists
  }

  get currentUser(): UserTokenDtoModel | undefined {
    return this._currentUser$.value;
  }

  get currentUser$(): Observable<UserTokenDtoModel|undefined> {
    return this._currentUser$.asObservable();
  }
}
