/**
 * The external dependencies.
 */
import { merge, keyBy, mapValues } from 'lodash';

/**
 * The internal dependencies.
 */
import { flattenField } from 'fields/helpers';

/**
 * Change the shape of preloaded state so it can be used easier through Redux.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function normalizePreloadedState(state) {
	let { containers, sidebars } = merge({}, state);
	let fields = [];

	containers = keyBy(containers, 'id');
	containers = mapValues(containers, (container) => {
		container.fields = container.fields.map(field => flattenField(field, fields));

		return container;
	});

	fields = keyBy(fields, 'id');

	return { containers, sidebars, fields };
}
