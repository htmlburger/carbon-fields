/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { withDispatch } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';

/**
 * The internal dependencies.
 */
import FieldBase from '../../components/field-base';
import withStore from '../../components/with-store';

class SidebarField extends Component {
	/**
	 * Handles the change of the select.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const { field, onChange } = this.props;

		onChange( field.id, e.target.value );
	}

	/**
	 * Rendes the component
	 *
	 * @return {Object}
	 */
	render() {
		const { field } = this.props;

		return (
			<FieldBase field={ field }>
				<select
					id={ field.id }
					name={ field.base_name }
					value={ field.value }
					onChange={ this.handleChange }
				>
					<option value="0" disabled>Please choose</option>

					{ field.options.map( ( { value, label } ) => (
						<option key={ value } value={ value }>
							{ label }
						</option>
					) ) }
				</select>
			</FieldBase>
		);
	}
}

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { receiveSidebar } = dispatch( 'carbon-fields/metaboxes' );

	return {
		onAdded: receiveSidebar
	};
} );

addFilter( 'carbon-fields.sidebar-field.metabox', 'carbon-fields/metaboxes', ( OriginalSidebarField ) => compose(
	withStore,
	applyWithDispatch
)( ( props ) => {
	return (
		<OriginalSidebarField { ...props }>
			{ ( { field, handleChange } ) => (
				<SidebarField field={ field } onChange={ handleChange } />
			) }
		</OriginalSidebarField>
	);
} ) );
