import { SearchResponse } from '@algolia/client-search';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

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

export const adapter: EntityAdapter<NetflixTitle> = createEntityAdapter<
  NetflixTitle
>({
  selectId: (title: NetflixTitle) => title.show_id,
});

export const initialNetflexTitlesState: NetflixTitlesState = adapter.getInitialState(
  {
    // additional entity state properties
    loading: true,
    exhaustiveNbHits: false,
    hitsPerPage: 0,
    nbHits: 0,
    nbPages: 0,
    page: 0,
    params: '',
    processingTimeMS: 0,
    query: '',
  }
);
