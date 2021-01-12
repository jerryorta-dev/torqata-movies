import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialNetflexTitlesState } from '../../+netfix/netflix-titles.reducer';

import { NetflixResultsTableComponent } from './netflix-results-table.component';
import { NetflixResultsTableModule } from './netflix-results-table.module';

describe('NetflixResultsTableComponent', () => {
  let component: NetflixResultsTableComponent;
  let fixture: ComponentFixture<NetflixResultsTableComponent>;

  let store: MockStore;
  const initialState = {
    ...initialNetflexTitlesState,
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveComponentModule,
          BrowserAnimationsModule,
          NetflixResultsTableModule,
        ],
        providers: [provideMockStore({ initialState })],
      }).compileComponents();

      store = TestBed.inject(MockStore);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
