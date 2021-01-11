import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlgoliaSearchComponent } from './algolia-search.component';

@NgModule({
  declarations: [AlgoliaSearchComponent],
  exports: [AlgoliaSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class AlgoliaSearchModule {}
