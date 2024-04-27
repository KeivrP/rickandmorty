interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Character[];
    url: string;
    created: string;
  }

  interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Character[];
    url: string;
    created: string;
  }
  