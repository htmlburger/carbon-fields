/**
 * External dependencies.
 */
import { createRef, Component } from '@wordpress/element';

class ComplexInserter extends Component {
	/**
	 * Define the project base properties
	 *
	 * @return {void}
	 */
	constructor() {
		super();

		this.node = createRef();
	}

	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		menuVisible: false
	};

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} prevProps
	 * @param  {Object} prevState
	 * @return {void}
	 */
	componentDidUpdate( prevProps, prevState ) {
		if ( this.state.menuVisible && ! prevState.menuVisible ) {
			this.node.current.ownerDocument.addEventListener( 'mousedown', this.handleOutsideClick, true );
		} else if ( ! this.state.menuVisible && prevState.menuVisible ) {
			this.node.current.ownerDocument.removeEventListener( 'mousedown', this.handleOutsideClick, true );
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		if ( this.state.menuVisible ) {
			this.node.current.ownerDocument.removeEventListener( 'mousedown', this.handleOutsideClick, true );
		}
	}

	/**
	 * Closes the menu when clicking outside of it.
	 *
	 * @param  {Object} event
	 * @return {void}
	 */
	handleOutsideClick = ( event ) => {
		if ( this.node.current && ! this.node.current.contains( event.target ) ) {
			this.setState( { menuVisible: false } );
		}
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
			<div className="cf-complex__inserter" ref={ this.node }>
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

export default ComplexInserter;
