/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render an item that can be associated.
 *
 * @param  {Object}        props
 * @param  {String}        props.prefix
 * @param  {Number}        props.index
 * @param  {Object[]}      props.item
 * @param  {Boolean}       props.disabled
 * @param  {Boolean}       props.associated
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 *
 * TODO: Fix the translation of the 'Edit' link.
 * TODO: Clean up the mess in `handleClick` introduced by the incorrect HTML in the template.
 */
export const AssociationListItem = ({ prefix, index, item, disabled, associated, handleClick }) => {
	return <li className={cx({ 'inactive': disabled })}>
		<span className="mobile-handle dashicons-before dashicons-menu"></span>

		<a href="#" onClick={handleClick}>
			{
				item.edit_link && !associated
				? <em className="edit-link dashicons-before dashicons-edit">Edit</em>
				: null
			}

			<em>{item.label}</em>

			<span className="dashicons-before dashicons-plus-alt"></span>

			{item.title}

			{
				item.is_trashed
				? <i className="trashed dashicons-before dashicons-trash"></i>
				: null
			}
		</a>

		{
			associated
			? <input
				type="hidden"
				name={`${prefix}[${index}]`}
				value={`${item.type}:${item.subtype}:${item.id}`}
				readOnly={true} />
			: null
		}
	</li>;
};

/**
 * Handle the click on the different parts of the link.
 *
 * @param  {Object}   props
 * @param  {Object}   props.item
 * @param  {Boolean}  props.disabled
 * @param  {Boolean}  props.associated
 * @param  {Function} props.onClick
 * @return {Function}
 */
const handleClick = ({ item, disabled, associated, onClick }) => preventDefault((e) => {
	const { target } = e;

	if (target.nodeName === 'SPAN') {
		onClick(item);
	} if (target.classList.contains('edit-link')) {
		e.stopPropagation();
		window.open(item.edit_link.replace('&amp;', '&', 'g'), '_blank');
	} else {
		if (!associated && !disabled) {
			onClick(item);
		}
	}
});

export default withHandlers({
	handleClick,
})(AssociationListItem);
