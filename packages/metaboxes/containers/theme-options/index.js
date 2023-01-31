/**
 * External dependencies.
 */
 import { addFilter } from '@wordpress/hooks';
 import { withEffects } from 'refract-callbag';
 import { map, pipe } from 'callbag-basics';
 import fromEvent from 'callbag-from-event';
 
 /**
  * Internal dependencies.
  */
 import './style.scss';
 
 /**
  * The function that controls the stream of side effects.
  *
  * @return {Object}
  */
 function aperture() {
	 return pipe(
		 fromEvent( window, 'scroll' ),
		 map( () => window.jQuery( window ).scrollTop() )
	 );
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
 
 addFilter( 'carbon-fields.theme_options.classic', 'carbon-fields/metaboxes', withEffects( aperture, { handler } ) );
 