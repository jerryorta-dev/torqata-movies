import { SearchResponse } from '@algolia/client-search';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { NetflixTitle } from './netflix.models';

export const loadNetflixTitles = createAction(
  '[NetflixTitle/API] Load NetflixTitles',
  props<{ netflixTitles: NetflixTitle[] }>()
);

export const addNetflixTitle = createAction(
  '[NetflixTitle/API] Add NetflixTitle',
  props<{ netflixTitle: NetflixTitle }>()
);

export const upsertNetflixTitle = createAction(
  '[NetflixTitles/API] Upsert NetflixTitle',
  props<{ netflixTitle: NetflixTitle }>()
);

export const addNetflixTitles = createAction(
  '[NetflixTitle/API] Add NetflixTitles',
  props<{ netflixTitles: NetflixTitle[] }>()
);

export const upsertNetflixTitles = createAction(
  '[NetflixTitles/API] Upsert NetflixTitles',
  props<{ netflixTitles: NetflixTitle[] }>()
);

export const updateNetflixTitle = createAction(
  '[NetflixTitle/API] Update NetflixTitle',
  props<{ netflixTitle: Update<NetflixTitle> }>()
);

export const updateNetflixTitles = createAction(
  '[NetflixTitles/API] Update NetflixTitles',
  props<{ netflixTitles: Update<NetflixTitle>[] }>()
);

export const deleteNetflixTitle = createAction(
  '[NetflixTitles/API] Delete NetflixTitles',
  props<{ id: string }>()
);

export const deleteNetflixTitles = createAction(
  '[NetflixTitles/API] Delete NetflixTitles',
  props<{ ids: string[] }>()
);

export const clearNetflixTitles = createAction(
  '[NetflixTitles/API] Clear NetflixTitles'
);

export const loadSearchResults = createAction(
  '[NetflixTitles/API] Load Search Results NetflixTitles',
  props<{ results: SearchResponse<NetflixTitle> }>()
);

export const queryNetflixTitles = createAction(
  '[NetflixTitles/API] Query NetflixTitles',
  props<{ query: string }>()
);
