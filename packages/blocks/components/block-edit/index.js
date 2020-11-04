/**
 * External dependencies.
 */
import cx from 'classnames';
import { Component, Fragment } from '@wordpress/element';
import { Toolbar, PanelBody } from '@wordpress/components';
import {
	InnerBlocks,
	BlockControls,
	InspectorControls
} from '@wordpress/editor';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	get,
	map,
	find
} from 'lodash';

/**
 * Carbon Fields dependencies.
 */
import { getFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import Field from '../field';
import ServerSideRender from '../server-side-render';

class BlockEdit extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		mode: this.props.container.settings.mode,
		currentTab: this.props.supportsTabs
			? Object.keys( this.props.container.settings.tabs )[ 0 ]
			: null
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
	 * Handles changing on the tabs.
	 *
	 * @param  {string} tab
	 * @return {void}
	 */
	handleTabChange = ( tab ) => {
		this.setState( {
			currentTab: tab
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
	 * Renders a field.
	 *
	 * @param  {Object} field
	 * @param  {number} index
	 * @return {Object}
	 */
	renderField = ( field, index ) => {
		const {
			clientId,
			container,
			attributes
		} = this.props;

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
					containerId={ container.id }
					blockId={ clientId }
					value={ value }
					field={ field }
					name={ field.base_name }
					onChange={ this.handleFieldChange }
				/>
			</Field>
		);
	}

	/**
	 * Renders the fields in tabs.
	 *
	 * @param  {string[]} fieldNames
	 * @return {Object[]}
	 */
	renderTabbedFields( fieldNames ) {
		const { fields } = this.props;

		return map( fieldNames, ( fieldName, index ) => {
			const field = find( fields, [ 'name', fieldName ] );

			return this.renderField( field, index );
		} );
	}

	/**
	 * Renders the fields that aren't in tabs.
	 *
	 * @return {Object}
	 */
	renderNonTabbedFields() {
		return (
			<div className="cf-block__fields">
				{ this.props.fields.map( this.renderField ) }
			</div>
		);
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { currentTab } = this.state;

		const {
			clientId,
			container,
			supportsTabs,
			supportsPreview,
			supportsInnerBlocks
		} = this.props;

		const innerBlocks = ( ( supportsInnerBlocks && this.isInEditMode ) && (
			<div className="cf-block__inner-blocks">
				<InnerBlocks
					template={ container.settings.inner_blocks.template }
					templateLock={ container.settings.inner_blocks.template_lock }
					allowedBlocks={ container.settings.inner_blocks.allowed_blocks }
				/>
			</div>
		) );

		return (
			<Fragment>
				{ container.settings.inner_blocks.position === 'above' && innerBlocks }

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

				{ ( this.isInEditMode && supportsTabs ) && (
					<div className="cf-block__tabs">
						<ul className="cf-block__tabs-list">
							{ map( container.settings.tabs, ( fieldNames, tabName ) => {
								const classes = cx(
									'cf-block__tabs-item',
									{
										'cf-block__tabs-item--current': tabName === currentTab
									}
								);

								return (
									<li
										key={ tabName }
										className={ classes }
										onClick={ () => this.handleTabChange( tabName ) }
									>
										{ tabName }
									</li>
								);
							} ) }
						</ul>
					</div>
				) }

				{ this.isInEditMode && (
					supportsTabs
						? (
							map( container.settings.tabs, ( fieldNames, tabName ) => {
								return (
									<div className="cf-block__fields" key={ tabName } hidden={ tabName !== currentTab }>
										{ this.renderTabbedFields( fieldNames ) }
									</div>
								);
							} )
						)
						: (
							this.renderNonTabbedFields()
						)
				) }

				{ this.isInPreviewMode && (
					<div className="cf-block__preview">
						<ServerSideRender clientId={ clientId } />
					</div>
				) }

				{ container.settings.inner_blocks.position === 'below' && innerBlocks }

				{ this.isInPreviewMode && (
					<InspectorControls>
						{
							supportsTabs
								? (
									map( container.settings.tabs, ( fieldNames, tabName ) => {
										return (
											<PanelBody key={ tabName } title={ tabName }>
												<div className="cf-block__fields">
													{ this.renderTabbedFields( fieldNames ) }
												</div>
											</PanelBody>
										);
									} )
								)
								: (
									<PanelBody title={ __( 'Fields', 'carbon-fields-ui' ) }>
										{ this.renderNonTabbedFields() }
									</PanelBody>
								)
						}
					</InspectorControls>
				) }
			</Fragment>
		);
	}
}

export default withSelect( ( select, { clientId, name } ) => {
	const { hasBlockSupport } = select( 'core/blocks' );
	const { getBlockRootClientId } = select( 'core/editor' );
	const {
		getContainerDefinitionByBlockName,
		getFieldDefinitionsByBlockName
	} = select( 'carbon-fields/blocks' );

	const rootClientId = getBlockRootClientId( clientId );

	return {
		container: getContainerDefinitionByBlockName( name ),
		fields: getFieldDefinitionsByBlockName( name ),
		supportsTabs: hasBlockSupport( name, 'tabs' ),
		supportsPreview: hasBlockSupport( name, 'preview' ) && ! rootClientId,
		supportsInnerBlocks: hasBlockSupport( name, 'innerBlocks' )
	};
} )( BlockEdit );
