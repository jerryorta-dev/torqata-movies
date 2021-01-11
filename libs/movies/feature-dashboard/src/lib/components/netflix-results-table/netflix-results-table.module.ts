import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveComponentModule } from '@ngrx/component';
import { NetflixResultsTableComponent } from './netflix-results-table.component';

@NgModule({
  declarations: [NetflixResultsTableComponent],
  exports: [NetflixResultsTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class NetflixResultsTableModule {}
