/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
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
	onCancelClick,
	handleSelect,
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

					{
						(() => {
							if ( attachmentMeta.file_type === 'image' ) {
								return <p>{ attachmentMeta.width } x { attachmentMeta.height } ({ attachmentMeta.filesize })</p>;
							} else if ( attachmentMeta.file_type === 'audio' ) {
								return <p>Length: { attachmentMeta.length }</p>;
							}
						})()
					}

				</div>
			</div>

			<div className="carbon-edit-attachment-body">
				<fieldset disabled={field.status === 'loading'}>
					<p>
						<label htmlFor="attachment-url">{ carbonFieldsL10n.field.editAttachmentUrl }</label>

						<input type="text" id="attachment-url" name="url" value={attachmentMeta.file_url} readOnly onFocus={ handleSelect } />
					</p>

					<p>
						<label htmlFor="attachment-title">{ carbonFieldsL10n.field.editAttachmentTitle }</label>

						<input type="text" id="attachment-title" name="title" onChange={ updateEditField } value={ field.edit.title } />
					</p>

					{
						(() => {
							if ( attachmentMeta.file_type === 'audio' ) {
								return <p>
									<label htmlFor="attachment-artist">{ carbonFieldsL10n.field.editAttachmentArtist }</label>

									<input type="text" id="attachment-artist" name="artist" onChange={ updateEditField } value={ field.edit.artist } />
								</p>;
							}
						})()
					}

					{
						(() => {
							if ( attachmentMeta.file_type === 'audio' ) {
								return <p>
									<label htmlFor="attachment-album">{ carbonFieldsL10n.field.editAttachmentAlbum }</label>

									<input type="text" id="attachment-album" name="album" onChange={ updateEditField } value={ field.edit.album } />
								</p>;
							}
						})()
					}

					<p>
						<label htmlFor="attachment-caption">{ carbonFieldsL10n.field.editAttachmentCaption }</label>

						<textarea id="attachment-caption" name="caption" onChange={ updateEditField } value={ field.edit.caption }></textarea>
					</p>

					{
						(() => {
							if ( attachmentMeta.file_type === 'image' ) {
								return <p>
									<label htmlFor="attachment-alt-text">{ carbonFieldsL10n.field.editAttachmentAlt }</label>

									<input type="text" id="attachment-alt-text" name="alt" onChange={ updateEditField } value={ field.edit.alt } />
								</p>
							}
						})()
					}

					<p>
						<label htmlFor="attachment-description">{ carbonFieldsL10n.field.editAttachmentDescription }</label>

						<textarea id="attachment-description" name="description" onChange={ updateEditField } value={ field.edit.description }></textarea>
					</p>
				</fieldset>
			</div>
		</div>

		<div className="carbon-edit-attachment-footer">
			<button type="button" className="button button-secondary button-medium" onClick={ onCancelClick }>{ carbonFieldsL10n.field.editAttachmentClose }</button>

			<span className="carbon-edit-attachment-save">
				{
					field.edit.status === 'loading'
					? <span className="spinner is-active"></span>
					: ''
				}

				<input type="submit" className="button button-primary button-medium" value={carbonFieldsL10n.field.editAttachmentSave} onClick={ saveAttachment } />
			</span>
		</div>
	</div>
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
const enhance = withHandlers({
	onCancelClick: ({ handleCancelEdit }) => preventDefault((e) => {
		handleCancelEdit();
	}),

	handleSelect: () => (({ target }) => {
		target.select();
	}),

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

		const {
			file_type
		} = attachmentMeta;

		edit.status = 'loading';
		updateField(field.id, { edit });

		let postData = {
			action: 'save-attachment',
			id: attachment,
			nonce: attachmentMeta.edit_nonce,
			changes: {
				title: edit.title,
				caption: edit.caption,
				description: edit.description,
			}
		};

		if (file_type === 'image') {
			postData.changes.alt = edit.alt;
		}

		if (file_type === 'audio') {
			postData.changes.artist = edit.artist;
			postData.changes.album  = edit.album;
		}

		let request = $.post(window.ajaxurl, postData);

		request.done(({ success }) => {
			if (! success) {
				alert( 'An error occured. Please try again later..' );
				return;
			}

			let {
				value_meta
			} = field;

			value_meta[ attachment ].title       = edit.title;
			value_meta[ attachment ].caption     = edit.caption;
			value_meta[ attachment ].description = edit.description;

			if (file_type === 'image') {
				value_meta[ attachment ].alt = edit.alt;
			}

			if (file_type === 'audio') {
				value_meta[ attachment ].artist = edit.artist;
				value_meta[ attachment ].album  = edit.album;
			}

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
});

export default enhance(EditAttachment);
