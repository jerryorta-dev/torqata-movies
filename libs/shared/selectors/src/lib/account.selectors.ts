import { createFeatureSelector, createSelector } from '@ngrx/store';
import { accountFeatureKey, AccountState } from '@tor/shared/models';

export const selectAccountState = createFeatureSelector<AccountState>(
  accountFeatureKey
);

export const selectIsLoggedIn = createSelector(
  selectAccountState,
  (state: AccountState) => state.isLoggedIn
);
