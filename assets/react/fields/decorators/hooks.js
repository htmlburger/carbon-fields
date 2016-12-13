/* @flow */

import { lifecycle } from 'recompose';

/**
 * The default lifecycle hooks that will be attached to each field.
 * Since we use composition instead of inheritance the developer should provide a full
 * implementation for the hook that is being overwritten.
 *
 * @type {Object}
 */
const defaultHooks: Object = {
	componentDidMount() {
		this.props.setupField(this.props.id, this.props.type);
	}
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Object} hooks
 * @return {Function}
 */
export default function(hooks: ?Object = {}): Function {
	return lifecycle({
		...defaultHooks,
		...hooks,
	});
}
