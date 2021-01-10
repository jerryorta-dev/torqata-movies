import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgSpriteLoaderService } from '@tor/shared/utils';
import firebase from 'firebase';

@Component({
  selector: 'tor-movies-feature-login',
  templateUrl: './movies-feature-login.component.html',
  styleUrls: ['./movies-feature-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesFeatureLoginComponent {
  constructor(private svgLoader: SvgSpriteLoaderService) {
    this.svgLoader.addSvgIconSet();
  }

  signInWithGoogle() {
    // https://firebase.google.com/docs/auth/web/google-signin
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    // googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(() => {
        // stub
      });
  }
}
