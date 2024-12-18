import {BasicsForm} from './basics-form';
import {FactionForm} from './faction-form';
import {LocationForm} from './location-form';
import {RegionForm} from './region-form';
import {ScenarioForm} from './scenario-form';
import {NpcForm} from './npc-form';
import {MainQuestForm} from './main-quest-form';
import {SideQuestForm} from './side-quest-form';

export interface CampaignCreationAssemblingForm {
  campaign: BasicsForm[];
  faction: FactionForm[];
  location: LocationForm[];
  region: RegionForm[];
  scenario: ScenarioForm[];
  npc: NpcForm[];
  mainQuest: MainQuestForm[];
  sideQuest: SideQuestForm[];
}
