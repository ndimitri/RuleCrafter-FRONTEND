import {CharacterClass, Stat} from './character.model';

export interface CharacterHomeDTO {
  id: number,
  name : string,
  classes: CharacterClass[],
  backstory : string,
  stats: Stat[],
}


