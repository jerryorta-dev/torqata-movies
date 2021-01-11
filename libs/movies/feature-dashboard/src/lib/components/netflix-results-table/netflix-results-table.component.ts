import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
export class NetflixResultsTableComponent {
  @Input() data: NetflixTitle[] = [];

  expandedElement: NetflixTitle | null = null;

  columnsToDisplay = ['title', 'description'];
}
