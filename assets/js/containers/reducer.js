/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions } from 'redux-actions';
import { get, forEach, isArray, isObject } from 'lodash';

/**
 * The internal dependencies.
 */
import { decorateContainerReducer } from 'lib/registry';
import { resetStore } from 'store/actions';
import {
	setupContainer,
	addContainer,
	removeContainer,
	setContainerUI,
	setContainerMeta,
	switchContainerTab
} from 'containers/actions';

/**
 * Update the state for `meta` or `ui` keys.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @param  {Object} action.payload
 * @param  {String} key
 * @return {Object}
 */
function setMetaOrUI(state, { payload }, key) {
	state = immutable(state);

	forEach(payload, (values, containerId) => {
		forEach(values, (valueData, valueKey) => {
			if (isObject(valueData) && !isArray(valueData)) {
				state = state.assign(`${containerId}.${key}.${valueKey}`, valueData);
			} else {
				state = state.set(`${containerId}.${key}.${valueKey}`, valueData);
			}
		});
	});

	return state.value();
}

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
	[setContainerUI]: (state, action) => setMetaOrUI(state, action, 'ui'),
	[setContainerMeta]: (state, action) => setMetaOrUI(state, action, 'meta'),
	[switchContainerTab]: (state, { payload: { containerId, tabId }}) => immutable.set(state, `${containerId}.ui.current_tab`, tabId),
	[resetStore]: (state, { payload: { containers }}) => containers,
}, {}));
