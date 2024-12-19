import {
  Alignment,
  CharacterClass,
  Description,
  Feat, Item,
  Proficiency,
  SavingThrow, Spell,
  Stat
} from '../character.model';

export interface CharacterForm {
  name?: string;
  hp?: number;
  race?: string;
  alignment?: Alignment;
  backstory?: string;
  description?: Description;
  stats?: StatForm;
  feats?: Feat[];
  classes?: CharacterClass[];
  savingThrows?: SavingThrow[];
  proficiencies?: Proficiency[];
  spells?: Spell[];
  items?: Item[];
  background?: string;
}

export interface StatForm{
  int : number,
  wis: number,
  dex : number,
  cha : number,
  str : number,
  con : number
}
