interface LocationDetail {
  location: string;
  lat: number;
  lng: number;
}

interface Organizer {
  role: string;
  userId: string;
  name: string;
}

interface Images {
  landscape: string;
  portrait: string;
}

interface Timing {
  start: string;
  end: string;
  duration: string;
}

export interface EventData {
  timing: Timing;
  locationDetail: LocationDetail;
  organizer: Organizer;
  images: Images;
  title: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  tags: string[];
  uniqueId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
