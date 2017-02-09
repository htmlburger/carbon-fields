/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';
import { trim, find } from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { makeGetSidebarFieldOptions } from 'fields/selectors';
import { addSidebar } from 'sidebars/actions';

/**
 * Render a dropdown field that lists existing sidebars and
 * provides the ability to add new sidebars to the site.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Object[]} props.options
 * @param  {Function} props.handleChange
 * @return {React.Element}
 */
export const SidebarField = ({ name, field, options, handleChange }) => {
	return <Field field={field}>
		<select
			id={field.id}
			name={name}
			value={field.value}
			disabled={!field.ui.is_visible}
			onChange={handleChange}>

			{
				options.map((option) => {
					return <option key={`${field.id}-${option.name}`} value={option.value}>
						{option.name}
					</option>;
				})
			}
		</select>
	</Field>;
};

/**
 * Pass additional props to the component.
 *
 * @return {Function}
 */
const mapStateToProps = () => {
	const getSidebarFieldOptions = makeGetSidebarFieldOptions();

	return (state, props) => ({
		options: getSidebarFieldOptions(state, props.id),
	});
};

/**
 * The additional actions that will be passed to the component.
 *
 * @type {Object}
 */
const mapDispatchToProps = {
	addSidebar,
};

/**
 * The lifecycle hooks that will be attached to the field.
 *
 * @type {Object}
 */
const hooks = {
	componentDidMount() {
		const {
			field,
			ui,
			options,
			setupField,
			updateField,
		} = this.props;

		setupField(field.id, field.type, ui);

		// If the field doesn't have a value,
		// use the first option as fallback.
		if (!field.value) {
			updateField(field.id, {
				value: options[0].value,
			});
		}
	}
};


/**
 * Sync the input value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Object}   props.options
 * @param  {Function} props.updateField
 * @param  {Function} props.addSidebar
 * @return {Function}
 */
const handleChange = ({ field, options, updateField, addSidebar }) => e => {
	let { value } = e.target;

	if (value === 'new') {
		e.preventDefault();

		value = trim(window.prompt(crbl10n.enter_name_of_new_sidebar));

		if (!value) {
			return;
		}

		if (!find(options, { name: value })) {
			addSidebar(value);
		}
	}

	updateField(field.id, { value });
};

export default compose(
	withStore(mapStateToProps, mapDispatchToProps),
	withSetup(hooks),
	withHandlers({ handleChange })
)(SidebarField);
