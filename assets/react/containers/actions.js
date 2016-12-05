/* @flow */

import { createAction } from 'redux-actions';

/**
 * Perform the initial setup of the container.
 *
 * @param  {string} containerId
 * @param  {Object} [ui]
 * @return {Object}
 */
export const SETUP_CONTAINER = 'containers/SETUP_CONTAINER';
export const setupContainer: Function = createAction(SETUP_CONTAINER, (containerId: string, meta: Object = {}, ui: Object = {}) => ({ containerId, meta, ui }));

/**
 * Update the object that holds additional fields for the container.
 *
 * @param  {Object} payload
 * @param  {string} payload.containerId
 * @param  {Object} payload.meta
 * @return {Object}
 */
export const SET_META = 'containers/SET_META';
export const setMeta: Function = createAction(SET_META);

/**
 * Update the object that contains information about container's UI.
 *
 * @param  {Object} payload
 * @param  {string} payload.containerId
 * @param  {Object} payload.ui
 * @return {Object}
 */
export const SET_UI = 'containers/SET_UI';
export const setUI: Function = createAction(SET_UI);

/**
 * Initialize a visibility check for the container.
 *
 * @param  {string} containerId
 * @return {Object}
 */
export const CHECK_VISIBILITY = 'containers/CHECK_VISIBILITY';
export const checkVisibility: Function = createAction(CHECK_VISIBILITY);
