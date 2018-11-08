/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';
import OembedPreview from './preview';

class OembedField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {Event} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const {
			field,
			onChange,
			onSearchSubmit
		} = this.props;

		onChange( field.id, e.target.value );
		onSearchSubmit( e.target.value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			name,
			value,
			embedCode,
			embedType,
			provider
		} = this.props;

		return (
			<FieldBase field={ field } className="cf-field-oembed-wrapper">
				<input type="text" value={ value } onChange={ this.handleChange } />

				{
					embedCode
						? <OembedPreview
							html={ embedCode }
							type={ embedType }
							provider={ provider }
						/> : null
				}

				<input
					type="hidden"
					id={ field.id }
					name={ name }
					value={ value }
					readOnly />
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.oembed-field.metabox', 'carbon-fields/metaboxes', ( OriginalOembedField ) => withField( ( props ) => {
	return (
		<OriginalOembedField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange,
				handleSearchSubmit,
				embedCode,
				embedType,
				provider
			} ) => (
				<OembedField
					field={ field }
					name={ name }
					value={ value }
					onChange={ handleChange }
					onSearchSubmit={ handleSearchSubmit }
					embedCode={ embedCode }
					embedType={ embedType }
					provider={ provider }
				/>
			) }
		</OriginalOembedField>
	);
} ) );
