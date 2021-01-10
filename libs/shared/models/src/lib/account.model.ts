export const accountFeatureKey = 'account';

export interface UserAccount {
  // email: string | null;
  photoURL: string | null;
  // uid: string | null;
  uidHash: string | null;
}

export interface AccountState {
  isLoggedIn: boolean;
  account: UserAccount;
}

export const initialAccountState: AccountState = {
  isLoggedIn: false,
  account: {
    // email: null,
    photoURL: null,
    // uid: null,
    uidHash: null,
  },
};
