import { IEnvironment } from '@tor/shared/models';
import { NetflixTitlesSearchService } from './netflix-titles-search.service';

describe('AlgoliaSearchService', () => {
  const config = <IEnvironment>{
    algolia: {
      appId: 'foo',
      apiKey: 'bar',
    },
  };

  it('should be created', () => {
    const service = new NetflixTitlesSearchService(config);

    expect(service).toBeTruthy();
  });
});
