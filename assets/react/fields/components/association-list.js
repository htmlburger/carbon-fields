/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';

/**
 * The internal dependencies.
 */
import AssociationListItem from 'fields/components/association-list-item';

/**
 * Render a list of item that can be associated.
 *
 * @param  {Object}        props
 * @param  {String}        props.prefix
 * @param  {Object[]}      props.items
 * @param  {Number[]}      props.selected
 * @param  {Number[]}      props.associated
 * @param  {Function}      props.onItemClick
 * @return {React.Element}
 */
export const AssociationList = ({ prefix, items, selected, associated, onItemClick }) => {
	return <ul className="carbon-relationship-list">
		{
			items.map((item, index) => (
				<AssociationListItem
					key={index}
					prefix={prefix}
					index={index}
					item={item}
					disabled={selected.indexOf(item.id) > -1}
					associated={associated}
					onClick={onItemClick} />
			))
		}
	</ul>;
};

/**
 * The default values.
 *
 * @type {Object}
 */
AssociationList.defaultProps = {
	prefix: '',
	selected: [],
	associated: false,
};

export default AssociationList;
