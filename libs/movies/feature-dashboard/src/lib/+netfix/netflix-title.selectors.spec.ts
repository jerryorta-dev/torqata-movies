import {
  selectAllTitles,
  selectIsLoading,
  selectLongestNovie,
  selectPagination,
  selectTotalHits,
} from './netflix-title.selectors';
import { initialNetflexTitlesState } from './netflix-titles.reducer';
import { netflixTitlesesFeatureKey } from './netflix.models';

describe('netflix-title.selectors', () => {
  // Not on AppState because it's lazy loaded
  const appState: any = {
    [netflixTitlesesFeatureKey]: {
      ...initialNetflexTitlesState,
      nbHits: 2,
      hitsPerPage: 10,
    },
  };

  appState[netflixTitlesesFeatureKey].entities = {
    81145628: {
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
    80117401: {
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
  };

  it('should select all entities', () => {
    const result = selectAllTitles.projector(
      appState[netflixTitlesesFeatureKey]
    );

    expect(result.length).toEqual(2);
    expect(result[1].show_id).toEqual(81145628);
  });

  it('should select loading', () => {
    const result = selectIsLoading.projector(
      appState[netflixTitlesesFeatureKey]
    );

    expect(result).toEqual(true);
  });

  it('should select longest movie duration', () => {
    const result = selectLongestNovie.projector(
      appState[netflixTitlesesFeatureKey]
    );

    expect(result).toEqual({
      duration: 94,
      title: 'Jandino: Whatever it Takes',
    });
  });

  it('should select total hits', () => {
    const result = selectTotalHits.projector(
      appState[netflixTitlesesFeatureKey]
    );

    expect(result).toEqual(2);
  });

  it('should select pagination', () => {
    const result = selectPagination.projector(
      appState[netflixTitlesesFeatureKey]
    );

    expect(result).toEqual({
      pageSize: 10,
      length: 2,
      pageIndex: 0,
    });
  });
});
