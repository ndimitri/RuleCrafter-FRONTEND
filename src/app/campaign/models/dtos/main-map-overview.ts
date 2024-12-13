export interface MainMapOverviewDTO {
  id: number;
  campaignName: string;
  location: MainMapLocations[];
}

export interface MainMapLocations {
  id: number;
  locationPicture: string;
  locationDescription: string;
}
