/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a field that allows to create links between posts, taxonomy terms,
 * users or comments.
 *
 * @param  {Object} props
 * @param  {String} props.name
 * @param  {Object} props.field
 * @return {React.Element}
 *
 * TODO: Fix the translation of the labels.
 */
export const AssociationField = ({ name, field }) => {
	return <Field field={field}>
		<div className="carbon-relationship-container carbon-Relationship">
			<div className="selected-items-container">
				<strong>
					<span className="selected-counter">{field.value.length}</span>

					<span className="selected-label">
						{
							field.value.length !== 1
							? ' selected items'
							: ' selected item'
						}
					</span>

					{
						field.max !== -1
						? <span className="remaining"> out of {field.max}</span>
						: null
					}
				</strong>
			</div>

			<div className="search-field carbon-relationship-search dashicons-before dashicons-search">
				<input type="text" className="search-field" placeholder="Search..." />
			</div>

			<div className="carbon-relationship-body">
				<div className="carbon-relationship-left">
					<ul className="carbon-relationship-list">

					</ul>
				</div>

				<div className="carbon-relationship-right">
					<label>Associated:</label>

					<ul className="carbon-relationship-list">
					</ul>
				</div>
			</div>
		</div>
	</Field>;
};

export default compose(
	withStore(),
	withSetup()
)(AssociationField);
