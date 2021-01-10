
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFeatureLoginComponent } from './movies-feature-login.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesFeatureLoginComponent,
  }
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class MoviesFeatureLoginRoutingModule {}
