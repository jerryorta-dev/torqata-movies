import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { netflixTitlesReducer } from '@tor/shared/data-access';
import { netflixTitlesesFeatureKey } from '@tor/shared/models';
import { AppNavbarModule } from '@tor/shared/ui';
import { MoviesFeatureDashboardRoutingModule } from './movies-feature-dashboard-routing.module';
import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesFeatureDashboardRoutingModule,
    AppNavbarModule,
    StoreModule.forFeature(netflixTitlesesFeatureKey, netflixTitlesReducer),
  ],
  declarations: [MoviesFeatureDashboardComponent],
})
export class MoviesFeatureDashboardModule {}
