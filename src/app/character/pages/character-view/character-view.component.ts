import {Component, Input} from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../models/character.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.scss'
})
export class CharacterViewComponent {

  // @Input({required:true})
  // characterId!: number;

  character! : Character;


  constructor(private _characterService: CharacterService, private _activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    let id = + this._activatedRoute.snapshot.params['id'];
    this.getCharacter(id);
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

  // Fonction qui retourne la classe en minuscule avec les espaces remplacés par des tirets
  get alignmentClass() {
    return this.character.alignment.toLowerCase().replace('_', '-');  // 'LAWFUL_GOOD' devient 'lawful-good'
  }

}
