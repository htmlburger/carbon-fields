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
import MediaGalleryList from 'fields/components/media-gallery/list';
import EditAttachment from 'fields/components/media-gallery/edit-attachment';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';
import { setupMediaBrowser, openMediaBrowser } from 'fields/actions';
import { TYPE_MEDIA_GALLERY, VALIDATION_BASE } from 'fields/constants';

/**
 * Render a file upload field with a preview thumbnail of the uploaded file.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.openBrowser
 * @param  {Function}      props.handleRemoveItem
 * @return {React.Element}
 */
export const MediaGalleryField = ({
	name,
	field,
	openBrowser,
	sortableOptions,
	handleSortItems,
	handleRemoveItem,
	openEditAttachment,
	closeEditAttachment,
	updateField,
}) => {
	return <Field field={field}>
		<div className="carbon-media-gallery">
			<MediaGalleryList
				prefix={name}
				items={field.value}
				itemsMeta={field.value_meta}
				handleOpenBrowser={openBrowser}
				handleEditItem={openEditAttachment}
				handleRemoveItem={handleRemoveItem}
				openBrowser={openBrowser}
				field={field}
				sortableOptions={sortableOptions}
				onSort={handleSortItems}
			/>

			{
				(field.editMode === 'inline' && field.selected) ?
				<EditAttachment
					field={field}
					attachment={field.selected}
					attachmentMeta={field.value_meta[ field.selected ]}
					updateField={updateField}
					handleCancelEdit={closeEditAttachment}
				/> : ''
			}
		</div>
	</Field>;
};

/**
 * Validate the props.
 *
 * @type {Object}
 */
MediaGalleryField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		value: PropTypes.array,
		value_meta: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.object,
		]),
		value_type: PropTypes.string,
		duplicates_allowed: PropTypes.boolean,
		selected: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		editMode: PropTypes.string,
		edit: PropTypes.shape({
			id: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]),
			title: PropTypes.string,
			caption: PropTypes.string,
			alt: PropTypes.string,
			description: PropTypes.string,
			artist: PropTypes.string,
			album: PropTypes.string,
		}),
	}),
	openBrowser: PropTypes.func,
	handleRemoveItem: PropTypes.func,
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
			} = this.props;

			setupField(field.id, field.type, ui);
			setupMediaBrowser(field.id);

			if (field.required) {
				setupValidation(field.id, VALIDATION_BASE);
			}
		},
	}),

	/**
	 * Component Handlers.
	 */
	withHandlers({
		resetCurrentlyEditedAttachment: ({ field, updateField }) => () => {
			updateField(field.id, {
				selected: null,
				edit: {
					id: '',
					title: '',
					alt: '',
					caption: '',
					description: '',
					artist: '',
					album: '',
				}
			})
		},
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		openBrowser: ({ field, openMediaBrowser }) => (index) => {
			if (isNumber(index)) {
				field.selected = index;
			}

			openMediaBrowser(field.id);
		},

		handleSortItems: ({ field, setFieldValue }) => newItems => {
			newItems = newItems.map(item => parseInt(item, 10));

			let index = -1;
			let newValue = sortBy(field.value, (item) => {
				index++;

				return newItems.indexOf(index);
			});

			setFieldValue(field.id, newValue);
		},

		handleRemoveItem: ({ field, setFieldValue, resetCurrentlyEditedAttachment }) => (index) => {
			field.value.splice(index, 1);

			setFieldValue(field.id, field.value);

			resetCurrentlyEditedAttachment();
		},

		openEditAttachment: ({ field, updateField, openMediaBrowser }) => (item) => {
			const $container = $(`#${field.parent}`);

			// For big containers and non-mobile devices, use the inline edit
			// Otherwise, fallback to Media Browser

			if ( $container.outerWidth() > 767 ) {
				const attachmentMeta = field.value_meta[ item ];

				updateField(field.id, {
					selected: item,
					editMode: 'inline',
					edit: {
						id: parseInt(item, 10),
						title: attachmentMeta.title,
						alt: attachmentMeta.alt,
						caption: attachmentMeta.caption,
						description: attachmentMeta.description,
						artist: attachmentMeta.artist || '',
						album: attachmentMeta.album || '',
					}
				});
			} else {
				updateField(field.id, {
					selected: item,
					editMode: 'modal',
				});

				openMediaBrowser(field.id);
			}
		},

		closeEditAttachment: ({ resetCurrentlyEditedAttachment }) => () => {
			resetCurrentlyEditedAttachment();
		}
	}),

	/**
	 * Pass some props to the component.
	 */
	withProps(({ field, collapseComplexGroup }) => {
		const sortableOptions = {
			handle: '.carbon-description',
			items: '.carbon-media-gallery-list-item',
			placeholder: 'carbon-media-gallery-list-item ui-placeholder-highlight',
			forcePlaceholderSize: true,
		};

		return {
			sortableOptions,
		};
	}),
);

export default setStatic('type', [
	TYPE_MEDIA_GALLERY,
])(enhance(MediaGalleryField));
