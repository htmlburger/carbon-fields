/**
 * External dependencies.
 */
import { Component, Fragment } from '@wordpress/element';
import {
	Toolbar,
	PanelBody,
	ServerSideRender
} from '@wordpress/components';
import { BlockControls, InspectorControls } from '@wordpress/editor';
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
		const { attributes, setAttributes } = this.props;

		const fieldName = fieldId.replace( /^.+__(.+)?$/, '$1' );

		setAttributes( {
			data: {
				...attributes.data,
				[ fieldName ]: value
			}
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
	 * Renders the fields.
	 *
	 * @return {Object}
	 */
	renderFields() {
		const {
			clientId,
			fields,
			attributes
		} = this.props;

		return (
			<div className="cf-block__fields">
				{ fields.map( ( field, index ) => {
					const FieldEdit = getFieldType( field.type, 'block' );

					if ( ! FieldEdit ) {
						return null;
					}

					const id = `cf-${ clientId }__${ field.base_name }`;
					const value = get( attributes.data, field.base_name, field.default_value );

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

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			name,
			attributes,
			supportsPreview
		} = this.props;

		return (
			<Fragment>
				{ supportsPreview && (
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
				) }

				{ this.isInEditMode && this.renderFields() }

				{ this.isInPreviewMode && (
					<div className="cf-block__preview">
						<ServerSideRender block={ name } attributes={ attributes } />
					</div>
				) }

				{ this.isInPreviewMode && (
					<InspectorControls>
						<PanelBody title={ __( 'Fields', 'carbon-fields-ui' ) }>
							{ this.renderFields() }
						</PanelBody>
					</InspectorControls>
				) }
			</Fragment>
		);
	}
}

export default withSelect( ( select, { name } ) => {
	const { hasBlockSupport } = select( 'core/blocks' );
	const { getFieldDefinitionsByBlockName } = select( 'carbon-fields/blocks' );

	return {
		fields: getFieldDefinitionsByBlockName( name ),
		supportsPreview: hasBlockSupport( name, 'preview' )
	};
} )( BlockEdit );
