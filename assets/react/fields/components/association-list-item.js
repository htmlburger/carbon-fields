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
 * Renders an item that can be associated.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.item
 * @param  {Boolean}       props.disabled
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 *
 * TODO: Fix the translation of the 'Edit' link.
 * TODO: Clean up the mess in `handleClick` introduced by the incorrect HTML in the template.
 */
export const AssociationListItem = ({ item, disabled, handleClick }) => {
	return <li className={cx({ 'inactive': disabled })}>
		<span className="mobile-handle dashicons-before dashicons-menu"></span>

		<a href="#" onClick={handleClick}>
			{
				item.edit_link
				? <em className="edit-link dashicons-before dashicons-edit">Edit</em>
				: null
			}

			<em>{item.label}</em>

			<span className="add-link dashicons-before dashicons-plus-alt"></span>

			{item.title}

			{
				item.is_trashed
				? <i className="trashed dashicons-before dashicons-trash"></i>
				: null
			}
		</a>
	</li>;
};

/**
 * Handle the click on the different parts of the link.
 *
 * @param  {Object}   props
 * @param  {Object}   props.item
 * @return {Function}
 */
const handleClick = ({ item, onAdd }) => preventDefault((e) => {
	const { target } = e;

	if (target.nodeName === 'SPAN') {
		onAdd(item.id);
	} else if (target.nodeName === 'EM' && target.classList.contains('edit-link')) {
		e.stopPropagation();
		window.open(item.edit_link.replace('&amp;', '&', 'g'), '_blank');
	} else {
		onAdd(item.id);
	}
});

export default withHandlers({ handleClick })(AssociationListItem);
