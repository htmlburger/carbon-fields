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
	sortBy,
	isNumber
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
				itemsMeta={field.value_meta}
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
		value: PropTypes.array,
		value_meta: PropTypes.object,
		value_type: PropTypes.string,
		button_label: PropTypes.string,
		selected: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
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

		handleRemoveItem: ({ field, setFieldValue }) => (index) => {
			field.value.splice(index, 1);

			setFieldValue(field.id, field.value);
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
