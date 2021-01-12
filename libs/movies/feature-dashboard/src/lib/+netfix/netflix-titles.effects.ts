import { SearchResponse } from '@algolia/client-search';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, switchMap, take } from 'rxjs/operators';
import { NetflixTitlesSearchService } from './netflix-titles-search.service';
import { selectQueryString } from './netflix-title.selectors';
import {
  loadSearchResults,
  queryNetflixTitles,
  queryPagination,
} from './netflix-titles.actions';
import { NetflixTitle, PageEventParams } from './netflix.models';

@Injectable()
export class NetflixTitlesEffects {
  queryNetflixTitles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(queryNetflixTitles),
      switchMap(({ query }: { query: string }) => {
        return this.netflixSearch.query(query).pipe(
          map((results: SearchResponse<NetflixTitle>) => {
            return loadSearchResults({
              results,
            });
          })
        );
      })
    )
  );

  queryPaginationTitles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(queryPagination),
      switchMap(({ pagination }: { pagination: PageEventParams }) => {
        return this.store.pipe(
          select(selectQueryString),
          take<string>(1),
          switchMap((query: string) => {
            return this.netflixSearch.queryPage(query, pagination).pipe(
              map((results: SearchResponse<NetflixTitle>) => {
                return loadSearchResults({
                  results,
                });
              })
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private netflixSearch: NetflixTitlesSearchService,
    private store: Store
  ) {}
}
