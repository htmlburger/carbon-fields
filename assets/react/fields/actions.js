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
export const setupField = createAction('fields/SETUP_FIELD', (fieldId, type) => ({ fieldId, type }));

/**
 * Update the object that contains information about field's UI.
 *
 * @param  {String} fieldId
 * @param  {Object} ui
 * @return {Object}
 */
export const setUI = createAction('fields/SET_UI', (fieldId, ui) => ({ fieldId, ui }));

/**
 * Update the field.
 *
 * @param  {String} fieldId
 * @param  {Object} data
 * @return {Object}
 */
export const updateField = createAction('fields/UPDATE_FIELD', (fieldId, data) => ({ fieldId, data }));

/**
 * Setup the interaction between field and WordPress's media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const setupMediaBrowser = createAction('fields/SETUP_MEDIA_BROWSER');

/**
 * Open the built-in media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const openMediaBrowser = createAction('fields/OPEN_MEDIA_BROWSER');

/**
 * Add the field(s) to the store.
 *
 * @param  {Object} fields
 * @return {Object}
 */
export const addFields = createAction('fields/ADD_FIELDS');

/**
 * Remove the field(s) from the store.
 *
 * @param  {String[]} fields
 * @return {Object}
 */
export const removeFields = createAction('fields/REMOVE_FIELDS');

/**
 * Add a new instance of the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupName
 * @return {Object}
 */
export const addComplexGroup = createAction('fields/ADD_COMPLEX_GROUP', (fieldId, groupName) => ({ fieldId, groupName }));

/**
 * Create a clone of the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
export const cloneComplexGroup = createAction('fields/CLONE_COMPLEX_GROUP', (fieldId, groupId) => ({ fieldId, groupId }));

/**
 * Remove the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
export const removeComplexGroup = createAction('fields/REMOVE_COMPLEX_GROUP', (fieldId, groupId) => ({ fieldId, groupId }));

/**
 * Process the address through Google's geocoding service.
 *
 * @param  {String} fieldId
 * @param  {String} address
 * @return {Object}
 */
export const geocodeAddress = createAction('fields/GEOCODE_ADDRESS', (fieldId, address) => ({ fieldId, address }));
