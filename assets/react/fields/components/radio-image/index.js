/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import { enhance } from 'fields/components/radio';
import { TYPE_RADIO_IMAGE } from 'fields/constants';

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
export const RadioImageField = ({
	name,
	field,
	handleChange,
	isChecked
}) => {
	return <Field field={field}>
		<div className="carbon-radio-image-list">
			{
				field.options.map((option, index) => (
					<div key={index} className="carbon-radio-image-item">
						<label>
							<input
								type="radio"
								name={name}
								value={option.value}
								checked={isChecked(option)}
								disabled={!field.ui.is_visible}
								onChange={handleChange} />

							<figure className="carbon-radio-image-holder">
								<img src={option.name} />
							</figure>
						</label>
					</div>
				))
			}
		</div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
RadioImageField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		options: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string,
		})),
	}),
	handleChange: PropTypes.func,
};

export default setStatic('type', [
	TYPE_RADIO_IMAGE,
])(enhance(RadioImageField));
