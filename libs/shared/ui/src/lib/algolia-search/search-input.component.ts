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
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { SearchQuery } from './search-input.models';

@Component({
  selector: 'tor-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit, OnDestroy {
  private _onDestroy$: Subject<boolean> = new Subject();

  searchFormGroup: FormGroup;

  @Output() changes: EventEmitter<SearchQuery> = new EventEmitter<
    SearchQuery
  >();

  @Output() clear: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.searchFormGroup = this.buildForm();
  }

  clearInput() {
    this.clear.next(true);
    this.searchFormGroup.reset({ query: '' }, { emitEvent: false });
  }

  ngOnInit(): void {
    this.searchFormGroup.valueChanges
      .pipe(
        filter((query: SearchQuery) => query.query.length >= 3),
        debounceTime(300),
        takeUntil(this._onDestroy$)
      )
      .subscribe((query: SearchQuery) => {
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
