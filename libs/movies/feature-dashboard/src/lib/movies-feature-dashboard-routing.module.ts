
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesFeatureDashboardComponent,
  }
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class MoviesFeatureDashboardRoutingModule {}
