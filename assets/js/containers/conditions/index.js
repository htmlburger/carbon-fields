/**
 * The external dependencies.
 */
import { get } from 'lodash';

/**
 * The internal dependencies.
 */
import base from 'containers/conditions/base';
import boolean from 'containers/conditions/boolean';
import post_term from 'containers/conditions/post-term';

/**
 * The supported conditions.
 *
 * @type {Object}
 */
const conditions = {
	base,
	boolean,
	post_term,
};

/**
 * Walk through the given collection and evaluate the conditions.
 *
 * @param  {Object} collection
 * @param  {Object} env
 * @return {Boolean}
 */
export function evaluteConditions(collection, env) {
	const results = collection.conditions.map(definition => {
		if (definition.relation) {
			return evaluteConditions(definition, env);
		} else {
			const condition = get(conditions, definition.type);

			if (condition) {
				return condition.isFulfiled(definition, env);
			} else {
				console.warn(`Unsupported container condition: ${definition.type}`);
				return true;
			}
		}
	});

	if (collection.relation === 'AND') {
		return results.every(Boolean);
	} else if (collection.relation === 'OR') {
		return results.some(Boolean);
	}

	throw new Error(`Unsupported container condition relation used: ${collection.relation}`);
}

export default conditions;
