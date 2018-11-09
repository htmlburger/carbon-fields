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
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			index,
			group,
			values,
			onChildChange
		} = this.props;

		return (
			<Panel>
				<PanelHeader label={ index + 1 }>
					<Toolbar isCollapsed={ false }>
						<ToolbarButton icon="arrow-up" />
						<ToolbarButton icon="admin-page" />
						<ToolbarButton icon="trash" onClick={ this.handleRemoveClick } />
					</Toolbar>
				</PanelHeader>

				<PanelBody>
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
