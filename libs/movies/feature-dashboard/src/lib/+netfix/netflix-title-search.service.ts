import { SearchResponse } from '@algolia/client-search';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvironment } from '@tor/shared/models';
import algoliasearch, { SearchIndex } from 'algoliasearch';
import { from, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { NetflixTitle } from './netflix.models';

@Injectable({
  providedIn: 'root',
})
export class NetflixTitleSearchService {
  // TODO obfuscate keys?
  private searchIndex: SearchIndex;
  private _cancelCurrentQuery$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private store: Store,
    @Inject('ENVIRONMENT') private environment: IEnvironment
  ) {
    const _client = algoliasearch(
      this.environment.algolia.appId,
      this.environment.algolia.apiKey
    );

    this.searchIndex = _client.initIndex('prod_torqata_netfix_titles');
  }

  query(query: string): Observable<SearchResponse<NetflixTitle>> {
    this._cancelCurrentQuery$.next(true);

    return from(this.searchIndex.search(query)).pipe(
      takeUntil(this._cancelCurrentQuery$),
      map((results: SearchResponse<unknown>) => {
        return <SearchResponse<NetflixTitle>>{
          ...results,
        };
      })
    );
  }
}
