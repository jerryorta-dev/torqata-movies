import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesFeatureLoginRoutingModule } from './movies-feature-login-routing.module';
import { MoviesFeatureLoginComponent } from './movies-feature-login.component';

@NgModule({
  imports: [CommonModule, MoviesFeatureLoginRoutingModule],
  declarations: [MoviesFeatureLoginComponent],
})
export class MoviesFeatureLoginModule {}
