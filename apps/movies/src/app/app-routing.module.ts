import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonAppRouts } from '@tor/shared/models';
import { AuthGuardService } from '@tor/shared/utils';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: CommonAppRouts.DASHBOARD,
    loadChildren: () =>
    import(
      'libs/movies/feature-dashboard/src/lib/movies-feature-dashboard.module'
      ).then((m) => m.MoviesFeatureDashboardModule),
    canActivate: [AuthGuardService],
  },

  {
    path: CommonAppRouts.LOGIN,
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
