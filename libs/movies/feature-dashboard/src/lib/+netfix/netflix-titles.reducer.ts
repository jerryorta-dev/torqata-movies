import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import {
  addNetflixTitle,
  addNetflixTitles,
  clearNetflixTitles,
  deleteNetflixTitle,
  deleteNetflixTitles,
  loadNetflixTitles,
  loadSearchResults,
  queryNetflixTitles,
  queryPagination,
  updateNetflixTitle,
  updateNetflixTitles,
  upsertNetflixTitle,
  upsertNetflixTitles,
} from './netflix-titles.actions';
import { NetflixTitle, NetflixTitlesState } from './netflix.models';

export const adapter: EntityAdapter<NetflixTitle> = createEntityAdapter<
  NetflixTitle
>({
  selectId: (title: NetflixTitle) => title.show_id,
});

export const initialNetflexTitlesState: NetflixTitlesState = adapter.getInitialState(
  {
    // additional entity state properties
    loading: true,
    exhaustiveNbHits: false,
    hitsPerPage: 0,
    nbHits: 0,
    nbPages: 0,
    page: 0,
    params: '',
    processingTimeMS: 0,
    query: '',
  }
);

const reducer = createReducer(
  initialNetflexTitlesState,
  on(addNetflixTitle, (state, action) =>
    adapter.addOne(action.netflixTitle, state)
  ),
  on(upsertNetflixTitle, (state, action) =>
    adapter.upsertOne(action.netflixTitle, state)
  ),
  on(addNetflixTitles, (state, action) =>
    adapter.addMany(action.netflixTitles, state)
  ),
  on(upsertNetflixTitles, (state, action) =>
    adapter.upsertMany(action.netflixTitles, state)
  ),
  on(updateNetflixTitle, (state, action) =>
    adapter.updateOne(action.netflixTitle, state)
  ),
  on(updateNetflixTitles, (state, action) =>
    adapter.updateMany(action.netflixTitles, state)
  ),
  on(deleteNetflixTitle, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(deleteNetflixTitles, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(loadNetflixTitles, (state, action) =>
    adapter.setAll(action.netflixTitles, state)
  ),
  on(clearNetflixTitles, (state) => adapter.removeAll(state)),
  on(loadSearchResults, (state, action) => {
    let _state = adapter.removeAll(state);
    _state = adapter.setAll(action.results.hits, _state);
    _state.exhaustiveNbHits = action.results.exhaustiveNbHits;
    _state.hitsPerPage = action.results.hitsPerPage;
    _state.nbHits = action.results.nbHits;
    _state.nbPages = action.results.nbPages;
    _state.page = action.results.page;
    _state.params = action.results.params;
    _state.processingTimeMS = action.results.processingTimeMS;
    _state.query = action.results.query;

    _state.loading = false;

    return _state;
  }),
  on(queryNetflixTitles, queryPagination, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  })
);

export function netflixTitlesReducer(
  state: NetflixTitlesState | undefined,
  action: Action
) {
  return reducer(state, action);
}

export const movieEntitySelectors = adapter.getSelectors();
