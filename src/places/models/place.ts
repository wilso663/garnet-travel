export interface Place {
  id: string;
  imageURL: string;
  title: string;
  description: string;
  address: string;
  creatorId: string;
  location: Location;
  
}

export interface Location {
  lat: number;
  lng: number;
}