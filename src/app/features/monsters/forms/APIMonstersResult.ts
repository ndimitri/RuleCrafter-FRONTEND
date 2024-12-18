export interface APIMonstersResult{
  count : number,
  results : APIMonsterResult[],
}

export interface APIMonsterResult{
  index: string,
  name: string,
  url: string,
  imageUrl?: string,
  defaultImageUrl?: string,
}
