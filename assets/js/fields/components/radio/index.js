/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	withHandlers,
	branch,
	renderComponent,
	setStatic
} from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_RADIO } from 'fields/constants';

/**
 * Render a radio input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.isChecked
 * @return {React.Element}
 */
export const RadioField = ({
	name,
	field,
	handleChange,
	isChecked
}) => {
	return <Field field={field}>
		<ul className="carbon-radio-list">
			{
				field.options.map((option, index) => (
					<li key={index}>
						<label>
							<input
								type="radio"
								name={name}
								value={option.value}
								checked={isChecked(option)}
								disabled={!field.ui.is_visible}
								onChange={handleChange(option)}
								{...field.attributes} />

							{option.label}
						</label>
					</li>
				))
			}
		</ul>
	</Field>;
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
RadioField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		attributes: PropTypes.object,
		value: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		})),
	}),
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
	withStore(),

	/**
	 * Render "No-Options" component when the field doesn't have options.
	 */
	branch(
		/**
		 * Test to see if the "No-Options" should be rendered.
		 */
		({ field: { options } }) => options && options.length,

		/**
		 * Render the actual field.
		 */
		compose(
			/**
			 * Attach the setup hooks.
			 */
			withSetup(),

			/**
			 * Pass some handlers to the component.
			 */
			withHandlers({
				handleChange: ({ field, setFieldValue }) => ({ value }) => () => setFieldValue(field.id, value),
				isChecked: ({ field }) => option => option.value === field.value,
			})
		),

		/**
		 * Render the empty component.
		 */
		renderComponent(NoOptions)
	)
);

export default setStatic('type', [
	TYPE_RADIO,
])(enhance(RadioField));
