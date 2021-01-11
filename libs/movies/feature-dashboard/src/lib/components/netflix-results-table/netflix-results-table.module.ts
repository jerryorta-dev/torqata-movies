import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NetflixResultsTableComponent } from './netflix-results-table.component';

@NgModule({
  declarations: [NetflixResultsTableComponent],
  exports: [NetflixResultsTableComponent],
  imports: [CommonModule, MatTableModule],
})
export class NetflixResultsTableModule {}
