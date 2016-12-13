/* @flow */

import { merge, keyBy, mapValues, pick, map, uniqueId } from 'lodash';
import { TYPE_COMPLEX } from 'fields/constants';

/**
 * Change the shape of preloaded state so it can be used easier through Redux.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function normalizePreloadedState(state: Object): Object {
	let { containers, sidebars } = merge({}, state);
	let fieldsAccumulator: Object[] = [];

	containers = keyBy(containers, 'id');
	containers = mapValues(containers, (container) => {
		container.fields = container.fields.map(field => flatField(field, fieldsAccumulator));

		return container;
	});

	let fields: Object = keyBy(fieldsAccumulator, 'id');

	return { containers, sidebars, fields };
}

/**
 * Convert the specified field into flat shape.
 * WARNING: This function has a side effects.
 *
 * @param  {Object}   field
 * @param  {Object[]} accumulator
 * @return {Object}
 *
 * @todo Assign an unique ID to avoid conflicts.
 */
export function flatField(field: Object, accumulator: Object[]): Object {
	const { value, type } = field;

	if (type === TYPE_COMPLEX) {
		value.forEach((group) => {
			group.fields = group.fields.map((field) => {
				return flatField(field, accumulator);
			});
		});
	}

	field.id = uniqueId('carbon-field-');

	accumulator.push(field);

	return pick(field, 'id', 'type');
}
