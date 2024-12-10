import {Component, Input} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {Character} from '../shared/models/character.model';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.scss'
})
export class CharacterViewComponent {

  @Input({required:true})
  characterId!: number;

  character! : Character;



  constructor(private _characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacter(this.characterId);
  }

  getCharacter(id: number) : void {
    this._characterService.getCharacter(id).subscribe({
      next: (res: Character)=> {
        this.character = res;
        console.log(this.character);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
