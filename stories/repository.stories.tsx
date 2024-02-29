/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import '@kapeta/ui-web-components/styles/index.less';
import RepositoryEditorComponent from '../src/web/RepositoryEditorComponent';
import { Resource } from '@kapeta/schemas';
import { FormContainer } from '@kapeta/ui-web-components';

const RESOURCE_KIND = 'kapeta/resource-type-npm-repository';

const RepositoryResource: Resource = {
    kind: RESOURCE_KIND,
    metadata: {
        name: 'MyRepository',
    },
    spec: {
        port: {
            type: 'http',
        },
    },
};

export default {
    title: 'Repository',
};

export const Editor = () => {
    return (
        <FormContainer initialValue={RepositoryResource}>
            <RepositoryEditorComponent />
        </FormContainer>
    );
};
