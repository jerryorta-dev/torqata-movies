import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgSpriteLoaderService } from '@tor/shared/utils';

@Component({
  selector: 'tor-movies-feature-login',
  templateUrl: './movies-feature-login.component.html',
  styleUrls: ['./movies-feature-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesFeatureLoginComponent  {

  constructor(private svgLoader: SvgSpriteLoaderService) {
    this.svgLoader.addSvgIconSet();
  }

  signInWithGoogle() {
    console.log('login with google');
  }

}
