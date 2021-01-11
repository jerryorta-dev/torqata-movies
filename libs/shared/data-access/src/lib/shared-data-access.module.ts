import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppState, initialAccountState } from '@tor/shared/models';
import { AccountFirebaseService } from './+account/account-firebase.service';
import { AccountEffects } from './+account/account.effects';
import { accountReducer } from './+account/account.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        account: accountReducer,
      },
      {
        initialState: <AppState>{
          account: initialAccountState,
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
  providers: [AccountFirebaseService],
})
export class SharedDataAccessModule {}
