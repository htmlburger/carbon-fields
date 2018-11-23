/**
 * External dependencies.
 */
import dropUntil from 'callbag-drop-until';
import distinctUntilChanged from 'callbag-distinct-until-changed';
import { applyFilters } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { withEffects } from 'refract-callbag';
import {
	map,
	merge,
	combine,
	pipe,
	take
} from 'callbag-basics';

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
			lockPostSaving,
			unlockPostSaving,
			setValidationError,
			clearValidationError
		} = props;

		switch ( effect.type ) {
			case 'VALIDATE':
				const { value, transient } = effect.payload;

				const error = applyFilters(
					`carbon-fields.${ field.type }.validate`,
					null,
					id,
					field,
					value
				);

				if ( error ) {
					lockPostSaving( id );

					if ( ! transient ) {
						setValidationError( id, error );
					}
				} else {
					unlockPostSaving( id );

					if ( ! transient ) {
						clearValidationError( id );
					}
				}

				break;

			case 'RESET':
				unlockPostSaving( id );

				clearValidationError( id );

				break;
		}
	};
}

const applyWithEffects = withEffects( handler )( aperture );

const applyWithSelect = withSelect( ( select, props ) => ( {
	error: select( 'carbon-fields/blocks' ).getValidationErrorByFieldId( props.id )
} ) );

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { lockPostSaving, unlockPostSaving } = dispatch( 'core/editor' );
	const { setValidationError, clearValidationError } = dispatch( 'carbon-fields/blocks' );

	return {
		lockPostSaving,
		unlockPostSaving,
		setValidationError,
		clearValidationError
	};
} );

export default compose(
	applyWithSelect,
	applyWithDispatch,
	applyWithEffects
);
