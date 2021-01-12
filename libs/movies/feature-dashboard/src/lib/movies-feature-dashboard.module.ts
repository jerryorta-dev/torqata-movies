import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchInputModule, AppNavbarModule } from '@tor/shared/ui';
import { NetflixTitlesEffects } from './+netfix/netflix-titles.effects';
import {
  initialNetflexTitlesState,
  netflixTitlesReducer,
} from './+netfix/netflix-titles.reducer';
import { netflixTitlesesFeatureKey } from './+netfix/netflix.models';
import { NetflixResultsTableModule } from './components/netflix-results-table/netflix-results-table.module';
import { MoviesFeatureDashboardRoutingModule } from './movies-feature-dashboard-routing.module';
import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

@NgModule({
  declarations: [MoviesFeatureDashboardComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,

    SearchInputModule,
    AppNavbarModule,
    NetflixResultsTableModule,

    MatCardModule,

    StoreModule.forFeature(netflixTitlesesFeatureKey, netflixTitlesReducer, {
      initialState: initialNetflexTitlesState,
    }),

    EffectsModule.forFeature([NetflixTitlesEffects]),

    MoviesFeatureDashboardRoutingModule,
  ],
})
export class MoviesFeatureDashboardModule {}
