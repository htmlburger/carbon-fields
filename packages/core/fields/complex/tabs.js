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
 * @param  {string}   props.layout
 * @param  {mixed}    props.children
 * @param  {Function} props.onChange
 * @param  {Object}   ref
 * @return {void}
 */
function ComplexTabs( {
	items,
	current,
	layout,
	children,
	onChange
}, ref ) {
	return (
		<div className={ `cf-complex__tabs cf-complex__tabs--${ layout }` }>
			<ul className="cf-complex__tabs-list" ref={ ref }>
				{ items.map( ( item, index ) => {
					const classes = cx(
						'cf-complex__tabs-item',
						`cf-complex__tabs-item--${ layout }`,
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
									? (
										<span
											className="cf-complex__tabs-title"
											dangerouslySetInnerHTML={ { __html: item.label } }
										></span>
									)
									: (
										<span className="cf-complex__tabs-index">
											{ index + 1 }
										</span>
									)
							}
						</li>
					);
				} ) }
			</ul>

			{ children }
		</div>
	);
}

export default forwardRef( ComplexTabs );
