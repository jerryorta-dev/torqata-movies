import { SearchResponse } from '@algolia/client-search';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { NetflixTitleSearchService } from './netflix-title-search.service';
import {
  loadSearchResults,
  queryNetflixTitles,
} from './netflix-titles.actions';
import { NetflixTitle } from './netflix.models';

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

  constructor(
    private actions$: Actions,
    private netflixSearch: NetflixTitleSearchService
  ) {}
}
