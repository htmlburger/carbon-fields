/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { BaseControl, TextControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import { GoogleMap } from '@carbon-fields/core';
import './style.scss';

class MapField extends Component {
	handleChange = ( newValue ) => {
		const {
			name,
			value,
			onChange,
			handleAddressChange
		} = this.props;

		if ( typeof newValue === 'string' ) {
			newValue = { address: newValue };

			handleAddressChange( newValue.address );
		}

		onChange(
			name,
			{
				...value,
				...newValue
			}
		);
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value
		} = this.props;

		return (
			<BaseControl
				className="cf-field-map-wrapper"
				label={ field.label }
			>
				<div className="cf-field-map-search">
					<p>{ carbonFieldsL10n.field.mapLocateAddress }</p>

					<TextControl
						value={ value.address }
						onChange={ this.handleChange }
					/>
				</div>

				<GoogleMap
					className="cf-field-map-canvas"
					lat={ value.lat }
					lng={ value.lng }
					zoom={ value.zoom }
					onChange={ this.handleChange }
				/>
			</BaseControl>
		);
	}
}

addFilter( 'carbon-fields.map-field.block', 'carbon-fields/blocks', ( OriginalMapField ) => ( props ) => {
	return (
		<OriginalMapField { ...props }>
			{ ( {
				field,
				name,
				value,
				handleChange,
				handleAddressChange
			} ) => (
				<MapField
					field={ field }
					name={ name }
					value={ value }
					onChange={ handleChange }
					handleAddressChange={ handleAddressChange }
				/>
			) }
		</OriginalMapField>
	);
} );
