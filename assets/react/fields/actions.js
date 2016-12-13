/* @flow */

import { createAction } from 'redux-actions';

/**
 * Perform the initial setup of the container.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const SETUP_FIELD = 'fields/SETUP_FIELD';
export const setupField: Function = createAction(SETUP_FIELD, (fieldId: string, type: string) => ({ fieldId, type }));

/**
 * Update the value of field.
 *
 * @param  {String} fieldId
 * @param  {mixed}  value
 * @return {Object}
 */
export const SET_VALUE = 'fields/SET_VALUE';
export const setValue: Function = createAction(SET_VALUE, (fieldId: string, value: any) => ({ fieldId, value }));

/**
 * Update the field.
 *
 * @param  {String} fieldId
 * @param  {Object} values
 * @return {Object}
 */
export const UPDATE_FIELD = 'fields/UPDATE_FIELD';
export const updateField: Function = createAction(UPDATE_FIELD, (fieldId: string, values: Object) => ({ fieldId, values }));

/**
 * Setup the media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const SETUP_MEDIA_BROWSER = 'fields/SETUP_MEDIA_BROWSER';
export const setupMediaBrowser: Function = createAction(SETUP_MEDIA_BROWSER);

/**
 * Open the built-in media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const OPEN_MEDIA_BROWSER = 'fields/OPEN_MEDIA_BROWSER';
export const openMediaBrowser: Function = createAction(OPEN_MEDIA_BROWSER);
