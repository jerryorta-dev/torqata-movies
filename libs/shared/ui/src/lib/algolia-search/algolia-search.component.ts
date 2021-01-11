import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlgoliaSearchService } from '@tor/shared/data-access';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AlgoliaSearchQuery } from './algolia-search.models';

@Component({
  selector: 'tor-algolia-search',
  templateUrl: './algolia-search.component.html',
  styleUrls: ['./algolia-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlgoliaSearchComponent implements OnInit, OnDestroy {
  private _onDestroy$: Subject<boolean> = new Subject();

  searchFormGroup: FormGroup;

  @Output() changes: EventEmitter<AlgoliaSearchQuery> = new EventEmitter<
    AlgoliaSearchQuery
  >();

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private search: AlgoliaSearchService
  ) {
    this.searchFormGroup = this.buildForm();
  }

  ngOnInit(): void {
    this.searchFormGroup.valueChanges
      .pipe(
        filter((query: AlgoliaSearchQuery) => query.query.length > 3),
        takeUntil(this._onDestroy$)
      )
      .subscribe((query: AlgoliaSearchQuery) => {
        this.search.query(query.query);
        this.changes.next(query);
      });

    this.cd.detectChanges();
  }

  ngOnDestroy() {
    this._onDestroy$.next(true);
  }

  buildForm() {
    const group: any = {
      query: [''],
    };

    return this.fb.group(group);
  }
}
