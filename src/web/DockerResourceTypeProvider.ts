/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { KIND_DOCKER } from './types';
import { getDefinition } from './utils';
import { IResourceTypeProvider, ResourceRole, ResourceProviderType } from '@kapeta/ui-web-types';
import RegistryEditorComponent from './RegistryEditorComponent';

const packageJson: any = require('../../package.json');
const definition = getDefinition(KIND_DOCKER);

export const DockerResourceTypeProvider: IResourceTypeProvider = {
    kind: KIND_DOCKER,
    version: packageJson.version,
    title: 'Docker Registry',
    icon: definition.spec.icon,
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.OPERATOR,
    editorComponent: RegistryEditorComponent,
    definition,
};

export default DockerResourceTypeProvider;
