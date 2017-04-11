/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { compose, withHandlers, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { setupMediaBrowser, openMediaBrowser } from 'fields/actions';
import { TYPE_FILE, TYPE_IMAGE, VALIDATION_BASE } from 'fields/constants';

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.openBrowser
 * @param  {Function}      props.clearSelection
 * @return {React.Element}
 *
 * TODO: Replace the inline `style` with a class.
 * TODO: Add support for URL.
 */
export const FileField = ({
	name,
	field,
	openBrowser,
	clearSelection
}) => {
	return <Field field={field}>
		<div className="carbon-attachment">
			<input
				type="text"
				className="regular-text carbon-file-field"
				id={field.id}
				name={name}
				value={field.value}
				style={field.value_type === 'id' ? { display: 'none' } : {}}
				disabled={!field.ui.is_visible}
				onChange={() => {}} />

			<div className={cx('carbon-description', { 'hidden': !field.value })}>
				<div className={cx('carbon-attachment-preview', { 'hidden': !field.thumb_url })}>
					<img src={field.thumb_url} className="thumbnail-image" />

					<div className="carbon-file-remove dashicons-before dashicons-no-alt" onClick={clearSelection}></div>
				</div>

				<div className="carbon-attachment-file-name">{field.file_name}</div>
			</div>

			<span className="button c2_open_media" onClick={openBrowser}>
				{field.button_label}
			</span>
		</div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
FileField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		value_type: PropTypes.string,
		thumb_url: PropTypes.string,
		file_name: PropTypes.string,
		button_label: PropTypes.string,
	}),
	openBrowser: PropTypes.func,
	clearSelection: PropTypes.func,
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
		setupMediaBrowser,
		openMediaBrowser,
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
				setupMediaBrowser,
				updateField,
			} = this.props;

			setupField(field.id, field.type, ui);
			setupMediaBrowser(field.id);

			if (field.required) {
				setupValidation(field.id, VALIDATION_BASE);
			}
		}
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		openBrowser: ({ field, openMediaBrowser }) => () => openMediaBrowser(field.id),
		clearSelection: ({ field, updateField }) => () => {
			updateField(field.id, {
				value: '',
				file_name: '',
				thumb_url: ''
			});
		},
	}),
);

export default setStatic('type', [
	TYPE_FILE,
	TYPE_IMAGE,
])(enhance(FileField));
