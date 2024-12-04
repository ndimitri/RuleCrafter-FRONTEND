import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterResult} from '../shared/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient,) { }

  getCharacter(url : string) : Observable<CharacterResult>{
    return this.http.get<CharacterResult>(url);
  }


}
