/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import { FormField } from '@kapeta/ui-web-components';

function validateInstanceName(fieldName: string, value: string) {
    if (!/^[a-z]([a-z0-9_-]*[a-z0-9_])?$/i.test(value)) {
        throw new Error('Invalid registry name');
    }
}

const RegistryEditorComponent = () => {
    return (
        <FormField
            name={'metadata.name'}
            label={'Name'}
            validation={['required', validateInstanceName]}
            help={'Name your registry'}
        />
    );
};

export default RegistryEditorComponent;
