/**
 * The external dependencies.
 */
import React from 'react';
import { branch, renderComponent } from 'recompose';
import { isObject } from 'lodash';

/**
 * The internal dependencies.
 */
import ContainerTabbed from 'containers/components/container/tabbed';
import ContainerPlain from 'containers/components/container/plain';

export default branch(
	({ container }) => isObject(container.settings.tabs),

	renderComponent(ContainerTabbed)
)(ContainerPlain);
