import { Action, createReducer, on } from '@ngrx/store';
import { logIn, logOut } from '@tor/shared/actions';
import { AccountState, initialAccountState } from '@tor/shared/models';

const reducer = createReducer(
  initialAccountState,
  on(logIn, (state: AccountState, action) => {
    return {
      ...state,
      isLoggedIn: true,
      account: {
        ...action.account,
      },
    };
  }),

  on(logOut, () => {
    return {
      isLoggedIn: false,
      account: {
        ...initialAccountState.account,
      },
    };
  })
);

export function accountReducer(
  state: AccountState | undefined,
  action: Action
): AccountState {
  return reducer(state, action);
}
