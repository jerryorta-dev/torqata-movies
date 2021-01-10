import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SVG_SPRITE } from './svg-sprite';

/**
 * Load custom svg icon sprites
 */
@Injectable({
  providedIn: 'root',
})
export class SvgSpriteLoaderService {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {}

  /**
   *
   * @param namespace - namespace of asset set
   * @param svgSetUrl - url to svg asset set
   */
  addSvgIconSet(): void {
    this._iconRegistry.addSvgIconSetLiteralInNamespace(
      'icon',
      this._domSanitizer.bypassSecurityTrustHtml(SVG_SPRITE)
    );
  }
}
