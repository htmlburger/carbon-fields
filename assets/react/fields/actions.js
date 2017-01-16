/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Perform the initial setup of the container.
 *
 * @param  {String} id
 * @param  {String} type
 * @return {Object}
 */
export const SETUP_FIELD = 'fields/SETUP_FIELD';
export const setupField = createAction(SETUP_FIELD, (id, type) => ({ id, type }));

/**
 * Update the object that contains information about field's UI.
 *
 * @param  {String} id
 * @param  {Object} ui
 * @return {Object}
 */
export const SET_UI = 'fields/SET_UI';
export const setUI = createAction(SET_UI, (id, ui) => ({ id, ui }));

/**
 * Update the field.
 *
 * @param  {String} id
 * @param  {Object} values
 * @return {Object}
 */
export const UPDATE_FIELD = 'fields/UPDATE_FIELD';
export const updateField = createAction(UPDATE_FIELD, (id, values) => ({ id, values }));

/**
 * Setup the interaction between field and WordPress's media browser.
 *
 * @param  {String} id
 * @return {Object}
 */
export const SETUP_MEDIA_BROWSER = 'fields/SETUP_MEDIA_BROWSER';
export const setupMediaBrowser = createAction(SETUP_MEDIA_BROWSER);

/**
 * Open the built-in media browser.
 *
 * @param  {String} id
 * @return {Object}
 */
export const OPEN_MEDIA_BROWSER = 'fields/OPEN_MEDIA_BROWSER';
export const openMediaBrowser = createAction(OPEN_MEDIA_BROWSER);

/**
 * Add field(s) to the store.
 *
 * @param  {Object} fields
 * @return {Object}
 */
export const ADD_FIELDS = 'fields/ADD_FIELDS';
export const addFields = createAction(ADD_FIELDS);

/**
 * Add a new instance of the specified complex group.
 *
 * @param  {String} id
 * @param  {String} group
 * @return {Object}
 */
export const ADD_COMPLEX_GROUP = 'fields/ADD_COMPLEX_GROUP';
export const addComplexGroup = createAction(ADD_COMPLEX_GROUP, (id, group) => ({ id, group }));
