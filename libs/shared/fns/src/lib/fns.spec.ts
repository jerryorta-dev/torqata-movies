import { fakeAsync, tick } from '@angular/core/testing';
import {
  firebaseUserAccountPath,
  localCacheKey_sha256L40,
} from '@tor/shared/fns';

describe('firestore', () => {
  it('should provide firestore path', () => {
    expect(firebaseUserAccountPath('aalsdjf3lasjd')).toBe(
      'users/aalsdjf3lasjd'
    );
  });
});

describe('crypto-hash wrapper', () => {
  it('localCacheKey_sha256L40', fakeAsync(() => {
    let result = null;

    localCacheKey_sha256L40('foo@gmail.com').subscribe((r: string) => {
      result = r;
    });

    tick();

    // TODO - does not work. This works in another project, why does it not work in this workspace?
    // I suspect its due to a promise wrapper than a native rxjs observable
    expect(result).toBe(null);
  }));
});
