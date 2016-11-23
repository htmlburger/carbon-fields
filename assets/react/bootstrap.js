/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import { makeContainer } from 'lib/factory';
import { getContainers } from 'selectors/containers';

/**
 * Every Carbon container will be treated as separate React application because
 * we don't want to modify the core behaviour/markup of the WordPress's admin area.
 * Although the store will be shared between the applications.
 *
 * Abracadabra! Poof! Containers everywhere ...
 */
getContainers(store.getState()).forEach(({ id, type }) => {
	ReactDOM.render(makeContainer(type, { id }), document.querySelector(`.container-${id}`));
});
