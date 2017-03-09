/**
 * The external dependencies.
 */
import { get } from 'lodash';

/**
 * The internal dependencies.
 */
import base from 'containers/conditions/base';
import boolean from 'containers/conditions/boolean';

/**
 * The supported conditions.
 *
 * @type {Object}
 */
const conditions = {
	base,
	boolean,
};

/**
 * Walk through the given collection and evaluate the conditions.
 *
 * @param  {Object} collection
 * @param  {Object} env
 * @return {Boolean}
 */
export function walkAndEvaluate(collection, env) {
	const results = collection.conditions.map(definition => {
		if (definition.relation) {
			return walkAndEvaluate(definition, env);
		} else {
			return get(conditions, definition.type, base)
				.isFulfiled(definition, env);
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
