/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Replace the store's state with the provided object.
 *
 * @param  {Object} state
 * @return {Object}
 */
export const resetStore = createAction('RESET_STORE');
