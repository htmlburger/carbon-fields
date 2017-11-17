/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	withHandlers,
	withState,
	branch,
	renderComponent,
	withProps,
	setStatic
} from 'recompose';
import { without } from 'lodash';

/**
 * The internal dependencies.
 */
import { preventDefault } from 'lib/helpers';

import Field from 'fields/components/field';
import NoOptions from 'fields/components/no-options';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_SET } from 'fields/constants';

/**
 * Render a collection of checkbox inputs.
 *
 * @param  {Object}        props
 * @param  {Object}        props.name
 * @param  {Object}        props.field
 * @param  {Boolean}       props.hasHiddenOptions
 * @param  {Function}      props.isChecked
 * @param  {Function}      props.isHidden
 * @param  {Function}      props.handleChange
 * @param  {Function}      props.showAllOptions
 * @return {React.Element}
 */
export const SetField = ({
	name,
	field,
	hasHiddenOptions,
	isChecked,
	isHidden,
	handleChange,
	showAllOptions
}) => {
	return <Field field={field}>
		<div className="carbon-set-list">
			{
				field.options.map((option, index) => {
					return <p key={index} hidden={isHidden(index)}>
						<label>
							<input
								type="checkbox"
								name={`${name}[${index}]`}
								value={option.value}
								checked={isChecked(option)}
								disabled={!field.ui.is_visible}
								onChange={handleChange} />

							{option.label}
						</label>
					</p>;
				})
			}

			<p hidden={hasHiddenOptions}>
				<a href="#" className="carbon-set-showall" onClick={showAllOptions}>
					{carbonFieldsL10n.field.setShowAll}
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
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.arrayOf(PropTypes.string),
		options: PropTypes.arrayOf(PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		})),
	}),
	hasHiddenOptions: PropTypes.bool,
	isChecked: PropTypes.func,
	isHidden: PropTypes.func,
	handleChange: PropTypes.func,
	showAllOptions: PropTypes.func,
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
			 * Add a local state that will track the
			 * "expanded" property.
			 */
			withState('expanded', 'setExpanded', false),

			/**
			 * Pass some handlers to the component.
			 */
			withHandlers({
				handleChange: ({ field, setFieldValue }) => ({ target }) => setFieldValue(field.id,
					target.checked
					? [...field.value, target.value]
					: without(field.value, target.value)
				),

				isChecked: ({ field }) => option => field.value.indexOf(option.value) > -1,
				isHidden: ({ field, expanded }) => index => index + 1 > field.limit_options && field.limit_options > 0 && !expanded,
				showAllOptions: ({ setExpanded }) => preventDefault(() => setExpanded(true)),
			}),

			/**
			 * Pass an additional set of props to the component.
			 */
			withProps(({ field: { limit_options, options }, expanded }) => ({
				hasHiddenOptions: !(limit_options > 0 && options.length > limit_options) || expanded,
			}))
		),

		/**
		 * Render the empty component.
		 */
		renderComponent(NoOptions)
	)
);

export default setStatic('type', [
	TYPE_SET,
])(enhance(SetField));
