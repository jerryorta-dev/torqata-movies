import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppNavbarModule, SearchInputModule } from '@tor/shared/ui';
import { NetflixResultsTableModule } from './components/netflix-results-table/netflix-results-table.module';

import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

describe('MoviesFeatureDashboardComponent', () => {
  let component: MoviesFeatureDashboardComponent;
  let fixture: ComponentFixture<MoviesFeatureDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputModule, AppNavbarModule, NetflixResultsTableModule],
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
