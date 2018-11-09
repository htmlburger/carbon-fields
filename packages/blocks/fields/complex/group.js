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
		const { group, values } = this.props;

		return (
			<PanelRow>
				{ group.fields.map( ( field, index ) => {
					const Field = getFieldType( field.type, 'block' );

					if ( ! Field ) {
						return null;
					}

					const value = get( values, field.base_name );

					return (
						<Field
							key={ index }
							field={ field }
							value={ value }
						/>
					);
				} ) }
			</PanelRow>
		);
	}
}

export default ComplexGroup;
