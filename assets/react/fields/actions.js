/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Perform the initial setup of the container.
 *
 * @param  {String} fieldId
 * @param  {String} type
 * @return {Object}
 */
export const SETUP_FIELD = 'fields/SETUP_FIELD';
export const setupField = createAction(SETUP_FIELD, (fieldId, type) => ({ fieldId, type }));

/**
 * Update the object that contains information about field's UI.
 *
 * @param  {String} fieldId
 * @param  {Object} ui
 * @return {Object}
 */
export const SET_UI = 'fields/SET_UI';
export const setUI = createAction(SET_UI, (fieldId, ui) => ({ fieldId, ui }));

/**
 * Update the field.
 *
 * @param  {String} fieldId
 * @param  {Object} values
 * @return {Object}
 */
export const UPDATE_FIELD = 'fields/UPDATE_FIELD';
export const updateField = createAction(UPDATE_FIELD, (fieldId, values) => ({ fieldId, values }));

/**
 * Setup the interaction between field and WordPress's media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const SETUP_MEDIA_BROWSER = 'fields/SETUP_MEDIA_BROWSER';
export const setupMediaBrowser = createAction(SETUP_MEDIA_BROWSER);

/**
 * Open the built-in media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const OPEN_MEDIA_BROWSER = 'fields/OPEN_MEDIA_BROWSER';
export const openMediaBrowser = createAction(OPEN_MEDIA_BROWSER);

/**
 * Add the field(s) to the store.
 *
 * @param  {Object} fields
 * @return {Object}
 */
export const ADD_FIELDS = 'fields/ADD_FIELDS';
export const addFields = createAction(ADD_FIELDS);

/**
 * Remove the field(s) from the store.
 *
 * @param  {String[]} fields
 * @return {Object}
 */
export const REMOVE_FIELDS = 'fields/REMOVE_FIELDS';
export const removeFields = createAction(REMOVE_FIELDS);

/**
 * Add a new instance of the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupName
 * @return {Object}
 */
export const ADD_COMPLEX_GROUP = 'fields/ADD_COMPLEX_GROUP';
export const addComplexGroup = createAction(ADD_COMPLEX_GROUP, (fieldId, groupName) => ({ fieldId, groupName }));

/**
 * Remove the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
export const REMOVE_COMPLEX_GROUP = 'fields/REMOVE_COMPLEX_GROUP';
export const removeComplexGroup = createAction(REMOVE_COMPLEX_GROUP, (fieldId, groupId) => ({ fieldId, groupId }));
