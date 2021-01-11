import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppState,
  initialAccountState,
  initialNetflexTitlesState,
  initialWebsocketRegistryState,
  netflixTitlesesFeatureKey,
} from '@tor/shared/models';
import { AccountFirebaseService } from './+account/account-firebase.service';
import { AccountEffects } from './+account/account.effects';
import { accountReducer } from './+account/account.reducer';
import { netflixTitlesReducer } from './+netfix/netflix-titles.reducer';
import { websocketRegistryReducer } from './+websocket-registry/websocket-registry.reducer';
import { AlgoliaSearchService } from './algolia-search.service';

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        account: accountReducer,
        webSocketRegistry: websocketRegistryReducer,
      },
      {
        initialState: <AppState>{
          account: initialAccountState,
          webSocketRegistry: initialWebsocketRegistryState,
          netflixTitles: initialNetflexTitlesState,
        },
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
          strictStateSerializability: false,
          strictActionSerializability: false,
          strictActionWithinNgZone: false,
          strictActionTypeUniqueness: false,
        },
      }
    ),
    EffectsModule.forRoot([AccountEffects]),
  ],
  providers: [AccountFirebaseService, AlgoliaSearchService],
})
export class SharedDataAccessModule {
  constructor(private algoliaSearch: AlgoliaSearchService) {
    this.algoliaSearch.query();
  }
}
