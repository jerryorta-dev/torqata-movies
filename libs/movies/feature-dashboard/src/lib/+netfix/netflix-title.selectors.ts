import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  NetflixTitle,
  netflixTitlesesFeatureKey,
  NetflixTitlesState,
} from './netflix.models';

const netflixFeatureState = createFeatureSelector<NetflixTitlesState>(
  netflixTitlesesFeatureKey
);

export const selectAllTitles = createSelector(
  netflixFeatureState,
  (state: NetflixTitlesState): NetflixTitle[] => {
    return <NetflixTitle[]>Object.values(state.entities);
  }
);

export const selectIsLoading = createSelector(
  netflixFeatureState,
  (state: NetflixTitlesState): boolean => state.loading
);
