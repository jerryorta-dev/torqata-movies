import { SearchResponse } from '@algolia/client-search';
import { EntityState } from '@ngrx/entity';

export const netflixTitlesesFeatureKey = 'netflixTitles';

export interface NetflixTitle {
  show_id: number;
  type: string;
  title: string;
  director: string;
  cast: string;
  country: string;
  date_added: string;
  release_year: number;
  rating: string;
  duration: number;
  listed_in: string;
  description: string;
}

export interface NetflixTitlesState
  extends Partial<SearchResponse<NetflixTitle>>,
    EntityState<NetflixTitle> {
  // additional entities state properties
  loading: boolean;
}
