import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NetflixTitlesEffects } from './netflix-titles.effects';

describe('NetflixTitlesEffects', () => {
  let actions$: Observable<any>;
  let effects: NetflixTitlesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetflixTitlesEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(NetflixTitlesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
