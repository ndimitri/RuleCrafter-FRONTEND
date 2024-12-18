export interface APIMagicSchoolsResult{
  count : number,
  results : APIMagicSchoolResult[],
}

export interface APIMagicSchoolResult{
  index: string,
  name : string,
  url: string
}
