import { Action, createReducer, on } from '@ngrx/store';
import { accountLoaded } from '@tor/shared/actions';
import { AccountState, initialAccountState } from '@tor/shared/models';

const reducer = createReducer(
  initialAccountState,
  on(accountLoaded, (state: AccountState, action) => {
    return {
      ...state,
      ...action.payload,
    };
  }),
);

export function accountReducer(
  state: AccountState | undefined,
  action: Action
): AccountState {
  return reducer(state, action);
}
