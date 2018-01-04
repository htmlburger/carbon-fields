/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

/**
 * Render the 'Add Entry' button.
 *
 * @param  {Object}        props
 * @param  {Boolean}       props.showAddButton
 * @param  {String}        props.addButtonText
 * @param  {React.Element} props.children
 * @param  {Function}      props.addGroup
 * @param  {Function}      props.toggleAll
 * @param  {Boolean}       props.showCollapseAllButton
 * @param  {String}        props.collapseAllButtonText
 * @return {React.Element}
 */
export const ComplexActions = ({
	showAddButton,
	addButtonText,
	addGroup,
	toggleAll,
	showCollapseAllButton,
	collapseAllButtonText,
	children
}) => {
	if ( !showAddButton && !showCollapseAllButton ) {
		return null;
	}

	return <div className="carbon-actions">
		{showAddButton &&
			<div className="carbon-button">
				<a href="#" className="button" onClick={addGroup}>
					{addButtonText}
				</a>

				{children}
			</div>
		}
		{showCollapseAllButton &&
			<div className="carbon-button carbon-button-collapse-all">
				<a href="#" className="button" onClick={toggleAll}>
					{collapseAllButtonText}
				</a>
			</div>
		}
	</div>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
ComplexActions.propTypes = {
	showAddButton: PropTypes.bool,
	addButtonText: PropTypes.string,
	onAddClick: PropTypes.func,
	onToggleAllClick: PropTypes.func,
	showCollapseAllButton: PropTypes.bool,
	collapseAllButtonText: PropTypes.string,
	children: PropTypes.element,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = withHandlers({
	addGroup: ({ onAddClick }) => preventDefault(() => onAddClick()),
	toggleAll: ({ onToggleAllClick }) => preventDefault(() => onToggleAllClick()),
});

export default enhance(ComplexActions);
