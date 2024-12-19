export interface APIStatsResult{
  count : number,
  results: APIStatResult[],
}

export interface APIStatResult{
  index: string,
  name : string,
  url: string,
}
