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
import withField from '../hocs/with-field';
import withConditionalLogic from '../hocs/with-conditional-logic';
import isGutenberg from '../utils/is-gutenberg';

/**
 * Connects every field to the store.
 */
addFilter( 'carbon-fields.field-edit.metabox', 'carbon-fields/metaboxes', compose(
	withField,
	withConditionalLogic,
	withDispatch( ( dispatch ) => {
		if ( isGutenberg() ) {
			const { lockPostSaving, unlockPostSaving } = dispatch( 'core/editor' );

			return {
				lockSaving: lockPostSaving,
				unlockSaving: unlockPostSaving
			};
		}

		const { lockSaving, unlockSaving } = dispatch( 'carbon-fields/metaboxes' );

		return {
			lockSaving,
			unlockSaving
		};
	} ),
	withValidation
) );

import './association';
import './complex';
import './datetime';
import './file';
import './image';
import './multiselect';
import './media-gallery';
import './radio';
import './sidebar';
