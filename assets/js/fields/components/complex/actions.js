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
 * @param  {String}        props.addButtonText
 * @param  {String}        props.collapseAllButtonText
 * @param  {React.Element} props.children
 * @param  {Function}      props.addGroup
 * @param  {Function}      props.toggleAll
 * @return {React.Element}
 */
export const ComplexActions = ({
	addButtonText,
	showCollapseAll,
	collapseAllButtonText,
	children,
	addGroup,
	toggleAll
}) => {
	return <div className="carbon-actions">
		<div className="carbon-button">
			<a href="#" className="button" onClick={addGroup}>
				{addButtonText}
			</a>

			{children}
		</div>
		{showCollapseAll &&
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
	addButtonText: PropTypes.string,
	showCollapseAll: PropTypes.bool,
	collapseAllButtonText: PropTypes.string,
	onAddClick: PropTypes.func,
	onToggleAllClick: PropTypes.func,
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
