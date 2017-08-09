/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
	compose,
	withHandlers,
	setStatic,
	withProps
} from 'recompose';
import {
	without,
	sortBy,
	isNumber
} from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { TYPE_MEDIA_GALLERY, VALIDATION_BASE } from 'fields/constants';
import { preventDefault } from 'lib/helpers';

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */
export const EditAttachment = ({
	field,
	attachment,
	attachmentMeta,
	saveAttachment,
	updateEditField,
	onCancel,
}) => {
	return <div className="carbon-edit-attachment">
		<div className="carbon-edit-attachment-inner">
			<div className="carbon-edit-attachment-head">
				<div className="carbon-edit-attachment-thumbnail">
					<img src={ attachmentMeta.thumb_url } />
				</div>

				<div className="carbon-edit-attachment-meta">
					<p><strong>{ attachmentMeta.file_name }</strong></p>

					<p>{ attachmentMeta.date }</p>

					<p>{ attachmentMeta.width } x { attachmentMeta.height } ({ attachmentMeta.filesize })</p>
				</div>
			</div>

			<div className="carbon-edit-attachment-body">
				<fieldset disabled={field.status === 'loading'}>
					<p>
						<label htmlFor="attachment-title">Title</label>

						<input type="text" id="attachment-title" name="title" onChange={ updateEditField } value={ field.edit.title } />
					</p>

					<p>
						<label htmlFor="attachment-caption">Caption</label>

						<textarea id="attachment-caption" name="caption" onChange={ updateEditField } value={ field.edit.caption }></textarea>
					</p>

					<p>
						<label htmlFor="attachment-alt-text">Alt Text</label>

						<input type="text" id="attachment-alt-text" name="alt" onChange={ updateEditField } value={ field.edit.alt } />
					</p>

					<p>
						<label htmlFor="attachment-description">Description</label>

						<textarea id="attachment-description" name="description" onChange={ updateEditField } value={ field.edit.description }></textarea>
					</p>
				</fieldset>
			</div>
		</div>

		<div className="carbon-edit-attachment-footer">
			<button type="button" className="button button-secondary button-medium" onClick={ onCancel }>Cancel</button>

			<span className="carbon-edit-attachment-save">
				{
					field.edit.status === 'loading'
					? <span className="spinner is-active"></span>
					: ''
				}

				<input type="submit" className="button button-primary button-medium" value="Save" onClick={ saveAttachment } />
			</span>
		</div>
	</div>
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
EditAttachment.propTypes = {
	
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		updateEditField: ({ field, updateField }) => (({ target }) => {
			const {
				name,
				value,
			} = target;

			const {
				edit,
			} = field;

			edit[ name ] = value;

			updateField(field.id, {
				edit: edit
			});
		}),

		saveAttachment: ({ field, attachment, attachmentMeta, updateField }) => preventDefault((e) => {
			const {
				edit
			} = field;

			edit.status = 'loading';
			updateField(field.id, { edit });

			let request = $.post(window.ajaxurl, {
				action: 'save-attachment',
				id: attachment,
				nonce: attachmentMeta.edit_nonce,
				changes: {
					title: edit.title,
					alt: edit.alt,
					caption: edit.caption,
					description: edit.description,
				}
			});

			request.done(({ success }) => {
				if (! success) {
					alert( 'An error occured. Please try again later..' );
					return;
				}

				let {
					value_meta
				} = field;

				value_meta[ attachment ].title       = edit.title;
				value_meta[ attachment ].alt         = edit.alt;
				value_meta[ attachment ].caption     = edit.caption;
				value_meta[ attachment ].description = edit.description;

				updateField(field.id, {
					value_meta,
				});
			});

			request.fail(() => {
				alert( 'An error occured. Please try again later..' );
			});

			request.always(() => {
				edit.status = '';

				updateField(field.id, { edit });
			});
		}),
	}),
);

export default enhance(EditAttachment);
