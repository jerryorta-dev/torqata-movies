import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesFeatureDashboardRoutingModule } from './movies-feature-dashboard-routing.module';
import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

@NgModule({
  imports: [CommonModule, MoviesFeatureDashboardRoutingModule],
  declarations: [MoviesFeatureDashboardComponent],
})
export class MoviesFeatureDashboardModule {}
