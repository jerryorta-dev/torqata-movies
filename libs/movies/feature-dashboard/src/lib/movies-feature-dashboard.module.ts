import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarModule } from '@tor/shared/ui';
import { MoviesFeatureDashboardRoutingModule } from './movies-feature-dashboard-routing.module';
import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

@NgModule({
  imports: [CommonModule, MoviesFeatureDashboardRoutingModule, AppNavbarModule],
  declarations: [MoviesFeatureDashboardComponent],
})
export class MoviesFeatureDashboardModule {}
