/**
 * External dependencies.
 */
import dropUntil from 'callbag-drop-until';
import distinctUntilChanged from 'callbag-distinct-until-changed';
import { hasFilter, applyFilters } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { withEffects } from 'refract-callbag';
import { debounce } from 'callbag-debounce';
import {
	map,
	merge,
	filter,
	combine,
	pipe,
	take
} from 'callbag-basics';
import empty from 'callbag-empty';

/**
 * Internal dependencies.
 */
import required from './required';

/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} component
 * @param  {Object} props
 * @return {Object}
 */
function aperture( component, props ) {
	if ( ! props.field.required ) {
		return empty;
	}

	const mount$ = component.mount;
	const unmount$ = component.unmount;
	const value$ = component.observe( 'value' );
	const visible$ = component.observe( 'visible' );

	return merge(
		pipe(
			combine( value$, visible$, mount$ ),
			filter( ( [ , visible ] ) => visible ),
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
			debounce( 250 ),
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
			markAsValid,
			lockSaving,
			unlockSaving
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

					lockSaving( id );
				} else {
					if ( ! transient ) {
						markAsValid( id );
					}

					unlockSaving( id );
				}

				break;

			case 'RESET':
				markAsValid( id );

				unlockSaving( id );

				break;
		}
	};
}

const applyWithEffects = withEffects( aperture, { handler } );

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
