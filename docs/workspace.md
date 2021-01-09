# Workspace

### App

The easiest way to create a NrWL workspace is to run the default `npx create-nx-workspace@latest` and follow the prompts. The issue is when the angular app is created, the --strict mode ( even if provided when running the script ) is not respected. So you wil need to remove and recreate the app with strict mode ( and other params ) enabled.

1. Remove e2e app generated `nx g remove [project name]-e2e`.
2. Remove app generated `nx g remove [app-name]`
3. Create app `nx g @nrwl/angular:application movies --strict --enableIvy --linter eslint --routing true --style scss`


### Set yarn as default package manager

In `angular.json`, add default to "cli" node:

```json
  "cli": {
      "defaultCollection": "@nrwl/angular",
      "packageManager": "yarn",
      "analytics": false
    },
```

### Workspace Boundaries

- [See Docs](https://nx.dev/latest/angular/workspace/structure/monorepo-tags)
- See lint rules in `.eslintrc.json`
- See Code Generator in `tools/generators/web-lib`



