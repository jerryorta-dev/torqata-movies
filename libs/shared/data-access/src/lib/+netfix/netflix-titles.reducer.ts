import { Action, createReducer, on } from '@ngrx/store';
import {
  addNetflixTitles,
  addNetflixTitless,
  clearNetflixTitless,
  deleteNetflixTitles,
  deleteNetflixTitless,
  loadNetflixTitless,
  updateNetflixTitles,
  updateNetflixTitless,
  upsertNetflixTitles,
  upsertNetflixTitless,
} from '@tor/shared/actions';
import {
  adapter,
  initialNetflexTitlesState,
  NetflixTitlesState,
} from '@tor/shared/models';

const reducer = createReducer(
  initialNetflexTitlesState,
  on(addNetflixTitles, (state, action) =>
    adapter.addOne(action.netflixTitles, state)
  ),
  on(upsertNetflixTitles, (state, action) =>
    adapter.upsertOne(action.netflixTitles, state)
  ),
  on(addNetflixTitless, (state, action) =>
    adapter.addMany(action.netflixTitless, state)
  ),
  on(upsertNetflixTitless, (state, action) =>
    adapter.upsertMany(action.netflixTitless, state)
  ),
  on(updateNetflixTitles, (state, action) =>
    adapter.updateOne(action.netflixTitles, state)
  ),
  on(updateNetflixTitless, (state, action) =>
    adapter.updateMany(action.netflixTitless, state)
  ),
  on(deleteNetflixTitles, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(deleteNetflixTitless, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(loadNetflixTitless, (state, action) =>
    adapter.setAll(action.netflixTitless, state)
  ),
  on(clearNetflixTitless, (state) => adapter.removeAll(state))
);

export function netflixTitlesReducer(
  state: NetflixTitlesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
