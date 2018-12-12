/**
 * External dependencies.
 */
import cx from 'classnames';
import { forwardRef } from '@wordpress/element';

/**
 * Renders the tabs navigation.
 *
 * @param  {Object}   props
 * @param  {Object[]} props.items
 * @param  {string}   props.current
 * @param  {mixed}    props.children
 * @param  {Function} props.onChange
 * @param  {Object}   ref
 * @return {void}
 */
function ComplexTabs( {
	items,
	current,
	children,
	onChange
}, ref ) {
	return (
		<div className="cf-complex__tabs">
			<ul className="cf-complex__tabs-list" ref={ ref }>
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

export default forwardRef( ComplexTabs );
