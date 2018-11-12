/**
 * External dependencies.
 */
import cx from 'classnames';
import { Component } from '@wordpress/element';
import { getFieldType } from '@carbon-fields/core';

class ComplexGroup extends Component {
	/**
	 * Handles the click on the "Toggle" button.
	 *
	 * @return {void}
	 */
	handleToggleClick = () => {
		const {
			index,
			onToggle
		} = this.props;

		onToggle( index );
	}

	/**
	 * Handles the click on the "Clone" button.
	 *
	 * @return {void}
	 */
	handleCloneClick = () => {
		const {
			group,
			onClone
		} = this.props;

		onClone( group );
	}

	/**
	 * Handles the click on the "Remove" button.
	 *
	 * @return {void}
	 */
	handleRemoveClick = () => {
		const {
			group,
			onRemove
		} = this.props;

		onRemove( group );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			index,
			group,
			prefix,
			hidden,
			allowClone
		} = this.props;

		const groupClasses = cx(
			'cf-metaboxes-complex__group',
			{
				'cf-metaboxes-complex__group--collapsed': group.collapsed
			}
		);

		const toggleClasses = cx(
			'dashicons-before',
			'cf-metaboxes-complex__group-action-icon',
			{
				'dashicons-arrow-up': ! group.collapsed,
				'dashicons-arrow-down': group.collapsed
			}
		);

		return (
			<div className={ groupClasses } hidden={ hidden }>
				<input
					type="hidden"
					name={ `${ prefix }[value]` }
					value={ group.name }
				/>

				<div className="cf-metaboxes-complex__group-head">
					<span className="cf-metaboxes-complex__group-index">
						{ index + 1 }
					</span>

					<span className="cf-metaboxes-complex__group-title">
						Complex Title
					</span>
				</div>

				<div className="cf-metaboxes-complex__group-body" hidden={ group.collapsed }>
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

				<div className="cf-metaboxes-complex__group-actions">
					{ allowClone && (
						<button type="button" className="cf-metaboxes-complex__group-action" onClick={ this.handleCloneClick }>
							<span className="dashicons-before dashicons-admin-page cf-metaboxes-complex__group-action-icon"></span>

							<span className="cf-metaboxes-complex__group-action-text">
								Duplicate
							</span>
						</button>
					) }

					<button type="button" className="cf-metaboxes-complex__group-action" onClick={ this.handleToggleClick }>
						<span className={ toggleClasses }></span>

						<span className="cf-metaboxes-complex__group-action-text">
							Collapse
						</span>
					</button>

					<button type="button" className="cf-metaboxes-complex__group-action" onClick={ this.handleRemoveClick }>
						<span className="dashicons-before dashicons-trash cf-metaboxes-complex__group-action-icon"></span>

						<span className="cf-metaboxes-complex__group-action-text">
							Remove
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default ComplexGroup;
