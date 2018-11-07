/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';
import ComplexGroup from './group';

class ComplexField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value
		} = this.props;

		return (
			<FieldBase field={ field } >
				{ value.map( ( group, index ) => (
					<ComplexGroup
						key={ group.id }
						index={ index }
						group={ group }
						prefix={ `${ name }[${ index }]` }
					/>
				) ) }
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.complex-field.metabox', 'carbon-fields/metaboxes', ( OriginalComplexField ) => withField( ( props ) => {
	return (
		<OriginalComplexField { ...props }>
			{ ( {
				field,
				name,
				value
			} ) => (
				<ComplexField
					field={ field }
					name={ name }
					value={ value }
				/>
			) }
		</OriginalComplexField>
	);
} ) );
