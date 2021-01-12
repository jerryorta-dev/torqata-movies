import { fakeAsync, flush } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { logOut } from '@tor/shared/actions';
import { CommonAppRouts } from '@tor/shared/models';
import firebase from 'firebase';
import { of } from 'rxjs';
import { AccountEffects } from './account.effects';

firebase.initializeApp({
  apiKey: 'foo',
  authDomain: 'foo.com',
});

describe('AccountEffects', () => {
  it('should logout', fakeAsync(() => {
    const actions$ = of(logOut);
    const mockRouter: any = {
      navigate: jest.fn(),
    };
    const MockAccountService = {
      // reflective function
      addUser: (account) => of(account),
    };

    const effects = new AccountEffects(
      actions$,
      mockRouter,
      <Store<any>>(<unknown>MockStore),
      MockAccountService
    );

    effects.logout$.subscribe(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith([CommonAppRouts.LOGIN]);
    });

    flush();
  }));

  // TODO - try mocking login using firebase-mock
  // it('should login', fakeAsync(() => {
  //   const actions$ = of({ type: 'Mock Login'} );
  //   const mockRouter: any = {
  //     navigate: jest.fn(),
  //   };
  //   const MockAccountService = {
  //     // reflective function
  //     addUser: (account) => of(account),
  //   };
  //
  //   const effects = new AccountEffects(
  //     actions$,
  //     mockRouter,
  //     <Store<any>>(<unknown>MockStore),
  //     MockAccountService
  //   );
  //
  //   expect(mockRouter.navigate).toHaveBeenCalledWith([CommonAppRouts.LOGIN]);
  //
  //   flush();
  // }));
});
