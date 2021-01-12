import { fakeAsync, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { logOut } from '@tor/shared/actions';
import { of } from 'rxjs';
import { AccountEffects } from './account.effects';

jest.mock('firebase');

describe('AccountEffects', () => {
  // let store: MockStore;
  //
  // const initialState: AccountState = {
  //   isLoggedIn: true,
  //   account: {
  //     photoURL: 'my/photo.jpg',
  //     uidHash: '1234556'
  //   }
  // };

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

    tick();

    effects.logout$.subscribe(() => {
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  }));

  // beforeEach(waitForAsync(() => {
  //
  //   mockRouter = {
  //     navigate: jest.fn()
  //   }
  //
  //   // TestBed.configureTestingModule({
  //   //                                  imports: [
  //   //                                    // RouterTestingModule
  //   //                                  ],
  //   //                                  providers: [
  //   //                                    { provide: Router, useValue: mockRouter },
  //   //                                    { provide: AccountFirebaseService, useValue: MockAccountService },
  //   //                                    provideMockActions(() => actions$),
  //   //                                    provideMockStore({ initialState })
  //   //                                  ]
  //   //                                });
  //   //
  //   // store = TestBed.inject(MockStore);
  // }));
});
