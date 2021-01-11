import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlgoliaSearchModule, AppNavbarModule } from '@tor/shared/ui';
import { MoviesFeatureDashboardRoutingModule } from './movies-feature-dashboard-routing.module';
import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

@NgModule({
  declarations: [MoviesFeatureDashboardComponent],
  imports: [
    CommonModule,
    MoviesFeatureDashboardRoutingModule,
    AlgoliaSearchModule,
    AppNavbarModule,
  ],
})
export class MoviesFeatureDashboardModule {}
