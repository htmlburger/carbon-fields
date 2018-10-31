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

class SidebarField extends Component {
	/**
	 * Handles the change of the field.
	 *
	 * @param  {string} fieldKey
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( fieldKey, value ) => {
		const { onAdd, onChange } = this.props;

		if ( value !== '__add_new' ) {
			onChange( fieldKey, value );
		} else {
			onAdd( fieldKey );
		}
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			children
		} = this.props;

		if ( ! children ) {
			return null;
		}

		return children( {
			field: field,
			handleChange: this.handleChange
		} );
	}
}

/**
 * The function that controls the stream of side-effects.
 *
 * @return {Function}
 */
function aperture() {
	return function( component ) {
		const [ addSidebar$, addSidebar ] = component.useEvent( 'addSidebar', null );

		const addSidebarProps$ = pipe(
			addSidebar$,
			map( () => toProps( {
				onAdd: addSidebar
			} ) )
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
				const name = trim( window.prompt( 'Please enter the name of the new sidebar:' ) );

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
