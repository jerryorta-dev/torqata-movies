import { Inject, Injectable } from '@angular/core';
import { IEnvironment } from '@tor/shared/models';
import { SearchClient } from 'algoliasearch/dist/algoliasearch-lite';
import algoliasearch from 'algoliasearch/lite';

@Injectable({
  providedIn: 'root',
})
export class AlgoliaSearchService {
  // TODO obfuscate keys?
  private client: SearchClient;

  constructor(@Inject('ENVIRONMENT') private environment: IEnvironment) {
    this.client = algoliasearch(
      this.environment.algolia.appId,
      this.environment.algolia.apiKey
    );

    console.log('foo');

    console.log(this.environment);
  }

  query() {}
}
