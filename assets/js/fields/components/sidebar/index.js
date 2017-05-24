/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, setStatic } from 'recompose';
import { trim, find, kebabCase } from 'lodash';

/**
 * The internal dependencies.
 */
import { addSidebar } from 'sidebars/actions';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { makeGetSidebarFieldOptions } from 'fields/selectors';
import { TYPE_SIDEBAR, VALIDATION_BASE } from 'fields/constants';

/**
 * Render a dropdown field that lists existing sidebars and
 * provides the ability to add new sidebars to the site.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Object[]}      props.options
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const SidebarField = ({
	name,
	field,
	options,
	handleChange
}) => {
	return <Field field={field}>
		<select
			id={field.id}
			name={name}
			value={field.value}
			disabled={!field.ui.is_visible}
			onChange={handleChange} >

			{
				options.map(({ name, value }, index) => (
					<option key={index} value={value}>
						{name}
					</option>
				))
			}
		</select>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
SidebarField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		ui: PropTypes.shape({
			is_visible: PropTypes.bool,
		}),
	}),
	options: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	})),
	handleChange: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(
		() => {
			const getSidebarFieldOptions = makeGetSidebarFieldOptions();

			return (state, props) => ({
				options: getSidebarFieldOptions(state, props.id),
			});
		},

		{
			addSidebar,
		}
	),

	/**
	 * Attach setup hooks.
	 */
	withSetup({
		componentDidMount() {
			const {
				field,
				ui,
				options,
				setupField,
				setupValidation,
				setFieldValue,
			} = this.props;

			setupField(field.id, field.type, ui);

			if (field.required) {
				setupValidation(field.id, VALIDATION_BASE);
			}

			// If the field doesn't have a value,
			// use the first option as fallback.
			if (!field.value) {
				setFieldValue(field.id, options[0].value, 'set', false);
			}
		},
	}),

	/**
	 * The handlers passed to the component.
	 */
	withHandlers({
		handleChange: ({ field, options, setFieldValue, addSidebar }) => ({ target: { value } }) => {
			if (value === 'new') {
				value = trim(window.prompt(carbonFieldsL10n.field.enterNameOfNewSidebar));

				if (!value) {
					return;
				}

				if (!find(options, { name: value })) {
					addSidebar(value);
				}
			}

			value = kebabCase(value);

			setFieldValue(field.id, value);
		},
	})
);

export default setStatic('type', [
	TYPE_SIDEBAR,
])(enhance(SidebarField));
