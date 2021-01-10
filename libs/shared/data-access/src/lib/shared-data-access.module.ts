import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppState, initialAccountState, initialWebsocketRegistryState } from '@tor/shared/models';
import { accountReducer } from './+account/account.reducer';
import { websocketRegistryReducer } from './+websocket-registry/websocket-registry.reducer';

@NgModule({
            imports: [
              StoreModule.forRoot({
                                    account: accountReducer,
                                    webSocketRegistry: websocketRegistryReducer
                                  }, {
                                    initialState: <AppState>{
                                      account: initialAccountState,
                                      webSocketRegistry: initialWebsocketRegistryState
                                    }
                                  })
            ]
          })
export class SharedDataAccessModule {
}
