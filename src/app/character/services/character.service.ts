import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../models/character.model';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient,) { }

  getCharacter(id : number) : Observable<Character>{
    return this.http.get<Character>(`${environment.API_URL}/character/${id}`);
  }



}
