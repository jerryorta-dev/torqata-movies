import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFeatureLoginComponent } from './movies-feature-login.component';

describe('MoviesFeatureLoginComponent', () => {
  let component: MoviesFeatureLoginComponent;
  let fixture: ComponentFixture<MoviesFeatureLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesFeatureLoginComponent],
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
