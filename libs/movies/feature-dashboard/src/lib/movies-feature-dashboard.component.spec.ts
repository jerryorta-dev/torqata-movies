import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

describe('MoviesFeatureDashboardComponent', () => {
  let component: MoviesFeatureDashboardComponent;
  let fixture: ComponentFixture<MoviesFeatureDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesFeatureDashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFeatureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
