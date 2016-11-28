/* @flow */

import { createAction } from 'redux-actions';

/**
 * Perform the initial setup of the container.
 *
 * @param  {String} containerId
 * @param  {Object} [ui]
 * @return {Object}
 */
export const SETUP_CONTAINER = 'containers/SETUP_CONTAINER';
export const setupContainer: Function = createAction(SETUP_CONTAINER, (containerId: string, ui: Object = {}) => ({ containerId, ui }));

/**
 * Update the meta object that contains information about container's UI.
 *
 * @param  {Object} payload
 * @param  {String} payload.containerId
 * @param  {Object} payload.ui
 * @return {Object}
 */
export const SET_UI_META = 'containers/SET_UI_META';
export const setUIMeta: Function = createAction(SET_UI_META);

/**
 * Initialize a visibility check for the container.
 *
 * @param  {String} containerId
 * @return {Object}
 */
export const CHECK_VISIBILITY = 'containers/CHECK_VISIBILITY';
export const checkVisibility: Function = createAction(CHECK_VISIBILITY);
