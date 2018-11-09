/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import {
	Panel,
	PanelHeader,
	PanelBody,
	PanelRow
} from '@wordpress/components';
import { getFieldType } from '@carbon-fields/core';
import { get } from 'lodash';

class ComplexGroup extends Component {
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
				<PanelHeader label={ index + 1 } />

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
