import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}

/* @Injectable({ providedIn: 'root' }): Marks the service as injectable and available throughout the app.
HttpClient: Service for making HTTP requests.
register(user: any): Sends a POST request to register a new user.
login(credentials: any): Sends a POST request to log in a user.


 */
