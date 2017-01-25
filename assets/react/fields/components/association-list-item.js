/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';

/**
 * Renders an item that can be associated.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.item
 * @return {React.Element}
 *
 * TODO: Fix the translation of the 'Edit' link.
 */
export const AssociationListItem = ({ item }) => {
	return <li>
		<span className="mobile-handle dashicons-before dashicons-menu"></span>

		<a href="#">
			{
				item.edit_link
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
	</li>;
};

export default AssociationListItem;
