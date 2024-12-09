import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterResult} from '../shared/models/character.model';
import {CharacterFullResult} from '../shared/models/characterFull.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient,) { }

  // getCharacter(url : string) : Observable<CharacterResult>{
  //   return this.http.get<CharacterResult>(url);
  // }

  getCharacter(url : string) : Observable<CharacterFullResult>{
    return this.http.get<CharacterFullResult>(url);
  }


}
