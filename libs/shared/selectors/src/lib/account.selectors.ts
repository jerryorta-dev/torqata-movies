import { createFeatureSelector, createSelector } from '@ngrx/store';
import { accountFeatureKey, AccountState } from '@tor/shared/models';

export const selectAccountState = createFeatureSelector<AccountState>(
  accountFeatureKey
);

export const selectIsLoggedIn = createSelector(
  selectAccountState,
  (state: AccountState): boolean => state.isLoggedIn
);

export const selectAccountPhotoUrl = createSelector(
  selectAccountState,
  (state: AccountState): string => {
    if (state && state.account && state.account.photoURL) {
      return state.account.photoURL;
    }
    return '';
  }
);
