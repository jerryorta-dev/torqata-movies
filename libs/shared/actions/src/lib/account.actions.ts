import { createAction, props } from '@ngrx/store';
import { AccountState } from '@tor/shared/models';

export const accountLoaded = createAction(
  '[Account] Account Loaded',
  props<{ payload: AccountState }>()
);

export const accountUpdated = createAction(
  '[Account] Account Updated',
  props<{ account: AccountState }>()
);

export const accountLoadError = createAction(
  '[Account] Account Load Error',
  props<{ payload: any }>()
);

export const accountSaveFirebase = createAction(
  '[Account] Account Save Firebase',
  props<{ payload: Partial<AccountState> }>()
);

export const accountSaveBetaTestCodeFirebase = createAction(
  '[Account] Account Save Beta Test Code Firebase',
  props<{ payload: Partial<AccountState> }>()
);
