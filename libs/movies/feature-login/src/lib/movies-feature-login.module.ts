import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SvgLoaderModule } from '@tor/shared/utils';
import { MoviesFeatureLoginRoutingModule } from './movies-feature-login-routing.module';
import { MoviesFeatureLoginComponent } from './movies-feature-login.component';

@NgModule({
  imports: [
    CommonModule,
    SvgLoaderModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,

    MoviesFeatureLoginRoutingModule,
  ],
  declarations: [MoviesFeatureLoginComponent],
})
export class MoviesFeatureLoginModule {}
