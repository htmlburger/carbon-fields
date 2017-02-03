/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions } from 'redux-actions';

/**
 * The internal dependencies.
 */
import { receiveSidebar } from 'sidebars/actions';

/**
 * The reducer that handles the `sidebars` branch.
 */
export default handleActions({
	[receiveSidebar]: (state, { payload }) => immutable.set(state, payload.id, payload),
}, {});