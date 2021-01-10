import { ConnectionRegistryState } from './websocket-registry.models';
import { AccountState } from './account.model';

export interface AppState {
  account: AccountState;
  webSocketRegistry: ConnectionRegistryState;
}
