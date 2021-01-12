import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixResultsTableComponent } from './netflix-results-table.component';
import { NetflixResultsTableModule } from './netflix-results-table.module';

describe('NetflixResultsTableComponent', () => {
  let component: NetflixResultsTableComponent;
  let fixture: ComponentFixture<NetflixResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetflixResultsTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
