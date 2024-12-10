import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getData(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/data`);
  }

  postData(payload: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/data`, payload);
  }
}
