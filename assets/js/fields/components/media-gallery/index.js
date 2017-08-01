/**
 * The external dependencies.
 */
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
	sortBy
} from 'lodash';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import SortableList from 'fields/components/sortable-list';
import MediaGalleryList from 'fields/components/media-gallery/list';
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
	handleRemoveItem
}) => {
	return <Field field={field}>
		<SortableList options={sortableOptions} onSort={handleSortItems}>
			<MediaGalleryList
				prefix={name}
				items={field.value}
				buttonLabel={field.button_label}
				handleOpenBrowser={openBrowser}
				handleRemoveItem={handleRemoveItem}
			/>
		</SortableList>
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
		value: PropTypes.arrayOf(PropTypes.object),
		value_type: PropTypes.string,
		button_label: PropTypes.string,
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
		}
	}),

	/**
	 * Pass some handlers to the component.
	 */
	withHandlers({
		openBrowser: ({ field, openMediaBrowser }) => (item) => {
			// hack -- todo: think of a better way to achieve that
			if ('id' in item) {
				field.selected = item.id;
			}

			openMediaBrowser(field.id);
		},

		handleSortItems: ({ field, setFieldValue }) => newItems => {
			newItems = newItems.map(id => parseInt(id, 10));
			newItems = sortBy(field.value, item => newItems.indexOf(item.id));

			setFieldValue(field.id, newItems);
		},

		handleRemoveItem: ({ field, setFieldValue }) => (item) => {
			setFieldValue(field.id, without(field.value, item));
		},
	}),

	/**
	 * Pass some props to the component.
	 */
	withProps(({ field, collapseComplexGroup }) => {
		const sortableOptions = {
			items: '.carbon-attachment',
			placeholder: 'carbon-attachment ui-placeholder-highlight',
			forcePlaceholderSize: true,
			cancel: '.carbon-attachment-new',
		};

		return {
			sortableOptions,
		};
	}),
);

export default setStatic('type', [
	TYPE_MEDIA_GALLERY,
])(enhance(MediaGalleryField));
