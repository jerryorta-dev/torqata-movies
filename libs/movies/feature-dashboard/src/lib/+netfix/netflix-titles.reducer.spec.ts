import {
  netflixTitlesReducer,
  initialNetflexTitlesState,
} from './netflix-titles.reducer';

describe('NetflixTitles Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = netflixTitlesReducer(initialNetflexTitlesState, action);

      expect(result).toBe(initialNetflexTitlesState);
    });
  });
});
