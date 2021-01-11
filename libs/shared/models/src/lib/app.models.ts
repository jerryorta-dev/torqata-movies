import { AccountState } from './account.model';
import { NetflixTitlesState } from './netflix.models';

export interface AppState {
  account: AccountState;
  netflixTitles: NetflixTitlesState;
}
