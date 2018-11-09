/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { PanelRow } from '@wordpress/components';
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
			<PanelRow>
				{ group.fields.map( ( field, fieldIndex ) => {
					const Field = getFieldType( field.type, 'block' );

					if ( ! Field ) {
						return null;
					}

					const value = get( values, field.base_name );

					return (
						<Field
							key={ fieldIndex }
							field={ field }
							name={ `${ index }.${ field.base_name }` }
							value={ value }
							onChange={ onChildChange }
						/>
					);
				} ) }
			</PanelRow>
		);
	}
}

export default ComplexGroup;
