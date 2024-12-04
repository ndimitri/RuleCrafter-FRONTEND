import {Component, Input} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {CharacterResult} from '../shared/models/character.model';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.scss'
})
export class CharacterViewComponent {

  characterId: number = 1;

  character! : CharacterResult;

  constructor(private _characterService: CharacterService) {
    this.getCharacter('http://localhost:8080/character/' + this.characterId);
  }

  getCharacter(url:string) : void {
    this._characterService.getCharacter(url).subscribe({
      next: (res: CharacterResult)=> {
        this.character = res;
        console.log(this.character);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
