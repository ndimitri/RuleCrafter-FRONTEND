import {APIClassResult} from './APIClassesResult';

export interface APIRacesResult{
  count : number,
  results : APIRaceResult[],
}

export interface APIRaceResult{
  index: string,
  name : string,
  url: string
}
