export interface CampaignCreationAssemblingDTO {
  id: number;
  campains: CampaignDTO[];
  factions: FactionDTO[];
  locations: LocationDTO[];
  mainQuest: MainQuestDTO[];
  sideQuest: SideQuestDTO[];
  npc: NpcDTO[];
  regions: RegionDTO[];
  scenarios: ScenarioDTO[];
}

export interface CampaignDTO {
  id: number;
  campaignName: string;
  minCapacity: number;
  maxCapacity: number;
  partyRecommendation: string;
  campaignSummary: string;
}

export interface FactionDTO {
  id: number;
  factionName: string;
  factionDescription: string;
  factionPicture: string;
}

export interface LocationDTO {
  id: number;
  locationName: string;
  locationDescription: string;
  locationPicture: string;
}

export interface MainQuestDTO {
  id: number;
  questName: string;
  questGoal: string;
  questDescription: string;
  questType: string;
  questTrigger: string;
  questReward: string;
}

export interface SideQuestDTO {
  id: number;
  sideQuestName: string;
  sideQuestGoal: string;
  sideQuestDescription: string;
  sideQuestType: string;
  sideQuestTrigger: string;
  sideQuestReward: string;
}

export interface NpcDTO {
  id: number;
  npcName: string;
  npcDescription: string;
}

export interface RegionDTO {
  id: number;
  regionName: string;
  regionDescription: string;
}

export interface ScenarioDTO {
  id: number;
  storyName: string;
  story: string;
}
