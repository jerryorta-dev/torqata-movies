import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchQuery } from '@tor/shared/ui';
import { queryNetflixTitles } from './+netfix/netflix-titles.actions';

@Component({
  selector: 'tor-movies-feature-dashboard',
  templateUrl: './movies-feature-dashboard.component.html',
  styleUrls: ['./movies-feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesFeatureDashboardComponent {
  constructor(private store: Store) {}

  onQueryInputChanges(search: SearchQuery) {
    this.store.dispatch(
      queryNetflixTitles({
        query: search.query,
      })
    );
  }
}
