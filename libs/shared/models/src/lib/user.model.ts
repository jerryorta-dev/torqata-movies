
export interface AccountState {
  isLoggedIn: boolean,
  account: {
    firestoreAccountKey: string | null;
    email: string | null;
    phoneNumber: string | null;
    photoURL: string | null;
    uid: string | null;
    uidHash: string | null;
    providerId: string | null;
  }
}

export const initialAccountState: AccountState = {
  isLoggedIn: false,
  account: {
    firestoreAccountKey: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    uid: null,
    uidHash: null,
    providerId: null,
  }
}
