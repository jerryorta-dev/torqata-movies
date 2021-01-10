import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const netflixTitlesesFeatureKey = 'netflixTitles';

export interface NetflixTitles {
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

export interface NetflixTitlesState extends EntityState<NetflixTitles> {
  // additional entities state properties
  loading: boolean;
}

export const adapter: EntityAdapter<NetflixTitles> = createEntityAdapter<
  NetflixTitles
>();

export const initialNetflexTitlesState: NetflixTitlesState = adapter.getInitialState(
  {
    // additional entity state properties
    loading: true,
  }
);
