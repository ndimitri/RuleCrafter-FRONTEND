import {Component, Input} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {CharacterResult} from '../shared/models/character.model';
import {CharacterFullResult} from '../shared/models/characterFull.model';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.scss'
})
export class CharacterViewComponent {

  @Input({required:true})
  characterId!: number;

  character! : CharacterFullResult;

  // abilities! : {
  //   str: number,
  //   wis : number,
  //   dex : number,
  //   con : number,
  //   cha : number,
  //   int : number,
  // }


  constructor(private _characterService: CharacterService) {
    // this.getCharacter('http://localhost:8080/character/' + this.characterId);
  }

  ngOnInit(): void {
    this.getCharacter(`http://localhost:8080/character/${this.characterId}`);
    // this.abilities = {
    //   str: this.character.abilities.str,
    //   wis: this.character.abilities.wis,
    //   dex: this.character.abilities.dex,
    //   con: this.character.abilities.con,
    //   cha: this.character.abilities.cha,
    //   int : this.character.abilities.intel ,
    // }
  }

  getCharacter(url:string) : void {
    this._characterService.getCharacter(url).subscribe({
      next: (res: CharacterFullResult)=> {
        this.character = res;
        console.log(this.character);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
