/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';

/**
 * The internal dependencies.
 */
import AssociationListItem from 'fields/components/association-list-item';

/**
 * Renders a list of item that can be associated.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.items
 * @param  {Number[]}      props.disabled
 * @param  {Function}      props.onAdd
 * @return {React.Element}
 */
export const AssociationList = ({ items, disabled, onAdd }) => {
	return <ul className="carbon-relationship-list">
		{
			items.map((item, index) => (
				<AssociationListItem
					key={index}
					item={item}
					disabled={disabled.indexOf(item.id) > -1}
					onAdd={onAdd} />
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
	disabled: [],
};

export default AssociationList;
