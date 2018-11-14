/**
 * External dependencies.
 */
import cx from 'classnames';
import { Component } from '@wordpress/element';

class ComplexTabs extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			items,
			current,
			children,
			onChange
		} = this.props;

		return (
			<div className="cf-complex__tabs">
				<ul className="cf-complex__tabs-list">
					{ items.map( ( item, index ) => {
						const classes = cx(
							'cf-complex__tabs-item',
							{
								'cf-complex__tabs-item--current': item.id === current
							}
						);

						return (
							<li
								key={ item.id }
								className={ classes }
								onClick={ () => onChange( item.id ) }
							>
								{
									item.label
										? <span
											className="cf-complex__tabs-title"
											dangerouslySetInnerHTML={ { __html: item.label } }
										></span>
										: null
								}

								<span className="cf-complex__tabs-index">
									{ index + 1 }
								</span>
							</li>
						);
					} ) }
				</ul>

				{ children }
			</div>
		);
	}
}

export default ComplexTabs;
