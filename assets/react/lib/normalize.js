/* @flow */

import { merge, keyBy, mapValues, map, flatten, pick } from 'lodash';

/**
 * Change the shape of preloaded state so it can be used easier through Redux.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function normalizePreloadedState(state: Object): Object {
	let { containers, sidebars } = merge({}, state);
	let fields = keyBy(flatten(map(containers, 'fields')), 'id');

	containers = keyBy(containers, 'id');
	containers = mapValues(containers, (container) => {
		container.fields = map(container.fields, field => pick(field, 'id', 'type'));

		return container;
	});

	return { containers, sidebars, fields };
}
