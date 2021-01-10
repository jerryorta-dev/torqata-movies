import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'analyze',
    loadChildren: () =>
    import(
      'libs/movies/feature-dashboard/src/lib/movies-feature-dashboard.module'
      ).then((m) => m.MoviesFeatureDashboardModule)
  },

  {
    path: 'login',
    loadChildren: () =>
      import(
        'libs/movies/feature-login/src/lib/movies-feature-login.module'
        ).then((m) => m.MoviesFeatureLoginModule)
  },

  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
