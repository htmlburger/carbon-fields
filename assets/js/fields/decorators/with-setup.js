/**
 * The external dependencies.
 */
import { lifecycle, defaultProps, compose } from 'recompose';

/**
 * The internal dependencies.
 */
import { VALIDATION_BASE } from 'fields/constants';

/**
 * The default lifecycle hooks that will be attached to each field.
 * Since we use composition instead of inheritance the developer should provide a full
 * implementation for the hook that is being overwritten.
 *
 * @type {Object}
 */
const defaultHooks = {
	componentDidMount() {
		const {
			field,
			ui,
			setupField,
			setupValidation
		} = this.props;

		setupField(field.id, field.type, ui);

		if (field.required) {
			setupValidation(field.id, VALIDATION_BASE);
		}
	},

	componentWillUnmount() {
		const {
			field,
			teardownField
		} = this.props;

		teardownField(field.id);
	},
};

/**
 * The default values for UI of the field.
 *
 * @type {Object}
 */
const defaultUI = {
	is_visible: true,
	valid: true,
	error: null,
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Object} hooks
 * @param  {Object} ui
 * @return {Function}
 */
export default function(hooks = {}, ui = {}) {
	const withLifecycle = lifecycle({
		...defaultHooks,
		...hooks,
	});

	const withDefaultProps = defaultProps({
		ui: {
			...defaultUI,
			...ui,
		},
	});

	return compose(withDefaultProps, withLifecycle);
}
