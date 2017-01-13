/**
 * The external dependencies.
 */
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { PropTypes } from 'react';
import { compose, branch, renderNothing, renderComponent, withHandlers } from 'recompose';

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
	const styles = {
		display: visible ? 'block' : 'none'
	};

	return <ul style={styles}>
		{
			groups.map((group, index) => (
				<li key={index}>
					<a href="#" onClick={e => handleItemClick(e, group.name)}>{group.label}</a>
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
const handleItemClick = ({ onItemClick, onClose }) => {
	/**
	 * @inner
	 * @param  {Event}  e
	 * @param  {String} group
	 * @return {void}
	 */
	return (e, group) => {
		e.preventDefault();

		onItemClick(group);
		onClose(e);
	};
};

/**
 * Hide the popover if the click is outside the element.
 *
 * @param  {Object}   props
 * @param  {Function} props.onClose
 * @param  {Boolean}  props.visible
 * @return {Function}
 */
const handleClickOutside = ({ onClose, visible }) => {
	/**
	 * @inner
	 * @param  {Event} e
	 * @return {void}
	 */
	return (e) => {
		// It doesn't make sense to invoke the callback
		// if the popover isn't visible. Also we don't want
		// to trigger unnecessary re-renders in the parent.
		if (visible) {
			onClose(e);
		}
	};
};

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
