/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Carbon Fields dependencies.
 */
import { withValidation } from '@carbon-fields/core';

/**
 * Connects every field to the store.
 */
addFilter( 'carbon-fields.field-edit.block', 'carbon-fields/blocks', withValidation );

/**
 * Internal dependencies.
 */
import './style.scss';
import './association';
import './complex';
import './date';
import './datetime';
import './file';
import './footer-scripts';
import './header-scripts';
import './hidden';
import './image';
import './map';
import './media-gallery';
import './oembed';
import './radio';
import './radio-image';
import './select';
import './set';
import './sidebar';
import './text';
import './textarea';
import './time';
