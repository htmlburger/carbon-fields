/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, setStatic } from 'recompose';
import { isString } from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import RichTextEditor from 'fields/components/rich-text/editor';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_RICH_TEXT } from 'fields/constants';
import { setupRichTextEditor } from 'fields/actions';

/**
 * Render a field that supports the build-in WYSIWYG editor.
 *
 * @param  {Object} props
 * @param  {String} props.name
 * @param  {Object} props.field
 * @return {React.Element}
 */
export const RichTextField = ({
	name,
	field,
	handleChange
}) => {
	return <Field field={field}>
		<RichTextEditor id={field.id} richEditing={field.rich_editing} onChange={handleChange} ref={ref => {field.richTextEditor = ref;}}>
			<textarea
				id={field.id}
				className="wp-editor-area"
				name={name}
				value={field.value}
				rows={field.rows}
				onChange={handleChange}
				disabled={!field.ui.is_visible}
				{...field.attributes} />
		</RichTextEditor>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
RichTextField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		rows: PropTypes.number,
		attributes: PropTypes.object,
		rich_editing: PropTypes.bool,
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
	withStore(undefined, {
		setupRichTextEditor,
	}),

	/**
	 * Attach the setup hooks.
	 */
	withSetup({
		componentDidMount() {
			const {
				field,
				ui,
				setupField,
				setupValidation,
				setupRichTextEditor,
			} = this.props;

			setupField(field.id, field.type, ui);
			setupRichTextEditor(field.id);

			if (field.required) {
				setupValidation(field.id, VALIDATION_BASE);
			}
		}
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		handleChange: ({ field, setFieldValue }) => eventOrValue => {
			let value;

			if (isString(eventOrValue)) {
				value = eventOrValue;
			} else {
				value = eventOrValue.target.value;
			}

			setFieldValue(field.id, value);
		},
	})
);

export default setStatic('type', [
	TYPE_RICH_TEXT,
])(enhance(RichTextField));
