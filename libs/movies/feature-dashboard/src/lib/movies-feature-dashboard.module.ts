import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchInputModule, AppNavbarModule } from '@tor/shared/ui';
import { NetflixTitlesEffects } from './+netfix/netflix-titles.effects';
import { netflixTitlesReducer } from './+netfix/netflix-titles.reducer';
import {
  initialNetflexTitlesState,
  netflixTitlesesFeatureKey,
} from './+netfix/netflix.models';
import { MoviesFeatureDashboardRoutingModule } from './movies-feature-dashboard-routing.module';
import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

@NgModule({
  declarations: [MoviesFeatureDashboardComponent],
  imports: [
    CommonModule,
    MoviesFeatureDashboardRoutingModule,
    SearchInputModule,
    AppNavbarModule,

    StoreModule.forFeature(netflixTitlesesFeatureKey, netflixTitlesReducer, {
      initialState: initialNetflexTitlesState,
    }),

    EffectsModule.forFeature([NetflixTitlesEffects]),
  ],
})
export class MoviesFeatureDashboardModule {}
