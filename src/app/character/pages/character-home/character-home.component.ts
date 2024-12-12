import {Component,} from '@angular/core';
import {Character} from '../../models/character.model';
import {CharacterHomeDTO,} from '../../models/characterHomeDTO.model';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-character-home',
  templateUrl: './character-home.component.html',
  styleUrl: './character-home.component.scss'
})

export class CharacterHomeComponent {

characters!: CharacterHomeDTO[];

constructor(private _characterService: CharacterService,) {
  this.getCharacters();
}

getCharacters(): void {
  this._characterService.getCharacters().subscribe({
    next: (res: any)=> {
      this.characters = res;
      console.log(this.characters);
    },
    error: (err) => {
      console.log(err);
    }
  })
}


}
