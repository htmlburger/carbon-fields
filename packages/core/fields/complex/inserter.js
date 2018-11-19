/**
 * External dependencies.
 */
import onClickOutside from 'react-onclickoutside';
import { Component } from '@wordpress/element';

class ComplexInserter extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		menuVisible: false
	};

	/**
	 * Handles the click outside the main element.
	 *
	 * @return {void}
	 */
	handleClickOutside = () => {
		this.setState( {
			menuVisible: false
		} );
	}

	/**
	 * Handles the click on the "Add" button.
	 *
	 * @return {void}
	 */
	handleAddClick = () => {
		const { groups, onSelect } = this.props;

		if ( groups.length > 1 ) {
			this.setState( ( { menuVisible } ) => ( {
				menuVisible: ! menuVisible
			} ) );
		} else {
			onSelect( groups[ 0 ] );
		}
	}

	/**
	 * Handles the click on an item in the menu.
	 *
	 * @param  {Object} group
	 * @return {void}
	 */
	handleItemClick = ( group ) => {
		this.setState( {
			menuVisible: false
		} );

		this.props.onSelect( group );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { buttonText, groups } = this.props;

		return (
			<div className="cf-complex__inserter">
				<button type="button" className="button cf-complex__inserter-button" onClick={ this.handleAddClick }>
					{ buttonText }
				</button>

				{ groups.length > 1 && (
					<ul className="cf-complex__inserter-menu" hidden={ ! this.state.menuVisible }>
						{ groups.map( ( group, index ) => (
							<li
								className="cf-complex__inserter-item"
								key={ index }
								onClick={ () => this.handleItemClick( group ) }
							>
								{ group.label }
							</li>
						) ) }
					</ul>
				) }
			</div>
		);
	}
}

export default onClickOutside( ComplexInserter );
