/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

class AssociationField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value,
			onAddItem,
			onRemoveItem
		} = this.props;

		return (
			<div>
				<div className="source">
					{
						field.options.map( ( option, index ) => {
							return (
								<div key={ index }>
									#{ option.id } { option.title }

									<Button isDefault onClick={ () => onAddItem( option ) }>
										Add
									</Button>
								</div>
							);
						} )
					}
				</div>

				<hr />

				<div className="chosen">
					{
						value.map( ( option, index ) => {
							return (
								<div key={ index }>
									{ option.title }

									<Button isDefault onClick={ () => onRemoveItem( option ) }>
										Remove
									</Button>
								</div>
							);
						} )
					}

				</div>
			</div>

		);
	}
}

addFilter( 'carbon-fields.association-field.block', 'carbon-fields/blocks', ( OriginalAssociationField ) => ( props ) => {
	return (
		<OriginalAssociationField { ...props }>
			{ ( {
				field,
				value,
				handleChange,
				handleAddItem,
				handleRemoveItem
			} ) => (
				<AssociationField
					field={ field }
					value={ value }
					onChange={ handleChange }
					onAddItem={ handleAddItem }
					onRemoveItem={ handleRemoveItem }
				/>
			) }
		</OriginalAssociationField>
	);
} );
