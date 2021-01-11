import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { logOut } from '@tor/shared/actions';
import { selectAccountPhotoUrl } from '@tor/shared/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'tor-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavbarComponent {
  displayURL$: Observable<string> = this.store.select(selectAccountPhotoUrl);

  constructor(private store: Store, private zone: NgZone) {}

  logout() {
    console.log('logout');
    this.zone.run(() => {
      this.store.dispatch(logOut());
    });
  }
}
