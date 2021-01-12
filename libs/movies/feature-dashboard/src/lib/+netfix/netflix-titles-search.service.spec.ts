import { TestBed } from '@angular/core/testing';
import { NetflixTitlesSearchService } from './netflix-titles-search.service';

describe('AlgoliaSearchService', () => {
  let service: NetflixTitlesSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetflixTitlesSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
