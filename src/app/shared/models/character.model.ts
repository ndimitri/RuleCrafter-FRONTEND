export interface CharacterResult {
  id: number;
  name : string;
  alignment: string;
  abilities: Ability[];
  hp : number;
  classType : {
    name : string;
  }

}


export interface Ability {
  name : string;
  score : number;
}
