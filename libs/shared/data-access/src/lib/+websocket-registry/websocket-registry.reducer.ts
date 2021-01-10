import { Action, createReducer, on } from '@ngrx/store';
import {
  addWebsocketRegistry,
  addWebsocketRegistrys,
  clearWebsocketRegistrys,
  deleteWebsocketRegistry,
  deleteWebsocketRegistrys,
  loadWebsocketRegistrys,
  serviceDoConnectAction,
  serviceDoDisconnectAction,
  serviceLoggedOutAction,
  updateWebsocketRegistry,
  updateWebsocketRegistrys,
  upsertWebsocketRegistry,
  upsertWebsocketRegistrys,
  websocketIsConnectedAction,
  websocketIsDisconnectedAction,
} from '@tor/shared/actions';
import {
  ConnectionRegistryState,
  ConnectionService,
  initialWebsocketRegistryState,
  websocketRegistryAdapter,
} from '@tor/shared/models';

import { keysAreTruthyInEntity } from '@uiux/fn';

const reducer = createReducer(
  initialWebsocketRegistryState,
  on(websocketIsConnectedAction, (state, action) => {
    // console.log(action);
    if (state.entities[action.id]) {
      (<ConnectionService>state.entities[action.id]).connected = true;
      state.allConnected = keysAreTruthyInEntity(state.entities, 'connected');
    }

    return {
      ...state,
    };
  }),
  on(websocketIsDisconnectedAction, (state, action) => {
    // console.log(action);
    if (state.entities[action.id]) {
      (<ConnectionService>state.entities[action.id]).connected = false;
      state.allConnected = false;
    }

    return state;
  }),

  // Triggered by presence service
  on(serviceDoConnectAction, (state, action) => {
    return {
      ...state,
      doConnect: true,
      doDisconnect: false,
    };
  }),

  // Triggered by account.effects service
  // on(accountLoaded, (state, action) => {
  //   return {
  //     ...state,
  //     doConnect: true,
  //     doDisconnect: false,
  //   };
  // }),

  on(serviceDoDisconnectAction, (state, action) => {
    return {
      ...state,
      doConnect: false,
      doDisconnect: true,
    };
  }),
  on(serviceLoggedOutAction, (state, action) => {
    state.allConnected = false;

    (<ConnectionService[]>Object.values(state.entities)).map(
      (entity: ConnectionService) => {
        entity.connected = false;
        return entity;
      }
    );

    return state;
  }),
  on(addWebsocketRegistry, (state, action) => {
    const connectionService: ConnectionService = {
      id: action.id,
      connected: false,
    };

    const _state = websocketRegistryAdapter.addOne(connectionService, state);
    _state.allConnected = false;
    return _state;
  }),
  on(upsertWebsocketRegistry, (state, action) => {
    const connectionService: ConnectionService = {
      id: action.id,
      connected: false,
    };
    const _state = websocketRegistryAdapter.upsertOne(connectionService, state);
    _state.allConnected = false;
    return _state;
  }),
  on(addWebsocketRegistrys, (state, action) => {
    const services: ConnectionService[] = action.ids.map((id: string) => ({
      id,
      connected: false,
    }));

    const _state = websocketRegistryAdapter.addMany(services, state);
    _state.allConnected = false;
    return _state;
  }),
  on(upsertWebsocketRegistrys, (state, action) => {
    const services: ConnectionService[] = action.ids.map((id: string) => ({
      id,
      connected: false,
    }));

    const _state = websocketRegistryAdapter.upsertMany(services, state);
    _state.allConnected = false;
    return _state;
  }),
  on(updateWebsocketRegistry, (state, action) =>
    websocketRegistryAdapter.updateOne(action.service, state)
  ),
  on(updateWebsocketRegistrys, (state, action) =>
    websocketRegistryAdapter.updateMany(action.services, state)
  ),
  on(deleteWebsocketRegistry, (state, action) =>
    websocketRegistryAdapter.removeOne(action.id, state)
  ),
  on(deleteWebsocketRegistrys, (state, action) =>
    websocketRegistryAdapter.removeMany(action.ids, state)
  ),
  on(loadWebsocketRegistrys, (state, action) => {
    const services: ConnectionService[] = action.ids.map((id: string) => ({
      id,
      connected: false,
    }));
    const _state = websocketRegistryAdapter.setAll(services, state);
    _state.allConnected = false;
    return _state;
  }),
  on(clearWebsocketRegistrys, (state) =>
    websocketRegistryAdapter.removeAll(state)
  )
);

export function websocketRegistryReducer(
  state: ConnectionRegistryState | undefined,
  action: Action
) {
  return reducer(state, action);
}
