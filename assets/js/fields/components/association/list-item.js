/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
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
 * @param  {Boolean}       props.associated
 * @param  {Boolean}       props.visible
 * @param  {Function}      props.handleClick
 * @return {React.Element}
 *
 * TODO: Clean up the mess in `handleClick` introduced by the incorrect HTML in the template.
 */
export const AssociationListItem = ({
	prefix,
	index,
	item,
	associated,
	visible,
	handleClick
}) => {
	return <li id={item.id} className={cx({ 'inactive': item.disabled })}>
		<span className="mobile-handle dashicons-before dashicons-menu"></span>

		<a href="#" onClick={handleClick}>
			{
				item.edit_link && !associated
				? <em className="edit-link dashicons-before dashicons-edit"></em>
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
				disabled={!visible}
				readOnly={true} />
			: null
		}
	</li>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 *
 * TODO: Fix the type of the `id` attribute to be consistent.
 */
AssociationListItem.propTypes = {
	prefix: PropTypes.string,
	index: PropTypes.number,
	item: PropTypes.shape({
		id: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		label: PropTypes.string,
		title: PropTypes.string,
		type: PropTypes.string,
		subtype: PropTypes.string,
		edit_link: PropTypes.string,
	}),
	associated: PropTypes.bool,
	visible: PropTypes.bool,
	handleClick: PropTypes.func,
};

const enhance = withHandlers({
	handleClick: ({ item, associated, onClick }) => preventDefault((e) => {
		const { target } = e;

		if (target.nodeName === 'SPAN') {
			onClick(item);
		} if (target.classList.contains('edit-link')) {
			e.stopPropagation();
			window.open(item.edit_link.replace('&amp;', '&', 'g'), '_blank');
		} else {
			if (!associated && !item.disabled) {
				onClick(item);
			}
		}
	}),
});

export default enhance(AssociationListItem);
