/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions } from 'redux-actions';

/**
 * The internal dependencies.
 */
import { decorateSidebarReducer } from 'lib/registry';
import { receiveSidebar } from 'sidebars/actions';

/**
 * The reducer that handles the `sidebars` branch.
 */
export default decorateSidebarReducer(handleActions({
	[receiveSidebar]: (state, { payload }) => immutable.set(state, payload.id, payload),
}, {}));
