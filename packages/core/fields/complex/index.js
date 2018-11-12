/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { get } from 'lodash';

class ComplexField extends Component {
	/**
	 * Constructor.
	 *
	 * @param {Object} props
	 */
	constructor( props ) {
		super( props );

		const locations = [ 'id', '_id' ];
		let currentTab = null;

		for ( const location of locations ) {
			const id = get( props.value, `0.${ location }` );

			if ( id ) {
				currentTab = id;

				break;
			}
		}

		this.state = {
			currentTab
		};
	}

	/**
	 * Returns true if the field is using tabs for the layout.
	 *
	 * @return {boolean}
	 */
	get isTabbed() {
		return this.props.field.layout.indexOf( 'tabbed' ) > -1;
	}

	/**
	 * Returns the text used in "Add Entry" button.
	 *
	 * TODO: Switch to @wordpress/i18n
	 * @return {string}
	 */
	get inserterButtonText() {
		const { field } = this.props;

		return window.carbonFieldsL10n.field.complexAddButton.replace( '%s', field.labels.singular_name );
	}

	/**
	 * Handles changing of tabs.
	 *
	 * @param  {string} groupId
	 * @return {void}
	 */
	handleTabsChange = ( groupId ) => {
		this.setState( {
			currentTab: groupId
		} );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const { isTabbed, inserterButtonText } = this;

		const { currentTab } = this.state;

		const {
			field,
			name,
			value,
			children,
			onChange
		} = this.props;

		return children( {
			field,
			name,
			value,
			isTabbed,
			currentTab,
			inserterButtonText,
			handleChange: onChange,
			handleTabsChange: this.handleTabsChange
		} );
	}
}

export default ComplexField;
