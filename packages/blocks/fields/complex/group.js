/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import {
	Panel,
	PanelHeader,
	PanelBody,
	PanelRow,
	Toolbar,
	ToolbarButton
} from '@wordpress/components';
import { getFieldType } from '@carbon-fields/core';
import { get } from 'lodash';

class ComplexGroup extends Component {
	/**
	 * Handles the click on the "Clone" button.
	 *
	 * @return {void}
	 */
	handleCloneClick = () => {
		const {
			index,
			onClone
		} = this.props;

		onClone( index );
	}

	/**
	 * Handles the click on the "Remove" button.
	 *
	 * @return {void}
	 */
	handleRemoveClick = () => {
		const {
			index,
			onRemove
		} = this.props;

		onRemove( index );
	}

	/**
	 * Handles the click on the "Toggle" button.
	 *
	 * @return {void}
	 */
	handleToggleClick = () => {
		const {
			index,
			onToggle
		} = this.props;

		onToggle( index );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			index,
			group,
			values,
			collapsed,
			onChildChange
		} = this.props;

		return (
			<Panel>
				<PanelHeader label={ index + 1 }>
					<Toolbar isCollapsed={ false }>
						<ToolbarButton
							icon={ collapsed ? 'arrow-down' : 'arrow-up' }
							onClick={ this.handleToggleClick }
						/>

						<ToolbarButton icon="admin-page" onClick={ this.handleCloneClick } />

						<ToolbarButton icon="trash" onClick={ this.handleRemoveClick } />
					</Toolbar>
				</PanelHeader>

				<PanelBody opened={ ! collapsed }>
					{ group.fields.map( ( field, fieldIndex ) => {
						const Field = getFieldType( field.type, 'block' );

						if ( ! Field ) {
							return null;
						}

						const value = get( values, field.base_name );

						return (
							<PanelRow key={ fieldIndex }>
								<Field
									field={ field }
									name={ `${ index }.${ field.base_name }` }
									value={ value }
									onChange={ onChildChange }
								/>
							</PanelRow>
						);
					} ) }
				</PanelBody>
			</Panel>
		);
	}
}

export default ComplexGroup;
