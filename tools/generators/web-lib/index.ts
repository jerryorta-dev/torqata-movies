import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/workspace';
import { SchematicOptions } from './schema';
import { sep } from 'path';
import { hasValue } from '@uiux/fn';

function getTags(schema: SchematicOptions): string {
  return `type:${schema.type},scope:${schema.scope},platform:web`;
}

function getDirectory(schema: SchematicOptions): string {
  if (hasValue(schema.directory)) {
    return `${schema.scope}${sep}${schema.directory}`;
  } else {
    return `${schema.scope}`;
  }
}

export default function (schema: SchematicOptions): Rule {
  return chain([
    externalSchematic('@nrwl/angular', 'library', {
      name: schema.name,
      directory: getDirectory(schema),
      addModuleSpec: false,
      buildable: schema.buildable,
      enableIvy: true,
      importPath: `@tor/${schema.scope}/${schema.name}`,
      linter: 'eslint',
      tags: getTags(schema),
      unitTestRunner: 'jest',
      style: 'scss',
      prefix: 'tor',
      publishable: schema.publishable,
      // importPath: schema.importPath,
    }),
  ]);
}
