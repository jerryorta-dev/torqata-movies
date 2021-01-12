# Torqata Movies

## Dev

- To Run localhost: `yarn s.movies`
- To Test: `yarn test`

## Hosted on two sites:

- [Firebase](https://torqata-movies.web.app/) - working better for serving a SPA
- [Google App Engine](https://torqata-movies.uc.r.appspot.com/) - could not configure a SPA

## Data hosted on [algolia](https://www.algolia.com/)

See `libs/movies/feature-dashboard/src/lib/+netfix/netflix-titles-search.service.ts`

## Architecture

- [Create Nrwl Workspace](./docs/workspace.md) - includes workspace boundaries
- [Set Up Firestore ( via firebase )](./docs/firebase.md)

### Code generator to add libraries

To add libraries that support the architectural configuration and respect workspace boundaries, run `yarn g.web-lib`.

See `./tools/generators/web-lib`

### App / Library Architecture

This architecture is only hypothetical. It would shift to support domain data and business models.

- Movies App: `apps/movies/src/app`
- Movies specific libraries: `libs/movies`
- Shared Libraries ( for mulitple apps ): `libs/shared`

### Theming

Theming is supported by Angular Material. A multi-theme architecture is set up, though only one theme is created.

See `libs/shared/theme/src/lib/theming` and `apps/movies/src/styles.scss`.

## Unit Tests

Only created as much to demonstrate knowledge, here are the main tests.

Effects:

- `libs/movies/feature-dashboard/src/lib/+netfix/netflix-titles.effects.spec.ts`
- `libs/shared/data-access/src/lib/+account/account.effects.ts`

Service

- `libs/movies/feature-dashboard/src/lib/+netfix/netflix-titles-search.service.spec.ts`

Reducer

- `libs/movies/feature-dashboard/src/lib/+netfix/netflix-titles.reducer.spec.ts`
