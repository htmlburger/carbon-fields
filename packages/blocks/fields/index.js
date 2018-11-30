/**
 * External dependencies.
 */
import { compose } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { withDispatch } from '@wordpress/data';

/**
 * Carbon Fields dependencies.
 */
import { withValidation } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import withConditionalLogic from '../hocs/with-conditional-logic';

/**
 * Connects every field to the store.
 */
addFilter( 'carbon-fields.field-edit.block', 'carbon-fields/blocks', compose(
	withDispatch( ( dispatch ) => {
		const { lockPostSaving, unlockPostSaving } = dispatch( 'core/editor' );

		return {
			lockSaving: lockPostSaving,
			unlockSaving: unlockPostSaving
		};
	} ),
	withValidation,
	withConditionalLogic
) );

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
