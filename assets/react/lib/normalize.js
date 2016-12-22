import { merge, keyBy, mapValues, pick, map, uniqueId } from 'lodash';
import { TYPE_COMPLEX } from 'fields/constants';

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
		container.fields = container.fields.map(field => flatField(field, fields));

		return container;
	});

	fields = keyBy(fields, 'id');

	return { containers, sidebars, fields };
}

/**
 * Convert the specified field into flat shape.
 * WARNING: This function has side effects.
 *
 * @param  {Object}   field
 * @param  {Object[]} accumulator
 * @return {Object}
 *
 * @todo Abstract the manipulation of group so it can be reused.
 */
export function flatField(field, accumulator) {
	const { value, type } = field;

	field.id = uniqueId('carbon-field-');

	if (type === TYPE_COMPLEX) {
		value.forEach((group, index) => {
			group.id = `${field.id}-${index}`;

			group.fields = group.fields.map((groupField) => {
				groupField.name = `${field.name}[${index}][${groupField.name}]`;

				return flatField(groupField, accumulator);
			});
		});
	}

	accumulator.push(field);

	return pick(field, 'id', 'type');
}
