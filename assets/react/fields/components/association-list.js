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
 * @return {React.Element}
 */
export const AssociationList = ({ items }) => {
	return <ul className="carbon-relationship-list">
		{
			items.map((item, index) => <AssociationListItem key={index} item={item} />)
		}
	</ul>;
};

export default AssociationList;
