/**
 * External dependencies.
 */
import of from 'callbag-of';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { withEffects, toProps } from 'refract-callbag';
import { trim } from 'lodash';
import {
	map,
	pipe,
	merge
} from 'callbag-basics';

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
			<select
				id={ id }
				name={ name }
				value={ value }
				onChange={ this.handleChange }
			>
				<option value="0" disabled>{ __( 'Please choose', 'carbon-fields-ui' ) }</option>

				{ field.options.map( ( option ) => (
					<option key={ option.value } value={ option.value }>
						{ option.label }
					</option>
				) ) }
			</select>
		);
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} component
 * @return {Object}
 */
function aperture( component ) {
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
				const name = trim( window.prompt( __( 'Please enter the name of the new sidebar:', 'carbon-fields-ui' ) ) );

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
				const errorHandler = () => alert( __( 'An error occurred while trying to create the sidebar.', 'carbon-fields-ui' ) );

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

export default withEffects( aperture, { handler } )( SidebarField );
