export interface CharacterFullResult {
  name: string;
  classType: string,
  race : string,
  alignement : string,
  level : number,
  hitPointsMax : number,
  hitPointsCurrent : number,
  // languages : string[],
  // skills: Skill[]
  // attacks: Attack[],
  // inventory : string[],
  // features : string[],
  abilities : {
    str: number,
    wis : number,
    dex : number,
    con : number,
    cha : number,
    intel : number,
  },
}

export interface Skill{
  name: string,
  score :number,
}

export interface Attack{
  name: string,
  value: number,
}
export interface Ability {
  name: string,
  value: number,
}
