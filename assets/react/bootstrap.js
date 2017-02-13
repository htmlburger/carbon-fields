import 'babel-polyfill';

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import { makeContainer } from 'lib/factory';
import { getContainers } from 'containers/selectors';

/**
 * Put Lodash in noConflict mode to avoid conflicts with Underscore lib
 * loaded by WordPress.
 */
_.noConflict();

/**
 * Every Carbon container will be treated as separate React application because
 * we don't want to modify the core behaviour/markup of the WordPress's admin area.
 * Although the store will be shared between the applications.
 *
 * Abracadabra! Poof! Containers everywhere ...
 */
_.forEach(getContainers(store.getState()), ({ id, type }) => {
	const node = document.querySelector(`.container-${id}`);

	if (!_.endsWith(id, '__i__') && node) {
		ReactDOM.render(
			<Provider store={store}>
				{makeContainer(type, { id })}
			</Provider>,
			node
		);
	}
});
