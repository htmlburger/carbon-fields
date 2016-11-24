/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { forEach } from 'lodash';

import store from 'store';
import { makeContainer } from 'lib/factory';
import { getContainers } from 'containers/selectors';

/**
 * Every Carbon container will be treated as separate React application because
 * we don't want to modify the core behaviour/markup of the WordPress's admin area.
 * Although the store will be shared between the applications.
 *
 * Abracadabra! Poof! Containers everywhere ...
 */
forEach(getContainers(store.getState()), ({ id, type }) => {
	ReactDOM.render(
		<Provider store={store}>
			{makeContainer(type, { id })}
		</Provider>,
		document.querySelector(`.container-${id}`)
	);
});
