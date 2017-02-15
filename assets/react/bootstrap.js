/**
 * The external dependencies.
 */
import 'babel-polyfill';
import _ from 'lodash';

/**
 * The internal dependencies.
 */
import configureStore from 'store';
import { normalizePreloadedState } from 'store/helpers';

import containerFactory from 'containers/factory';
import { getContainers } from 'containers/selectors';

/**
 * Put Lodash in noConflict mode to avoid conflicts with Underscore lib
 * loaded by WordPress.
 */
_.noConflict();

/**
 * Setup the store.
 */
const state = normalizePreloadedState(window.carbon_json);
const store = configureStore(state);

/**
 * Every Carbon container will be treated as separate React application because
 * we don't want to modify the core behaviour/markup of the WordPress's admin area.
 * Although the store will be shared between the applications.
 *
 * Abracadabra! Poof! Containers everywhere ...
 */
_.forEach(getContainers(store.getState()), ({ id, type }) => containerFactory(store, type, { id }));
