/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers, withState, branch, renderComponent, withProps } from 'recompose';
import { without } from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { preventDefault } from 'lib/helpers';

/**
 * Render a collection of checkbox inputs.
 *
 * @param  {Object}   props
 * @param  {Object}   props.name
 * @param  {Object}   props.field
 * @param  {Boolean}  props.hasHiddenOptions
 * @param  {Function} props.isChecked
 * @param  {Function} props.isHidden
 * @param  {Function} props.handleChange
 * @param  {Function} props.showAllOptions
 * @return {React.Element}
 *
 * @todo Fix the translation.
 */
export const SetField = ({ name, field, hasHiddenOptions, isChecked, isHidden, handleChange, showAllOptions }) => {
	return <Field field={field}>
		<div className="carbon-set-list">
			{
				field.options.map((option, index) => {
					return <p key={`${field.id}-${option.value}`} hidden={isHidden(index)}>
						<label>
							<input
								type="checkbox"
								name={`${name}[]`}
								value={option.value}
								checked={isChecked(option)}
								onChange={handleChange} />

							{option.name}
						</label>
					</p>;
				})
			}

			<p hidden={hasHiddenOptions}>
				<a href="#" className="carbon-set-showall" onClick={showAllOptions}>
					Show All Options
				</a>
			</p>
		</div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
SetField.propTypes = {
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.arrayOf(PropTypes.string),
		options: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})).isRequired,
	}).isRequired,
	hasHiddenOptions: PropTypes.bool,
	isChecked: PropTypes.func.isRequired,
	isHidden: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	showAllOptions: PropTypes.func.isRequired,
};

/**
 * Additional props that will be passed to the component.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Number}   props.field.limit_options
 * @param  {Object[]} props.field.options
 * @param  {Boolean}  props.expanded
 * @return {Object}
 */
const props = ({ field: { limit_options, options }, expanded }) => ({
	hasHiddenOptions: !(limit_options > 0 && options.length > limit_options) || expanded,
});

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
 * @param  {Object}  props
 * @param  {Object}  props.field
 * @param  {Boolean} props.expanded
 * @return {Function}
 */
const isHidden = ({ field, expanded }) => index => index + 1 > field.limit_options && field.limit_options > 0 && !expanded;

/**
 * Sync the values with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => ({ target }) => {
	updateField(field.id, {
		value: target.checked ? [...field.value, target.value] : without(field.value, target.value)
	});
};

/**
 * Show the hidden options.
 *
 * @param  {Object}   props
 * @param  {Function} props.setExpanded
 * @return {Function}
 */
const showAllOptions = ({ setExpanded }) => preventDefault(() => setExpanded(true));

export default compose(
	withStore(),
	branch(
		({ field: { options } }) => !options.length,

		renderComponent(NoOptions),

		compose(
			withSetup(),
			withState('expanded', 'setExpanded', false),
			withHandlers({ handleChange, isChecked, isHidden, showAllOptions }),
			withProps(props)
		)
	)
)(SetField);
