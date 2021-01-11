import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlgoliaSearchQuery } from '@tor/shared/ui';

@Component({
  selector: 'tor-movies-feature-dashboard',
  templateUrl: './movies-feature-dashboard.component.html',
  styleUrls: ['./movies-feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesFeatureDashboardComponent {
  onQueryInputChanges(search: AlgoliaSearchQuery) {
    console.log(search);
  }
}
