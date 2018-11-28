/**
 * External dependencies.
 */
import dropUntil from 'callbag-drop-until';
import distinctUntilChanged from 'callbag-distinct-until-changed';
import { hasFilter, applyFilters } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { withEffects } from 'refract-callbag';
import {
	map,
	merge,
	combine,
	pipe,
	take
} from 'callbag-basics';

/**
 * Internal dependencies.
 */
import required from './required';

/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function aperture( props ) {
	return function( component ) {
		if ( ! props.field.required ) {
			return;
		}

		const mount$ = component.mount;
		const unmount$ = component.unmount;
		const value$ = component.observe( 'value' );

		return merge(
			pipe(
				combine( value$, mount$ ),
				take( 1 ),
				map( ( [ value ] ) => ( {
					type: 'VALIDATE',
					payload: {
						value,
						transient: true
					}
				} ) )
			),

			pipe(
				value$,
				dropUntil( mount$ ),
				distinctUntilChanged(),
				map( ( value ) => ( {
					type: 'VALIDATE',
					payload: {
						value,
						transient: false
					}
				} ) )
			),

			pipe(
				unmount$,
				map( () => ( {
					type: 'RESET'
				} ) )
			)
		);
	};
}

/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */
function handler( props ) {
	return function( effect ) {
		const {
			id,
			field,
			markAsInvalid,
			markAsValid
		} = props;

		switch ( effect.type ) {
			case 'VALIDATE':
				const { value, transient } = effect.payload;

				const hook = `carbon-fields.${ field.type }.validate`;
				const error = hasFilter( hook )
					? applyFilters( hook, field, value )
					: required( value );

				if ( error ) {
					if ( ! transient ) {
						markAsInvalid( id, error );
					}
				} else {
					// eslint-disable-next-line
					if ( ! transient ) {
						markAsValid( id );
					}
				}

				break;

			case 'RESET':
				markAsValid( id );

				break;
		}
	};
}

const applyWithEffects = withEffects( handler )( aperture );

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { markAsValid, markAsInvalid } = dispatch( 'carbon-fields/core' );

	return {
		markAsValid,
		markAsInvalid
	};
} );

export default compose(
	applyWithDispatch,
	applyWithEffects
);
