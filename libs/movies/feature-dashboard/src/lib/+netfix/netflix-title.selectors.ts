import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  NetflixTitle,
  netflixTitlesesFeatureKey,
  NetflixTitlesPagination,
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

export const selectQueryString = createSelector(
  netflixFeatureState,
  (state: NetflixTitlesState): string => {
    if (state && state.query !== undefined) {
      return state.query;
    }
    return '';
  }
);

export const selectTotalHits = createSelector(
  netflixFeatureState,
  (state: NetflixTitlesState): number => {
    if (state && state.nbHits !== undefined) {
      return state.nbHits;
    }
    return 0;
  }
);

export const selectPagination = createSelector(
  netflixFeatureState,
  (state: NetflixTitlesState): NetflixTitlesPagination => {
    if (
      state &&
      state.page !== undefined &&
      state.hitsPerPage !== undefined &&
      state.nbHits !== undefined
    ) {
      return {
        pageSize: state.hitsPerPage,
        length: state.nbHits,
        pageIndex: state.page,
      };
    }

    return {
      pageSize: 0,
      length: 0,
      pageIndex: 0,
    };
  }
);
