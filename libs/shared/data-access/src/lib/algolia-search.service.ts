import { Inject, Injectable } from '@angular/core';
import { IEnvironment } from '@tor/shared/models';
import { SearchIndex } from 'algoliasearch/dist/algoliasearch-lite';
import algoliasearch from 'algoliasearch';

@Injectable({
  providedIn: 'root',
})
export class AlgoliaSearchService {
  // TODO obfuscate keys?
  private searchIndex: SearchIndex;

  constructor(@Inject('ENVIRONMENT') private environment: IEnvironment) {
    const _client = algoliasearch(
      this.environment.algolia.appId,
      this.environment.algolia.apiKey
    );

    this.searchIndex = _client.initIndex('prod_torqata_netfix_titles');
  }

  query(query: string) {
    this.searchIndex.search(query).then((r) => {
      console.log(r);
    });
  }
}
