import { Injectable } from '@angular/core';
import { firebaseUserAccountPath } from '@tor/shared/fns';
import { UserAccount } from '@tor/shared/models';
import firebase from 'firebase';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountFirebaseService {
  addUser(account: UserAccount): Observable<UserAccount> {
    return new Observable((observer: Observer<UserAccount>) => {
      if (account && account.uidHash) {
        const doc = firebase
          .firestore()
          .doc(firebaseUserAccountPath(account.uidHash));

        doc.get().then((snap: firebase.firestore.DocumentSnapshot) => {
          if (!snap.exists) {
            doc.set(account).then(
              () => {
                observer.next(account);
              },
              () => {
                // TODO - proper error notification
                observer.next(account);
              }
            );
          } else {
            observer.next(account);
          }
        });
      } else {
        // TODO Let user know something failed when saving to firestore
        observer.next(account);
      }
    });
  }
}
