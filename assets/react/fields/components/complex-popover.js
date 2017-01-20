/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import onClickOutside from 'react-onclickoutside';
import { compose, branch, renderNothing, renderComponent, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render a popover with all groups names when the complex field
 * has more than one group.
 *
 * @param  {Object}   props
 * @param  {Object[]} props.groups
 * @param  {Boolean}  props.visible
 * @param  {Function} props.handleItemClick
 * @return {React.Element}
 *
 * @todo Refactor inline style to a CSS class.
 */
export const ComplexPopover = ({ groups, visible, handleItemClick }) => {
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
		name: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	})).isRequired,
	visible: PropTypes.bool,
	onItemClick: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
};

/**
 * Handle the click on the items of the list.
 *
 * @param  {Object}   props
 * @param  {Function} props.onItemClick
 * @param  {Function} props.onClose
 * @return {Function}
 */
const handleItemClick = ({ onItemClick, onClose }) => groupName => preventDefault(() => {
	onItemClick(groupName);
	onClose();
});

/**
 * Hide the popover if the click is outside the element.
 *
 * @param  {Object}   props
 * @param  {Boolean}  props.visible
 * @param  {Function} props.onClose
 * @return {Function}
 */
const handleClickOutside = ({ visible, onClose }) => () => visible && onClose();

export default branch(
	({ groups }) => groups.length > 1,

	renderComponent(
		compose(
			withHandlers({ handleItemClick, handleClickOutside }),
			onClickOutside
		)(ComplexPopover)
	),

	renderNothing,
)();
