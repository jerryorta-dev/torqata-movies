import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { NetflixTitles } from '@tor/shared/models';

export const loadNetflixTitless = createAction(
  '[NetflixTitles/API] Load NetflixTitless',
  props<{ netflixTitless: NetflixTitles[] }>()
);

export const addNetflixTitles = createAction(
  '[NetflixTitles/API] Add NetflixTitles',
  props<{ netflixTitles: NetflixTitles }>()
);

export const upsertNetflixTitles = createAction(
  '[NetflixTitles/API] Upsert NetflixTitles',
  props<{ netflixTitles: NetflixTitles }>()
);

export const addNetflixTitless = createAction(
  '[NetflixTitles/API] Add NetflixTitless',
  props<{ netflixTitless: NetflixTitles[] }>()
);

export const upsertNetflixTitless = createAction(
  '[NetflixTitles/API] Upsert NetflixTitless',
  props<{ netflixTitless: NetflixTitles[] }>()
);

export const updateNetflixTitles = createAction(
  '[NetflixTitles/API] Update NetflixTitles',
  props<{ netflixTitles: Update<NetflixTitles> }>()
);

export const updateNetflixTitless = createAction(
  '[NetflixTitles/API] Update NetflixTitless',
  props<{ netflixTitless: Update<NetflixTitles>[] }>()
);

export const deleteNetflixTitles = createAction(
  '[NetflixTitles/API] Delete NetflixTitles',
  props<{ id: string }>()
);

export const deleteNetflixTitless = createAction(
  '[NetflixTitles/API] Delete NetflixTitless',
  props<{ ids: string[] }>()
);

export const clearNetflixTitless = createAction(
  '[NetflixTitles/API] Clear NetflixTitless'
);
