import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const WEBSOCKET_REGISTRY_FEATURE_KEY = 'webSocketRegistry';

export interface ConnectionService {
  id: string;
  connected: boolean;
}

export interface ConnectionRegistryPartialState {
  readonly [WEBSOCKET_REGISTRY_FEATURE_KEY]: ConnectionRegistryState;
}

export interface ConnectionRegistryState
  extends EntityState<ConnectionService> {
  // additional entities state properties
  allConnected: boolean;
  doConnect: boolean;
  doDisconnect: boolean;
}

export const websocketRegistryAdapter: EntityAdapter<ConnectionService> = createEntityAdapter<
  ConnectionService
>();

export const initialWebsocketRegistryState: ConnectionRegistryState = websocketRegistryAdapter.getInitialState(
  {
    // additional entity state properties
    allConnected: false,
    doConnect: false,
    doDisconnect: false,
  }
);
