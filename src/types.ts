export interface CharacterInfo {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

export interface CharacterDetaledInfo extends CharacterInfo {
  species: string;
  type: string;
  episode: string[];
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export interface EpisodeInfo {
  name: string;
  air_date: string;
  episode: string;
}

export type SearchFilters = {
  name?: string;
  species?: string;
  status?: string;
  gender?: string;
  type?: string;
};

export interface ISearchContext {
  filters: SearchFilters;
  setFilters: (value: SearchFilters) => void;
}

export interface GetCharactersResponse {
  results: CharacterInfo[];
  info: {
    pages: number;
    count: number;
    next: string | null;
    prev: string | null;
  };
}
