import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { logIn, logOut } from '@tor/shared/actions';
import { localCacheKey_sha256L40 } from '@tor/shared/fns';
import { CommonAppRouts, UserAccount } from '@tor/shared/models';
import firebase from 'firebase';
import { switchMap, tap } from 'rxjs/operators';
import { AccountFirebaseService } from './account-firebase.service';

@Injectable({ providedIn: 'root' })
export class AccountEffects {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOut),
        tap(() => {
          this.router.navigate([CommonAppRouts.LOGIN]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private accountFirebase: AccountFirebaseService
  ) {
    /**
     * Listen for firestore auth state changes when logged or logging in.
     *
     */
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.email) {
        /**
         * Hash the user's email into a sha256 string and
         * use as an id for the user's account in firestore.
         *
         * For demo purposes, save minimal user information.
         */
        localCacheKey_sha256L40(user.email)
          .pipe(
            switchMap((uidHash: string) => {
              return this.accountFirebase.addUser({
                // email: user.email,
                photoURL: user.photoURL,
                // uid: user.uid,
                uidHash,
              });
            })
          )
          .subscribe((account: UserAccount) => {
            this.store.dispatch(
              logIn({
                account,
              })
            );

            this.router.navigate([CommonAppRouts.DASHBOARD]);
          });

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
}
