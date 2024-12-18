import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, switchMap} from 'rxjs';
import {APIMonsterResult, APIMonstersResult} from '../features/monsters/forms/APIMonstersResult';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private readonly apiUrl = 'https://www.dnd5eapi.co/api';
  private readonly defaultImageUrl = 'assets/default-monster.png';

  constructor(private http: HttpClient) {}

  getMonsters(): Observable<APIMonsterResult[]> {
    return this.http.get<{ results: APIMonsterResult[] }>(`${this.apiUrl}/monsters`).pipe(
      map(response =>
        response.results.map(monster => ({
          ...monster,
          imageUrl: `https://www.dnd5eapi.co/api/images/monsters/${monster.index}.png`,
          defaultImageUrl: this.defaultImageUrl
        }))
      )
    );
  }

  // getMonsters2(): Observable<APIMonsterResult[]> {
  //   return this.http.get<{ results: APIMonsterResult[] }>(`${this.apiUrl}/monsters`).pipe(
  //     switchMap(response =>{
  //
  //       let truc: Observable<any>[] = []
  //
  //       for(let r of response.results){
  //         truc.push(http.get(r.url))
  //       }})
  //     );
  // }
}
