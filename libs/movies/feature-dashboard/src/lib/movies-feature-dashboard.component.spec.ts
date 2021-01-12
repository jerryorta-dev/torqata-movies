import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppNavbarModule, SearchInputModule } from '@tor/shared/ui';
import {
  selectAllTitles,
  selectIsLoading,
  selectLongestNovie,
  selectTotalHits,
} from './+netfix/netflix-title.selectors';
import { initialNetflexTitlesState } from './+netfix/netflix-titles.reducer';
import { NetflixResultsTableModule } from './components/netflix-results-table/netflix-results-table.module';

import { MoviesFeatureDashboardComponent } from './movies-feature-dashboard.component';

describe('MoviesFeatureDashboardComponent', () => {
  let component: MoviesFeatureDashboardComponent;
  let fixture: ComponentFixture<MoviesFeatureDashboardComponent>;
  let store: MockStore;
  const initialState = {
    ...initialNetflexTitlesState,
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          SearchInputModule,
          BrowserAnimationsModule,
          ReactiveComponentModule,

          AppNavbarModule,
          NetflixResultsTableModule,
          SearchInputModule,
        ],
        declarations: [MoviesFeatureDashboardComponent],
        providers: [provideMockStore({ initialState })],
      }).compileComponents();
      store = TestBed.inject(MockStore);

      store.overrideSelector(selectAllTitles, []);
      store.overrideSelector(selectIsLoading, false);
      store.overrideSelector(selectTotalHits, 50);
      store.overrideSelector(selectLongestNovie, {
        duration: 50,
        title: 'The Foo Report',
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFeatureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
