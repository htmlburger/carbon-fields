/**
 * External dependencies.
 */
import cx from 'classnames';
import { Component } from '@wordpress/element';
import { getFieldType } from '@carbon-fields/core';

class ComplexGroup extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { group, prefix } = this.props;

		const classes = cx(
			'cf-complex-group',
			{
				'cf-complex-group--collapsed': group.collapsed
			}
		);

		return (
			<div className={ classes }>
				<input
					type="hidden"
					name={ `${ prefix }[value]` }
					value={ group.name }
				/>

				<div className="cf-complex-group__head">
					<span className="cf-complex-group__index">
						1
					</span>

					<span className="cf-complex-group__title">
						Complex Title
					</span>
				</div>

				<div className="cf-complex-group__body">
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

						<span className="cf-complex-group__action-text">
							Duplicate
						</span>
					</button>

					<button type="button" className="cf-complex-group__action">
						<span className="dashicons-before dashicons-arrow-up cf-complex-group__action-icon"></span>

						<span className="cf-complex-group__action-text">
							Collapse
						</span>
					</button>

					<button type="button" className="cf-complex-group__action">
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
