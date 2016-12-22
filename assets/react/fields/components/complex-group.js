import React from 'react';
import { makeField } from 'lib/factory';

/**
 * @param  {Object} props
 * @param  {Object} props.complex
 * @param  {Object} props.group
 * @param  {Number} props.index
 * @return {React.Element}
 *
 * @todo Fix the translation.
 * @todo Fix the custom label.
 */
export const ComplexGroup = ({ complex, group, index }) => {
	return <div id={`carbon-${complex.name}-complex-container`} className="carbon-row carbon-group-row">
		<input
			type="hidden"
			name={`${complex.name}[${index}][group]`}
			defaultValue={group.name} />

		<div className="carbon-drag-handle">
			<span className="group-number">todo</span>

			<span className="group-name"></span>
		</div>

		<div className={`carbon-group-actions carbon-group-actions-${complex.layout}`}>
			<a className="carbon-btn-duplicate dashicons-before dashicons-admin-page" href="#" title="Clone">
				Clone
			</a>

			<a className="carbon-btn-remove dashicons-before dashicons-trash" href="#" title="Remove">
				Remove
			</a>

			<a className="carbon-btn-collapse dashicons-before dashicons-arrow-up" href="#" title="Collapse/Expand">
				Collapse/Expand
			</a>
		</div>

		<div className="fields-container">
			{group.fields.map(({ id, type }) => makeField(type, { id }))}
		</div>
	</div>;
};

export default ComplexGroup;

