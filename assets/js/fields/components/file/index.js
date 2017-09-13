/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { compose, withHandlers, setStatic, pure } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { setupMediaBrowser, openMediaBrowser, destroyMediaBrowser } from 'fields/actions';
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
 */
export const FileField = ({
	name,
	field,
	openBrowser,
	clearSelection
}) => {
	let buttonLabel = carbonFieldsL10n.field.fileButtonLabel;

	if (field.type === 'image') {
		buttonLabel = carbonFieldsL10n.field.imageButtonLabel;
	}

	return <Field field={field}>
		<div className="carbon-attachment">
			<input
				type="hidden"
				id={field.id}
				name={name}
				value={field.value}
				disabled={!field.ui.is_visible}
				readOnly />

			<div className={cx('carbon-description', { 'hidden': !field.value })}>
				<div className={cx('carbon-attachment-preview', { 'hidden': !field.value_meta.thumb_url })}>
					<img src={field.value_meta.thumb_url} className="thumbnail-image" />

					<div className="carbon-file-remove dashicons-before dashicons-no-alt" onClick={clearSelection}></div>
				</div>

				<input
					type="text"
					className="carbon-attachment-file-name"
					value={field.value_meta.file_url ? field.value_meta.file_url : ''}
					readOnly />
			</div>

			<span className="button" onClick={openBrowser}>
				{buttonLabel}
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
		value_meta: PropTypes.shape({
			thumb_url: PropTypes.string,
			file_url: PropTypes.string,
			file_name: PropTypes.string,
		}),
		value_type: PropTypes.string,
		preview: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
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
		destroyMediaBrowser
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
			} = this.props;

			setupField(field.id, field.type, ui);
			setupMediaBrowser(field.id);

			if (field.required) {
				setupValidation(field.id, VALIDATION_BASE);
			}
		},

		componentWillUnmount() {
			this.props.destroyMediaBrowser(this.props.field.id);
		}
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		openBrowser: ({ field, openMediaBrowser }) => () => openMediaBrowser(field.id),
		clearSelection: ({ field, setFieldValue }) => () => {
			setFieldValue(field.id, '');
		},
	}),
);

export default setStatic('type', [
	TYPE_FILE,
	TYPE_IMAGE,
])(enhance(FileField));
