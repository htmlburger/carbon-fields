/**
 * The external dependencies.
 */
import { compose, withProps, lifecycle } from 'recompose';

/**
 * The default lifecycle hooks that will be attached to each container.
 *
 * @type {Object}
 */
const hooks = {
	componentWillMount() {
		const {
			container,
			meta,
			ui,
			setupContainer
		} = this.props;

		setupContainer(container.id, meta, ui);
	},

	componentWillUnmount() {
		const {
			container,
			teardownContainer
		} = this.props;

		teardownContainer(container.id);
	}
};

/**
 * The default values for the container's meta.
 *
 * @type {Object}
 */
const defaultMeta = {};

/**
 * The default values for the container's UI.
 *
 * @type {Object}
 */
const defaultUI = {
	is_visible: true,
	current_tab: null,
	tabs_in_url: false,
};

/**
 * The factory function that will produce the decorator.
 *
 * @param  {Object}   [meta]
 * @param  {Object}   [ui]
 * @return {Function}
 */
export default function(meta = {}, ui = {}) {
	meta = {
		...defaultMeta,
		...meta,
	};

	ui = {
		...defaultUI,
		...ui,
	};

	return compose(
		withProps({ meta, ui }),
		lifecycle(hooks)
	);
}
