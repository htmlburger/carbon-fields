/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { Toolbar } from '@wordpress/components';
import { BlockControls } from '@wordpress/editor';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { get } from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { getFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import Field from '../field';

class BlockEdit extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		mode: 'edit'
	};

	/**
	 * Handles the change of the field's value.
	 *
	 * @param  {string} fieldId
	 * @param  {mixed}  value
	 * @return {void}
	 */
	handleFieldChange = ( fieldId, value ) => {
		const fieldName = fieldId.replace( /^.+__(.+)?$/, '$1' );

		this.props.setAttributes( {
			[ fieldName ]: value
		} );
	}

	/**
	 * Handles changing of the mode.
	 *
	 * @return {void}
	 */
	handleModeChange = () => {
		this.setState( {
			mode: this.isInEditMode ? 'preview' : 'edit'
		} );
	}

	/**
	 * Returns whether the block is in edit mode.
	 *
	 * @return {boolean}
	 */
	get isInEditMode() {
		return this.state.mode === 'edit';
	}

	/**
	 * Returns whether the block is in edit mode.
	 *
	 * @return {boolean}
	 */
	get isInPreviewMode() {
		return this.state.mode === 'preview';
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			clientId,
			fields,
			attributes
		} = this.props;

		return (
			<div className="cf-block__fields">
				<BlockControls>
					<Toolbar controls={ [ {
						icon: this.isInEditMode
							? 'visibility'
							: 'hidden',
						title: this.isInEditMode
							? __( 'Show preview', 'carbon-fields-ui' )
							: __( 'Hide preview', 'carbon-fields-ui' ),
						onClick: this.handleModeChange
					} ] } />
				</BlockControls>

				{ fields.map( ( field, index ) => {
					const FieldEdit = getFieldType( field.type, 'block' );

					if ( ! FieldEdit ) {
						return null;
					}

					const id = `cf-${ clientId }__${ field.base_name }`;
					const value = get( attributes, field.base_name );

					return (
						<Field
							key={ index }
							id={ id }
							field={ field }
						>
							<FieldEdit
								id={ id }
								blockId={ clientId }
								value={ value }
								field={ field }
								onChange={ this.handleFieldChange }
							/>
						</Field>
					);
				} ) }
			</div>
		);
	}
}

export default withSelect( ( select, ownProps ) => {
	const { getFieldDefinitionsByBlockName } = select( 'carbon-fields/blocks' );

	return {
		fields: getFieldDefinitionsByBlockName( ownProps.name )
	};
} )( BlockEdit );
