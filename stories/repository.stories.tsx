/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import '@kapeta/ui-web-components/styles/index.less';
import RegistryEditorComponent from '../src/web/RegistryEditorComponent';
import { Resource } from '@kapeta/schemas';
import { FormContainer } from '@kapeta/ui-web-components';

const RESOURCE_KIND = 'kapeta/resource-type-npm-registry';

const RegistryResource: Resource = {
    kind: RESOURCE_KIND,
    metadata: {
        name: 'MyRegistry',
    },
    spec: {
        port: {
            type: 'http',
        },
    },
};

export default {
    title: 'Registry',
};

export const Editor = () => {
    return (
        <FormContainer initialValue={RegistryResource}>
            <RegistryEditorComponent />
        </FormContainer>
    );
};
