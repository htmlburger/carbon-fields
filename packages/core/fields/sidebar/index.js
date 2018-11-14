/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { withEffects, toProps } from 'refract-callbag';
import { trim } from 'lodash';
import {
	map,
	pipe,
	merge
} from 'callbag-basics';
import of from 'callbag-of';

/**
 * Internal dependencies.
 */
import FieldBase from '../../components/field-base';

class SidebarField extends Component {
	/**
	 * Handles the change of the field.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const {
			id,
			onAdd,
			onChange
		} = this.props;

		const { value } = e.target;

		if ( value !== '__add_new' ) {
			onChange( id, value );
		} else {
			onAdd( id );
		}
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			name,
			value,
			field
		} = this.props;

		return (
			<FieldBase id={ id } field={ field }>
				<select
					id={ id }
					name={ name }
					value={ value }
					onChange={ this.handleChange }
				>
					<option value="0" disabled>Please choose</option>

					{ field.options.map( ( option ) => (
						<option key={ option.value } value={ option.value }>
							{ option.label }
						</option>
					) ) }
				</select>
			</FieldBase>
		);
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
		const [ addSidebar$, addSidebar ] = component.useEvent( 'addSidebar' );

		const addSidebarProps$ = pipe(
			of( {
				onAdd: addSidebar
			} ),
			map( toProps )
		);

		const addSidebarEffect$ = pipe(
			addSidebar$,
			map( ( fieldKey ) => ( {
				type: 'ADD_SIDEBAR',
				payload: {
					fieldKey
				}
			} ) )
		);

		return merge( addSidebarProps$, addSidebarEffect$ );
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
		switch ( effect.type ) {
			case 'ADD_SIDEBAR':
				/* eslint-disable-next-line no-alert */
				const name = trim( window.prompt( 'Please enter the name of the new sidebar2:' ) );

				if ( ! name ) {
					return;
				}

				const isExisting = props.field.options.some( ( option ) => option.label === name );

				if ( isExisting ) {
					return;
				}

				const request = window.jQuery.post( window.ajaxurl, {
					action: 'carbon_fields_add_sidebar',
					name
				}, null, 'json' );

				/* eslint-disable-next-line no-alert */
				const errorHandler = () => alert( 'An error occurred while trying to create the sidebar.' );

				request.done( ( response ) => {
					if ( response && response.success ) {
						const { onAdded, onChange } = props;

						const sidebar = {
							value: response.data.id,
							label: response.data.name
						};

						onAdded( sidebar );
						onChange( effect.payload.fieldKey, sidebar.value );
					} else {
						errorHandler();
					}
				} );

				request.fail( errorHandler );
				break;
		}
	};
}

export default withEffects( handler )( aperture )( SidebarField );
