import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tor-movies-feature-dashboard',
  templateUrl: './movies-feature-dashboard.component.html',
  styleUrls: ['./movies-feature-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesFeatureDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
