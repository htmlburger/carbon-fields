/* @flow */

import { createAction } from 'redux-actions';

/**
 * Set the initial UI meta for the container.
 *
 * @param  {String} containerId
 * @param  {Object} [fields]
 * @return {Object}
 */
export const SETUP_DEFAULT_UI_META = 'containers/SETUP_DEFAULT_UI_META';
export const setupDefaultUIMeta = createAction(SETUP_DEFAULT_UI_META, (containerId: string, fields: Object = {}) => ({ containerId, fields }));

/**
 * Update the meta object that contains information about container's UI.
 *
 * @param  {Object} payload
 * @param  {String} payload.containerId
 * @param  {Object} payload.fields
 * @return {Object}
 */
export const SET_UI_META = 'containers/SET_UI_META';
export const setUIMeta = createAction(SET_UI_META);

/**
 * Initialize a visibility check for the container.
 *
 * @param  {String} containerId
 * @return {Object}
 */
export const CHECK_VISIBILITY = 'containers/CHECK_VISIBILITY';
export const checkVisibility = createAction(CHECK_VISIBILITY);
