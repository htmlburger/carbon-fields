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
			prefix
		} = this.props;

		const groupClasses = cx(
			'cf-complex-group',
			{
				'cf-complex-group--collapsed': group.collapsed
			}
		);

		const toggleClasses = cx(
			'dashicons-before',
			'cf-complex-group__action-icon',
			{
				'dashicons-arrow-up': ! group.collapsed,
				'dashicons-arrow-down': group.collapsed
			}
		);

		return (
			<div className={ groupClasses }>
				<input
					type="hidden"
					name={ `${ prefix }[value]` }
					value={ group.name }
				/>

				<div className="cf-complex-group__head">
					<span className="cf-complex-group__index">
						{ index + 1 }
					</span>

					<span className="cf-complex-group__title">
						Complex Title
					</span>
				</div>

				<div className="cf-complex-group__body" hidden={ group.collapsed }>
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

				<div className="cf-complex-group__actions">
					<button type="button" className="cf-complex-group__action">
						<span className="dashicons-before dashicons-admin-page cf-complex-group__action-icon"></span>

						<span className="cf-complex-group__action-text" onClick={ this.handleCloneClick }>
							Duplicate
						</span>
					</button>

					<button type="button" className="cf-complex-group__action" onClick={ this.handleToggleClick }>
						<span className={ toggleClasses }></span>

						<span className="cf-complex-group__action-text">
							Collapse
						</span>
					</button>

					<button type="button" className="cf-complex-group__action" onClick={ this.handleRemoveClick }>
						<span className="dashicons-before dashicons-trash cf-complex-group__action-icon"></span>

						<span className="cf-complex-group__action-text">
							Remove
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default ComplexGroup;
