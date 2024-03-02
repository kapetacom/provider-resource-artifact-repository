/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { KIND_MAVEN } from './types';
import { getDefinition } from './utils';
import { IResourceTypeProvider, ResourceRole, ResourceProviderType } from '@kapeta/ui-web-types';
import RegistryEditorComponent from './RegistryEditorComponent';

const packageJson: any = require('../../package.json');
const definition = getDefinition(KIND_MAVEN);

export const MavenResourceTypeProvider: IResourceTypeProvider = {
    kind: KIND_MAVEN,
    version: packageJson.version,
    title: 'Maven Registry',
    icon: definition.spec.icon,
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.OPERATOR,
    editorComponent: RegistryEditorComponent,
    definition,
};

export default MavenResourceTypeProvider;
