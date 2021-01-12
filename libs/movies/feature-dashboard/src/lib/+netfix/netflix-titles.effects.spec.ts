import { SearchResponse } from '@algolia/client-search';
import { fakeAsync, flush } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import {
  loadSearchResults,
  queryNetflixTitles,
  queryPagination,
} from './netflix-titles.actions';

import { NetflixTitlesEffects } from './netflix-titles.effects';
import { NetflixTitle, PageEventParams } from './netflix.models';

describe('NetflixTitlesEffects', () => {
  it('should be created', fakeAsync(() => {
    const actions$ = of(queryNetflixTitles);

    const results = <SearchResponse<NetflixTitle>>{
      hits: [],
      loading: true,
      exhaustiveNbHits: false,
      hitsPerPage: 0,
      nbHits: 0,
      nbPages: 0,
      page: 0,
      params: '',
      processingTimeMS: 0,
      query: 'foo',
    };

    const mockNetflixTitlesSearchServic: any = {
      query: (query: string) => {
        return of({ results });
      },
      queryPage: (query: string, pagination: PageEventParams) => of('no used'),
    };

    const effects = new NetflixTitlesEffects(
      actions$,
      mockNetflixTitlesSearchServic,
      <Store<any>>(<unknown>MockStore)
    );

    effects.queryNetflixTitles$.subscribe((action: Action) => {
      expect(action.type).toBe(loadSearchResults({ results }).type);
    });

    flush();
  }));

  it('should be created', fakeAsync(() => {
    const actions$ = of(queryPagination);

    const results = <SearchResponse<NetflixTitle>>{
      hits: [],
      loading: true,
      exhaustiveNbHits: false,
      hitsPerPage: 0,
      nbHits: 0,
      nbPages: 0,
      page: 0,
      params: '',
      processingTimeMS: 0,
      query: 'foo',
    };

    const mockNetflixTitlesSearchServic: any = {
      query: (query: string) => {
        return of({ results });
      },
      queryPage: (query: string, pagination: PageEventParams) =>
        of({ results }),
    };

    const effects = new NetflixTitlesEffects(
      actions$,
      mockNetflixTitlesSearchServic,
      <Store<any>>(<unknown>MockStore)
    );

    effects.queryNetflixTitles$.subscribe((action: Action) => {
      expect(action.type).toBe(loadSearchResults({ results }).type);
    });

    flush();
  }));
});
