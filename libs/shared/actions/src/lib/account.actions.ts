import { createAction, props } from '@ngrx/store';
import { UserAccount } from '@tor/shared/models';

export const logIn = createAction(
  '[Account] Account Log in',
  props<{ account: UserAccount }>()
);

export const logOut = createAction('[Account] Account Log Out');
