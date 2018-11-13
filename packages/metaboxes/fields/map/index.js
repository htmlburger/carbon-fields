/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import { GoogleMap } from '@carbon-fields/core';
import FieldBase from '../../components/field-base';
import withField from '../../components/with-field';
import './style.scss';

class MapField extends Component {
	handleChange = ( newValue ) => {
		const {
			field,
			value,
			onChange,
			handleAddressChange
		} = this.props;

		if ( typeof newValue === 'string' ) {
			newValue = { address: newValue };

			handleAddressChange( newValue.address );
		}

		onChange(
			field.id,
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
			<FieldBase field={ field } >
				<div className="cf-metaboxes-map__search">
					<label className="cf-metaboxes-map__search-label">
						{ carbonFieldsL10n.field.mapLocateAddress }
					</label>

					<input
						type="text"
						className="cf-metaboxes-map__search-input"
						value={ value.address }
						onChange={ ( event ) => this.handleChange( event.target.value ) }
					/>
				</div>

				<GoogleMap
					className="cf-metaboxes-map__canvas"
					lat={ value.lat }
					lng={ value.lng }
					zoom={ value.zoom }
					onChange={ this.handleChange }
				/>
			</FieldBase>
		);
	}
}

addFilter( 'carbon-fields.map-field.metabox', 'carbon-fields/metaboxes', ( OriginalMapField ) => withField( ( props ) => {
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
} ) );
