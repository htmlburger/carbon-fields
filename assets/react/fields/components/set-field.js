import React from 'react';
import { compose, withHandlers, withState, branch, renderComponent } from 'recompose';
import { without } from 'lodash';
import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/connect-to-store';

/**
 * Render a collection of checkbox inputs.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Boolean}  props.expanded
 * @param  {Function} props.handleInputChange
 * @param  {Function} props.isChecked
 * @param  {Function} props.isExpanderHidden
 * @param  {Function} props.showAllOptions
 * @return {React.Element}
 *
 * @todo Fix the translation.
 */
const SetField = ({ field, expanded, handleInputChange, isChecked, isInputHidden, isExpanderHidden, showAllOptions }) => {
	return <Field field={field}>
		<div className="carbon-set-list">
			{field.options.map((option, index) => {
				return <p key={`${field.id}-${option.value}`} hidden={isInputHidden(index) && !expanded}>
					<label>
						<input
							type="checkbox"
							name={`${field.name}[]`}
							value={option.value}
							checked={isChecked(option)}
							onChange={handleInputChange} />

						{option.name}
					</label>
				</p>;
			})}

			<p hidden={isExpanderHidden() || expanded}>
				<a href="#" className="carbon-set-showall" onClick={showAllOptions}>
					Show All Options
				</a>
			</p>
		</div>
	</Field>;
};

/**
 * Sync the values with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleInputChange = ({ field, updateField }) => ({ target }) => {
	updateField(field.id, {
		value: target.checked ? [...field.value, target.value] : without(field.value, target.value)
	});
};

/**
 * Check if the specified option is checked.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Function}
 */
const isChecked = ({ field }) => option => field.value.indexOf(String(option.value)) > -1;

/**
 * Check whether the input should be hidden.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {Function}
 */
const isInputHidden = ({ field }) => index => index + 1 > field.limit_options && field.limit_options > 0;

/**
 * Check whether the 'Show All Options' link should be visible.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Number}   props.field.limit_options
 * @param  {Object[]} props.field.options
 * @return {Function}
 */
const isExpanderHidden = ({ field: { limit_options, options } }) => () => !(limit_options > 0 && options.length > limit_options);

/**
 * Show the hidden options.
 *
 * @param  {Object}   props
 * @param  {Function} props.setExpanded
 * @return {Function}
 */
const showAllOptions = ({ setExpanded }) => (e) => {
	e.preventDefault();
	setExpanded(true);
};

export default compose(
	withStore(),
	branch(
		({ field: { options } }) => !options.length,

		renderComponent(NoOptions),

		compose(
			withState('expanded', 'setExpanded', false),
			withHandlers({ handleInputChange, isChecked, isInputHidden, isExpanderHidden, showAllOptions })
		)
	)
)(SetField);
