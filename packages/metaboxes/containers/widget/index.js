/**
 * External dependencies.
 */
import { select } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { withEffects } from 'refract-callbag';

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * Carbon Fields dependencies.
 */
import { fromSelector } from '@carbon-fields/core';

/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */
function aperture() {
	return fromSelector( select( 'carbon-fields/metaboxes' ).isFieldUpdated );
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler( props ) {
	return function( { action } ) {
		if ( ! action ) {
			return;
		}

		const { container } = props;
		const { payload } = action;

		if ( container.fields.map( ( field ) => field.id ).indexOf( payload.fieldId ) >= 0 ) {
			const $carbonContainer = window.jQuery( `.container-${ container.id }` );

			$carbonContainer.closest( '.widget-inside' ).trigger( 'change' );
		}
	};
}

addFilter( 'carbon-fields.widget.classic', 'carbon-fields/metaboxes', withEffects( aperture, { handler } ) );
