import { inject, TestBed } from '@angular/core/testing';

import { SvgSpriteLoaderService } from './svg-sprite-loader.service';

describe('IxSvgLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgSpriteLoaderService],
    });
  });

  it('should be created', inject(
    [SvgSpriteLoaderService],
    (service: SvgSpriteLoaderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
