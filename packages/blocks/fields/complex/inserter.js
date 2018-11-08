/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import {
	Dropdown,
	Button,
	MenuGroup,
	MenuItem
} from '@wordpress/components';

class ComplexInserter extends Component {
	/**
	 * Renders the element used to show/hide the menu.
	 *
	 * @param  {Object}   props
	 * @param  {Function} props.onToggle
	 * @return {Object}
	 */
	renderToggle = ( { onToggle } ) => {
		return (
			<Button isDefault onClick={ onToggle }>
				{ this.props.buttonText }
			</Button>
		);
	}

	/**
	 * Renders the menu.
	 *
	 * @param  {Object}   props
	 * @param  {Function} props.onClose
	 * @return {Object}
	 */
	renderMenu = ( { onClose } ) => {
		const { groups, onSelect } = this.props;

		return (
			<MenuGroup>
				{ groups.map( ( group ) => (
					<MenuItem
						key={ group.group_id }
						onClick={ () => {
							onSelect( group );
							onClose();
						} }
					>
						{ group.label }
					</MenuItem>
				) ) }
			</MenuGroup>
		);
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			buttonText,
			groups,
			onSelect
		} = this.props;

		if ( groups.length === 1 ) {
			return (
				<Button isDefault onClick={ () => onSelect( groups[ 0 ] ) }>
					{ buttonText }
				</Button>
			);
		}

		return (
			<Dropdown
				position="bottom center"
				renderToggle={ this.renderToggle }
				renderContent={ this.renderMenu }
			/>
		);
	}
}

export default ComplexInserter;
