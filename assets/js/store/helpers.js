/**
 * The external dependencies.
 */
import { merge, keyBy, endsWith } from 'lodash';

/**
 * The internal dependencies.
 */
import { flattenField } from 'fields/helpers';
import { PARENT_TYPE_CONTAINER } from 'fields/constants';

/**
 * Transform the shape of the given state to be more Redux friendly.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function normalizePreloadedState(state) {
	// Create a safe copy of the state.
	let { containers, sidebars } = merge({}, state);
	let fields = [];

	// Remove the placeholder containers(e.g on `Widgets` page).
	containers = containers.filter(({ id }) => !endsWith(id, '__i__'));

	// Extract the container's fields to a flat list.
	containers = containers.map((container) => {
		container.fields = container.fields.map(field => flattenField(field, container, PARENT_TYPE_CONTAINER, fields));

		return container;
	});

	// Convert the list to a map.
	containers = keyBy(containers, 'id');
	sidebars = keyBy(sidebars, 'id');
	fields = keyBy(fields, 'id');

	return { containers, sidebars, fields };
}
