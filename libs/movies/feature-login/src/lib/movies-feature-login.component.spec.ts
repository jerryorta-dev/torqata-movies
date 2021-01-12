import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgSpriteLoaderService } from '@tor/shared/utils';

import { MoviesFeatureLoginComponent } from './movies-feature-login.component';

describe('MoviesFeatureLoginComponent', () => {
  let component: MoviesFeatureLoginComponent;
  let fixture: ComponentFixture<MoviesFeatureLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesFeatureLoginComponent],
      providers: [SvgSpriteLoaderService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFeatureLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
