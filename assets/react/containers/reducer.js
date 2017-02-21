/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions } from 'redux-actions';

/**
 * The internal dependencies.
 */
import { decorateContainerReducer } from 'lib/registry';
import { resetStore } from 'store/actions';
import {
	setupContainer,
	addContainer,
	removeContainer,
	setMeta,
	setUI
} from 'containers/actions';

/**
 * The reducer that handles the `containers` branch.
 */
export default decorateContainerReducer(handleActions({
	[setupContainer]: (state, { payload: { containerId, meta, ui } }) => {
		return immutable(state)
			.set(`${containerId}.meta`, meta)
			.set(`${containerId}.ui`, ui)
			.value();
	},
	[addContainer]: (state, { payload }) => immutable.set(state, payload.id, payload),
	[removeContainer]: (state, { payload }) => immutable.del(state, payload),
	[setMeta]: (state, { payload: { containerId, meta }}) => immutable.assign(state, `${containerId}.meta`, meta),
	[setUI]: (state, { payload: { containerId, ui }}) => immutable.assign(state, `${containerId}.ui`, ui),
	[resetStore]: (state, { payload: { containers }}) => containers,
}, {}));
