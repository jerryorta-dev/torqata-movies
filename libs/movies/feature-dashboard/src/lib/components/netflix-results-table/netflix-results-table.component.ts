import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPagination } from '../../+netfix/netflix-title.selectors';
import { queryPagination } from '../../+netfix/netflix-titles.actions';
import {
  NetflixTitle,
  NetflixTitlesPagination,
  PageEventParams,
} from '../../+netfix/netflix.models';

@Component({
  selector: 'tor-netflix-results-table',
  templateUrl: './netflix-results-table.component.html',
  styleUrls: ['./netflix-results-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class NetflixResultsTableComponent {
  @Input()
  set data(d: NetflixTitle[]) {
    if (d && d.length) {
      this.dataSource.data = d;
    }
  }

  dataSource = new MatTableDataSource<NetflixTitle>([]);

  // NOTE: DO NOT USE - pagination handled by algolia search - here for notes only
  // @ViewChild(MatPaginator) paginator?: MatPaginator;

  expandedElement: NetflixTitle | null = null;

  columnsToDisplay = ['title'];

  pagination: NetflixTitlesPagination = {
    pageSize: 0,
    length: 0,
    pageIndex: 0,
  };

  pagination$: Observable<NetflixTitlesPagination> = this.store.select(
    selectPagination
  );

  constructor(private store: Store) {}

  // ngAfterViewInit() {

  // NOTE: DO NOT USE - pagination handled by algolia search - here for notes only
  // if (this.paginator) {
  //   // this.dataSource.paginator = this.paginator;
  // }
  // }

  onPage(event: PageEvent) {
    this.store.dispatch(
      queryPagination({
        pagination: <PageEventParams>{
          ...event,
        },
      })
    );
  }
}
