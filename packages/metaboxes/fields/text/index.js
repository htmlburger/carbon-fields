/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import Base from '../base';
import withStore from '../../components/with-store';

class TextField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { field, onChange } = this.props;

		onChange( field.id, e.target.value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { field, value } = this.props;

		return (
			<Base field={ field } >
				<input
					type="text"
					className="regular-text"
					id={ field.id }
					name={ field.base_name }
					value={ value }
					onChange={ this.handleChange }
					{ ...field.attributes }
				/>
			</Base>
		);
	}
}

addFilter( 'carbon-fields.text-field.metabox', 'carbon-fields/metaboxes', ( OriginalTextField ) => withStore( ( props ) => {
	return (
		<OriginalTextField { ...props }>
			{ ( {
				field,
				value,
				handleChange
			} ) => (
				<TextField
					field={ field }
					value={ value }
					onChange={ handleChange }
				/>
			) }
		</OriginalTextField>
	);
} ) );
