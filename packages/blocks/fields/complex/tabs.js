/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { PanelHeader, Button } from '@wordpress/components';

class ComplexTabs extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			current,
			items,
			children,
			onChange
		} = this.props;

		return (
			<PanelHeader className="cf-blocks-complex__tabs">
				{ items.map( ( item, index ) => (
					<Button
						key={ item.id }
						className="cf-blocks-complex__tabs-item"
						isDefault={ item.id !== current }
						isPrimary={ item.id === current }
						onClick={ () => onChange( item.id ) }
					>
						{ index + 1 } - { item.label }
					</Button>
				) ) }

				{ children }
			</PanelHeader>
		);
	}
}

export default ComplexTabs;
