/* @flow */

import { createAction } from 'redux-actions';

/**
 * Update the value of field.
 *
 * @param  {String} fieldUuid
 * @param  {mixed}  value
 * @return {Object}
 */
export const SET_VALUE = 'fields/SET_VALUE';
export const setValue: Function = createAction(SET_VALUE, (fieldUuid: string, value: any) => ({ fieldUuid, value }));
