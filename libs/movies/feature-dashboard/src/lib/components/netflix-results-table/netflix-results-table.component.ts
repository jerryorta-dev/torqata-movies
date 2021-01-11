import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NetflixTitle } from '../../+netfix/netflix.models';

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
export class NetflixResultsTableComponent implements AfterViewInit {
  @Input()
  set data(d: NetflixTitle[]) {
    if (d && d.length) {
      this.dataSource.data = d;
    }
  }

  dataSource = new MatTableDataSource<NetflixTitle>([]);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  expandedElement: NetflixTitle | null = null;

  columnsToDisplay = ['title', 'description'];

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
