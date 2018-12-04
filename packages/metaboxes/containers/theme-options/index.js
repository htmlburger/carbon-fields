/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { withEffects } from 'refract-callbag';

/**
 * Internal dependencies.
 */
import fromScrollEvent from '../../utils/from-scroll-event';
import './style.scss';

/**
 * The function that controls the stream of side effects.
 *
 * @return {Function}
 */
function aperture() {
	return function() {
		return fromScrollEvent( window );
	};
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler() {
	return function( windowTopOffset ) {
		const $container = window.jQuery( '.carbon-box:first' );
		const $panel = window.jQuery( '#postbox-container-1' );
		const $bar = window.jQuery( '#wpadminbar' );

		const offset = $bar.height() + 10;
		const threshold = $container.offset().top - offset;

		// In some situations the threshold is negative number because
		// the container element isn't rendered yet.
		if ( threshold > 0 ) {
			$panel
				.toggleClass( 'fixed', windowTopOffset >= threshold )
				.css( 'top', offset );
		}
	};
}

addFilter( 'carbon-fields.theme_options.classic', 'carbon-fields/metaboxes', withEffects( handler )( aperture ) );
