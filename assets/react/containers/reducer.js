/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions } from 'redux-actions';

/**
 * The internal dependencies.
 */
import { decorateContainerReducer } from 'lib/registry';
import { setMeta, setUI } from 'containers/actions';

/**
 * The reducer that handles the `containers` branch.
 */
export default decorateContainerReducer(handleActions({
	[setMeta]: (state, { payload: { containerId, meta }}) => immutable.assign(state, `${containerId}.meta`, meta),
	[setUI]: (state, { payload: { containerId, ui }}) => immutable.assign(state, `${containerId}.ui`, ui),
}, {}));
