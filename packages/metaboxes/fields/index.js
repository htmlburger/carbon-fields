/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import withField from '../hocs/with-field';

/**
 * Connects every field to the store.
 */
addFilter( 'carbon-fields.field-edit.metabox', 'carbon-fields/metaboxes', withField );

import './style.scss';
import './association';
import './checkbox';
import './color';
import './complex';
import './date';
import './datetime';
import './file';
import './footer-scripts';
import './gravity-form';
import './header-scripts';
import './hidden';
import './html';
import './image';
import './map';
import './media-gallery';
import './multiselect';
import './oembed';
import './radio';
import './radio-image';
import './rich-text';
import './select';
import './separator';
import './set';
import './sidebar';
import './text';
import './textarea';
import './time';
