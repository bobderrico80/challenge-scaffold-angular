export interface Location {
  city: string;
  state: string;
}

export interface Chorus {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
  location: Location;
}

export interface ChorusApiResponse {
  choruses: Chorus[];
}

export type ChorusApiRequest = Omit<Chorus, 'id'>;
