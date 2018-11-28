/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

/**
 * Carbon Fields dependencies.
 */
import { withValidation } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import withField from '../hocs/with-field';

/**
 * Connects every field to the store.
 */
addFilter( 'carbon-fields.field-edit.metabox', 'carbon-fields/metaboxes', compose(
	withField,
	withValidation
) );

import './style.scss';
import './complex';
import './date';
import './datetime';
import './file';
import './image';
import './media-gallery';
import './radio';
import './radio-image';
import './sidebar';
import './time';
