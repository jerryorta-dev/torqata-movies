import { SearchResponse } from '@algolia/client-search';
import { fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { selectQueryString } from './netflix-title.selectors';
import { NetflixTitlesSearchService } from './netflix-titles-search.service';
import {
  loadSearchResults,
  queryNetflixTitles,
  queryPagination,
} from './netflix-titles.actions';
import { NetflixTitlesEffects } from './netflix-titles.effects';
import { initialNetflexTitlesState } from './netflix-titles.reducer';
import { NetflixTitle, PageEventParams } from './netflix.models';

describe('NetflixTitlesEffects', () => {
  describe('queryNetflixTitles$', () => {
    let effects: NetflixTitlesEffects;
    let actions$ = new Observable<Action>();
    let store: MockStore;
    const initialState = {
      ...initialNetflexTitlesState,
    };

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

    beforeEach(
      waitForAsync(() => {
        const mockNetflixTitlesSearchService: any = {
          query: (query: string) => {
            return of({ results });
          },
          queryPage: (query: string, pagination: PageEventParams) =>
            of('no used'),
        };

        TestBed.configureTestingModule({
          providers: [
            NetflixTitlesEffects,
            {
              provide: NetflixTitlesSearchService,
              useValue: mockNetflixTitlesSearchService,
            },
            provideMockStore({ initialState }),
            provideMockActions(() => actions$),
          ],
        });

        store = TestBed.inject(MockStore);
        effects = TestBed.inject<NetflixTitlesEffects>(NetflixTitlesEffects);
      })
    );

    it('should be created', fakeAsync(() => {
      actions$ = of(queryNetflixTitles);

      effects.queryNetflixTitles$.subscribe((action: Action) => {
        expect(action.type).toBe(loadSearchResults({ results }).type);
      });

      flush();
    }));
  });

  describe('queryPaginationTitles$', () => {
    let effects: NetflixTitlesEffects;
    let actions$ = new Observable<Action>();
    let store: MockStore;
    const initialState = {
      ...initialNetflexTitlesState,
    };

    const results = <SearchResponse<NetflixTitle>>{
      hits: [],
      loading: true,
      exhaustiveNbHits: false,
      hitsPerPage: 10,
      nbHits: 100,
      nbPages: 10,
      page: 1,
      params: '',
      processingTimeMS: 0,
      query: 'foo',
    };

    beforeEach(
      waitForAsync(() => {
        const mockNetflixTitlesSearchService: any = {
          query: (query: string) => {
            return of({ results });
          },
          queryPage: (query: string, pagination: PageEventParams) =>
            of({ results }),
        };

        TestBed.configureTestingModule({
          providers: [
            NetflixTitlesEffects,
            {
              provide: NetflixTitlesSearchService,
              useValue: mockNetflixTitlesSearchService,
            },
            provideMockStore({ initialState }),
            provideMockActions(() => actions$),
          ],
        });

        store = TestBed.inject(MockStore);
        store.overrideSelector(selectQueryString, 'foo');
        effects = TestBed.inject<NetflixTitlesEffects>(NetflixTitlesEffects);
      })
    );

    it('should be created', fakeAsync(() => {
      actions$ = of(
        queryPagination({
          pagination: {
            previousPageIndex: 0,
            pageIndex: 1,
            pageSize: 10,
            length: 100,
          },
        })
      );

      effects.queryPaginationTitles$.subscribe((action: Action) => {
        expect(action.type).toBe(loadSearchResults({ results }).type);
      });

      flush();
    }));
  });
});
