import { sha256 } from 'crypto-hash';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function localCacheKey_sha256L40(s: string): Observable<string> {
  return from(sha256(s)).pipe(map((h: string) => h.substr(0, 40)));
}

export function firestoreUserKey_sha256(s: string): Observable<string> {
  return from(sha256(s));
}
