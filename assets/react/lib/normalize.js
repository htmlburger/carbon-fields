/* @flow */

import { merge, keyBy } from 'lodash';

/**
 * Change the shape of preloaded state so it can be used easier through Redux.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function normalizePreloadedState(state: Object): Object {
	let { containers, sidebars } = merge({}, state);

	containers = keyBy(containers, 'id');

	return { containers, sidebars };
}
