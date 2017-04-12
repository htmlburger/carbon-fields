/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import {
	compose,
	branch,
	renderNothing,
	renderComponent,
	withHandlers
} from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render a popover with all groups names when the complex field
 * has more than one group.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.groups
 * @param  {Boolean}       props.visible
 * @param  {Function}      props.handleItemClick
 * @return {React.Element}
 */
export const ComplexPopover = ({
	groups,
	visible,
	handleItemClick
}) => {
	return <ul hidden={!visible}>
		{
			groups.map((group, index) => (
				<li key={index}>
					<a href="#" onClick={handleItemClick(group.name)}>
						{group.label}
					</a>
				</li>
			))
		}
	</ul>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexPopover.propTypes = {
	groups: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		label: PropTypes.string,
	})),
	visible: PropTypes.bool,
	onItemClick: PropTypes.func,
	onClose: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = branch(
	/**
	 * Test to see if the popover should be rendered.
	 */
	({ groups }) => groups.length,

	/**
	 * Render the actual component.
	 */
	compose(
		/**
		 * Pass some handlers to the component.
		 */
		withHandlers({
			handleItemClick: ({ onItemClick, onClose }) => groupName => preventDefault(() => {
				onItemClick(groupName);
				onClose();
			}),

			handleClickOutside: ({ visible, onClose }) => () => visible && onClose(),
		}),

		/**
		 * Handle clicks outside the components.
		 */
		onClickOutside
	),

	/**
	 * Render the empty component.
	 */
	renderNothing
);

export default enhance(ComplexPopover);
