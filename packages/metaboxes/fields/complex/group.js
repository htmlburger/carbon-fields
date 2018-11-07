/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { getFieldType } from '@carbon-fields/core';

class ComplexGroup extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { group, prefix } = this.props;

		return (
			<div className="cf-complex__group">
				{ group.fields.map( ( field ) => {
					const Field = getFieldType( field.type, 'metabox' );

					if ( ! Field ) {
						return null;
					}

					return (
						<Field
							key={ field.id }
							id={ field.id }
							name={ `${ prefix }[${ field.name }]` }
						/>
					);
				} ) }
			</div>
		);
	}
}

export default ComplexGroup;
