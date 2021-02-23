/**
 * External dependencies.
 */
import cx from 'classnames';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { getFieldType } from '../../registry/fields';

class ComplexGroup extends Component {
	/**
	 * Handles the click on the "Toggle" button.
	 *
	 * @return {void}
	 */
	handleToggleClick = () => {
		const {
			id,
			onToggle
		} = this.props;

		onToggle( id );
	}

	/**
	 * Handles the click on the "Clone" button.
	 *
	 * @return {void}
	 */
	handleCloneClick = () => {
		const {
			id,
			onClone
		} = this.props;

		onClone( id );
	}

	/**
	 * Handles the click on the "Remove" button.
	 *
	 * @return {void}
	 */
	handleRemoveClick = () => {
		const {
			id,
			onRemove
		} = this.props;

		onRemove( id );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			index,
			label,
			name,
			prefix,
			tabbed,
			hidden,
			dragged,
			collapsed,
			allowClone,
			fields,
			context,
			onFieldSetup
		} = this.props;

		const groupClasses = cx(
			'cf-complex__group',
			{
				'cf-complex__group--grid': ! tabbed,
				'cf-complex__group--tabbed': tabbed,
				'cf-complex__group--collapsed': collapsed,
				'cf-complex__group--dragged': dragged
			}
		);

		const toggleClasses = cx(
			'dashicons-before',
			'cf-complex__group-action-icon',
			{
				'dashicons-arrow-up': ! collapsed,
				'dashicons-arrow-down': collapsed
			}
		);

		const actionsClasses = cx(
			'cf-complex__group-actions',
			{
				'cf-complex__group-actions--grid': ! tabbed,
				'cf-complex__group-actions--tabbed': tabbed
			}
		);

		return (
			<div className={ groupClasses } hidden={ hidden }>
				{ name && (
					<input
						type="hidden"
						name={ `${ prefix }[value]` }
						value={ name }
					/>
				) }

				{ ! tabbed && (
					<div className="cf-complex__group-head">
						<span className="cf-complex__group-index">
							{ index + 1 }
						</span>

						<span className="cf-complex__group-title">
							{ label }
						</span>
					</div>
				) }

				{ ! dragged && (
					<div className="cf-complex__group-body" hidden={ ! tabbed && collapsed }>
						{ fields.map( ( field ) => {
							const FieldEdit = getFieldType( field.type, context );

							if ( ! FieldEdit ) {
								return null;
							}

							const [ Field, props ] = onFieldSetup( field, {}, this.props );

							return (
								// The `key` will be assigned via `onFieldSetup`.
								// eslint-disable-next-line react/jsx-key
								<Field { ...props }>
									<FieldEdit { ...props } />
								</Field>
							);
						} ) }
					</div>
				) }

				<div className={ actionsClasses }>
					{ allowClone && (
						<button type="button" title={ __( 'Duplicate', 'carbon-fields-ui' ) } className="cf-complex__group-action" onClick={ this.handleCloneClick }>
							<span className="dashicons-before dashicons-admin-page cf-complex__group-action-icon"></span>

							<span className="cf-complex__group-action-text">
								{ __( 'Duplicate', 'carbon-fields-ui' ) }
							</span>
						</button>
					) }

					<button type="button" title={ __( 'Remove', 'carbon-fields-ui' ) } className="cf-complex__group-action" onClick={ this.handleRemoveClick }>
						<span className="dashicons-before dashicons-trash cf-complex__group-action-icon"></span>

						<span className="cf-complex__group-action-text">
							{ __( 'Remove', 'carbon-fields-ui' ) }
						</span>
					</button>

					{ ! tabbed && (
						<button type="button" title={ __( 'Collapse', 'carbon-fields-ui' ) } className="cf-complex__group-action" onClick={ this.handleToggleClick }>
							<span className={ toggleClasses }></span>

							<span className="cf-complex__group-action-text">
								{ __( 'Collapse', 'carbon-fields-ui' ) }
							</span>
						</button>
					) }
				</div>
			</div>
		);
	}
}

export default ComplexGroup;
