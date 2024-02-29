/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { KIND_NPM } from './types';
import { getDefinition } from './utils';
import { IResourceTypeProvider, ResourceRole, ResourceProviderType } from '@kapeta/ui-web-types';
import RepositoryEditorComponent from './RepositoryEditorComponent';

const packageJson: any = require('../../package.json');
const definition = getDefinition(KIND_NPM);

export const NPMResourceTypeProvider: IResourceTypeProvider = {
    kind: KIND_NPM,
    version: packageJson.version,
    title: 'NPM Repository',
    icon: definition.spec.icon,
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.OPERATOR,
    editorComponent: RepositoryEditorComponent,
    definition,
};

export default NPMResourceTypeProvider;
