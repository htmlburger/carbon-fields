/**
 * The external dependencies.
 */
import { get } from 'lodash';

/**
 * The internal dependencies.
 */
import base from 'containers/conditions/base';
import boolean from 'containers/conditions/boolean';
import post_parent_id from 'containers/conditions/post-parent-id';
import post_ancestor_id from 'containers/conditions/post-ancestor-id';
import post_format from 'containers/conditions/post-format';
import post_level from 'containers/conditions/post-level';
import post_template from 'containers/conditions/post-template';
import post_term from 'containers/conditions/post-term';

import term_level from 'containers/conditions/term-level';
import term_parent from 'containers/conditions/term-parent';
import term_ancestor from 'containers/conditions/term-ancestor';

import user_role from 'containers/conditions/user-role';

/**
 * The supported conditions.
 *
 * @type {Object}
 */
const conditions = {
	base,
	boolean,

	post_parent_id,
	post_ancestor_id,
	post_format,
	post_level,
	post_template,
	post_term,

	term_level,
	term_parent,
	term_ancestor,

	user_role,
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

	if (collection.relation == 'AND') {
		return results.every(Boolean);
	} else if (collection.relation == 'OR') {
		return results.some(Boolean);
	}

	throw new Error(`Unsupported container condition relation used: ${collection.relation}`);
}

export default conditions;
