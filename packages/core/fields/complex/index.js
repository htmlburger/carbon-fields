/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { get } from 'lodash';

class ComplexField extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		currentTab: null
	};

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.resetCurrentTab( 0 );
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
	 * Returns true if the maximum number of entries is reached.
	 *
	 * @return {boolean}
	 */
	get isMaximumReached() {
		const { field, value } = this.props;

		return field.max > 0 && value.length >= field.max;
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
	 * Returns a list of groups that can be added if the field
	 * doesn't allow duplicating of groups.
	 *
	 * @param  {string} key
	 * @return {Object[]}
	 */
	getAvailableGroups = ( key ) => {
		const { field, value } = this.props;

		if ( field.duplicate_groups_allowed ) {
			return field.groups;
		}

		const existingGroupNames = value.map( ( group ) => group[ key ] );

		return field.groups.filter( ( { name } ) => existingGroupNames.indexOf( name ) === -1 );
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
	 * Resets the current tab when group is removed.
	 *
	 * @param  {number} groupIndex
	 * @return {void}
	 */
	resetCurrentTab = ( groupIndex ) => {
		groupIndex = Math.max( groupIndex - 1, 0 );

		const locations = [ 'id', '_id' ];

		for ( const location of locations ) {
			const id = get( this.props.value, `${ groupIndex }.${ location }` );

			if ( id ) {
				this.setState( {
					currentTab: id
				} );

				return;
			}
		}

		this.setState( {
			currentTab: null
		} );
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			isTabbed,
			isMaximumReached,
			inserterButtonText
		} = this;

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
			isMaximumReached,
			inserterButtonText,
			getAvailableGroups: this.getAvailableGroups,
			resetCurrentTab: this.resetCurrentTab,
			handleChange: onChange,
			handleTabsChange: this.handleTabsChange
		} );
	}
}

export default ComplexField;
