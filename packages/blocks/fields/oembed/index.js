/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { BaseControl, TextControl } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import OembedPreview from './preview';

class OembedField extends Component {
	/**
	 * Handles the change of the input.
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handleChange = ( value ) => {
		const {
			name,
			onChange,
			onSearchSubmit
		} = this.props;

		onChange( name, value );
		onSearchSubmit( value );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value,
			embedCode,
			embedType,
			provider
		} = this.props;

		return (
			<BaseControl>
				<TextControl
					label={ field.label }
					value={ value }
					onChange={ this.handleChange }
				/>

				{
					embedCode
						? <OembedPreview
							html={ embedCode }
							type={ embedType }
							provider={ provider }
						/> : null
				}
			</BaseControl>
		);
	}
}

addFilter( 'carbon-fields.oembed-field.block', 'carbon-fields/blocks', ( OriginalOembedField ) => ( props ) => {
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
} );
