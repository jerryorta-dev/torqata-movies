import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchQuery } from '@tor/shared/ui';
import { Observable } from 'rxjs';
import {
  selectAllTitles,
  selectIsLoading,
  selectLongestNovie,
  selectTotalHits,
} from './+netfix/netflix-title.selectors';
import {
  clearNetflixTitles,
  queryNetflixTitles,
} from './+netfix/netflix-titles.actions';
import { NetflixTitle } from './+netfix/netflix.models';

@Component({
  selector: 'tor-movies-feature-dashboard',
  templateUrl: './movies-feature-dashboard.component.html',
  styleUrls: ['./movies-feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesFeatureDashboardComponent {
  titleSearchResult$: Observable<NetflixTitle[]> = this.store.select(
    selectAllTitles
  );
  isLoading$: Observable<boolean> = this.store.select(selectIsLoading);
  numberHits$: Observable<number> = this.store.select(selectTotalHits);
  longestMovie$: Observable<{
    duration: number;
    title: string;
  }> = this.store.select(selectLongestNovie);

  constructor(private store: Store) {}

  onQueryInputChanges(search: SearchQuery) {
    this.store.dispatch(
      queryNetflixTitles({
        query: search.query,
      })
    );
  }
}
