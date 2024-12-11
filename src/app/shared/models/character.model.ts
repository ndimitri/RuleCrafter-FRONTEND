// Character.ts
export interface Character {
  name: string;
  hp: number;
  race: string;
  alignment: Alignment;
  backstory: string;
  description: Description;
  stats: Stat[];
  feats: Feat[];
  classes: CharacterClass[];
  savingThrows: SavingThrow[];
  proficiencies: Proficiency[];
  spells: Spell[];
  items: Item[];
  background: string;
}



// Enums.ts
export enum Alignment {
  LAWFUL_GOOD = "LAWFUL_GOOD",
  NEUTRAL_GOOD = "NEUTRAL_GOOD",
  CHAOTIC_GOOD = "CHAOTIC_GOOD",
  LAWFUL_NEUTRAL = "LAWFUL_NEUTRAL",
  TRUE_NEUTRAL = "TRUE_NEUTRAL",
  CHAOTIC_NEUTRAL = "CHAOTIC_NEUTRAL",
  LAWFUL_EVIL = "LAWFUL_EVIL",
  NEUTRAL_EVIL = "NEUTRAL_EVIL",
  CHAOTIC_EVIL = "CHAOTIC_EVIL",
}

export enum ItemRarity {
  COMMON = "COMMON",
  UNCOMMON = "UNCOMMON",
  RARE = "RARE",
  VERY_RARE = "VERY_RARE",
  LEGENDARY = "LEGENDARY",
  ARTIFACT = "ARTIFACT"
}

export enum ItemType {
  WEAPON = "WEAPON",
  ARMOR = "ARMOR",
  AMMUNITION = "AMMUNITION",
  POISON = "POISON",
  POTION = "POTION",
  TOOL = "TOOL",
  ADVENTURING_GEAR = "ADVENTURING_GEAR",
  GEMSTONE = "GEMSTONE",
  HOLY_SYMBOL = "HOLY_SYMBOL",
  ARCANE_FOCUS = "ARCANE_FOCUS",
  DRUIDIC_FOCUS = "DRUIDIC_FOCUS",
  MOUNT = "MOUNT",
  VEHICLE = "VEHICLE",
  EQUIPMENT_PACK = "EQUIPMENT_PACK",
}

export enum MagicSchool{
  ABJURATION = "ABJURATION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILLUSION = "ILLUSION",
  NECROMANCY = "NECROMANCY"
}

export enum SpellLevel{
  LEVEL_1 = "LEVEL_1",
  LEVEL_2 = "LEVEL_2",
  LEVEL_3 = "LEVEL_3",
  LEVEL_4 = "LEVEL_4",
  LEVEL_5 = "LEVEL_5",
  LEVEL_6 = "LEVEL_6",
  LEVEL_7 = "LEVEL_7",
  LEVEL_8 = "LEVEL_8",
  LEVEL_9 = "LEVEL_9",
  LEVEL_10 = "LEVEL_10",
}

// SavingThrow.ts
export interface SavingThrow{
  abilityName: string,
  value: number,

}

// Description.ts
export interface Description {
  age: string;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
}

// Stat.ts
export interface Stat {
  name: string;
  shortName: string;
  value: number;
}

// Feat.ts
export interface Feat {
  name: string;
  notes: string;
  rollableProps: RollableProp[];
}

// CharacterClass.ts
export interface CharacterClass {
  name: string;
  level: number;
}

// Proficiency.ts
export interface Proficiency {
  skillName: string,
  proficiencyLevel: number;
  governingSkill: string;
}

// Spell.ts
export interface Spell {
  name: string;
  level: SpellLevel;
  school: MagicSchool;
  castingTime: string;
  range: string;
  component: string;
  duration: string;
  description: string;
  rollableProps: RollableProp[];
}

// Item.ts
export interface Item {
  name: string;
  description: string;
  weight: string;
  rarity: ItemRarity;
  type: ItemType;
  price: Price;
  rollableProps: RollableProp[];
}

// Price.ts
export interface Price {
  amount: number;
  currency: string;
}

// RollableProp.ts
export interface RollableProp {
  name: string;
  magnitude: string;
  magnitudeType: string;
}
