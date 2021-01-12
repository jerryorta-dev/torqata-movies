import { loadSearchResults } from './netflix-titles.actions';
import {
  netflixTitlesReducer,
  initialNetflexTitlesState,
} from './netflix-titles.reducer';
import { NetflixTitle } from './netflix.models';

describe('NetflixTitles Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = netflixTitlesReducer(initialNetflexTitlesState, action);

      expect(result).toBe(initialNetflexTitlesState);
    });
  });

  describe('loadSearchResults', () => {
    const hits: NetflixTitle[] = [
      {
        show_id: 81145628,
        type: 'Movie',
        title: 'Norm of the North: King Sized Adventure',
        director: 'Richard Finn, Tim Maltby',
        cast:
          'Alan Marriott, Andrew Toth, Brian Dobson, ' +
          'Cole Howard, Jennifer Cameron, Jonathan Holmes, Lee Tockar, Lisa Durupt, Maya Kay, Michael Dobson',
        country: 'United States, India, South Korea, China',
        date_added: 'September 9, 2019',
        release_year: 2019,
        rating: 'TV-PG',
        duration: 90,
        listed_in: 'Children & Family Movies, Comedies',
        description:
          'Before planning an awesome wedding for ' +
          'his grandfather, a polar bear king must take back a stolen artifact from an evil archaeologist first.',
      },
      {
        show_id: 80117401,
        type: 'Movie',
        title: 'Jandino: Whatever it Takes',
        director: '',
        cast: 'Jandino Asporaat',
        country: 'United Kingdom',
        date_added: 'September 9, 2016',
        release_year: 2016,
        rating: 'TV-MA',
        duration: 94,
        listed_in: 'Stand-Up Comedy',
        description:
          'Jandino Asporaat riffs on the challenges of raising ' +
          'kids and serenades the audience with a rousing rendition of "Sex on Fire" in his comedy show.',
      },
    ];

    it('should load search results', () => {
      const results = {
        hits: <any>hits,
        page: 0,
        nbHits: 2,
        nbPages: 1,
        hitsPerPage: 10,
        exhaustiveNbHits: true,
        query: 'foo',
        params: 'foo',
        processingTimeMS: 1,
      };

      const action = loadSearchResults({
        results,
      });

      const state = netflixTitlesReducer(initialNetflexTitlesState, action);

      expect(state.entities[81145628]).toEqual(hits[0]);
      expect(state.entities[80117401]).toEqual(hits[1]);
      expect(state.exhaustiveNbHits).toEqual(results.exhaustiveNbHits);
      expect(state.page).toEqual(results.page);
      expect(state.nbHits).toEqual(results.nbHits);
      expect(state.nbPages).toEqual(results.nbPages);
      expect(state.hitsPerPage).toEqual(results.hitsPerPage);
      expect(state.query).toEqual(results.query);
      expect(state.params).toEqual(results.params);
      expect(state.processingTimeMS).toEqual(results.processingTimeMS);
      expect(state.hits).not.toBeDefined();
    });
  });
});
