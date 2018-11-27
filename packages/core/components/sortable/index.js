/**
 * External dependencies.
 */
import produce from 'immer';
import { Component, Children } from '@wordpress/element';

class Sortable extends Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const { options, forwardedRef } = this.props;

		window.jQuery( forwardedRef.current ).sortable( {
			...options,
			start: this.handleStart,
			update: this.handleUpdate
		} );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		window.jQuery( this.props.forwardedRef.current ).sortable( 'destroy' );
	}

	/**
	 * Handles the `start` event.
	 *
	 * @param  {Object} e
	 * @param  {Object} ui
	 * @return {void}
	 */
	handleStart = ( e, ui ) => {
		ui.item.data( 'index', ui.item.index() );
	}

	/**
	 * Handles the `update` event.
	 *
	 * @param  {Object} e
	 * @param  {Object} ui
	 * @return {void}
	 */
	handleUpdate = ( e, ui ) => {
		const {
			items,
			forwardedRef,
			onUpdate
		} = this.props;

		const oldIndex = ui.item.data( 'index' );
		const newIndex = ui.item.index();

		ui.item.removeData( 'index' );

		window.jQuery( forwardedRef.current ).sortable( 'cancel' );

		onUpdate( produce( items, ( draft ) => {
			draft.splice( newIndex, 0, ...draft.splice( oldIndex, 1 ) );
		} ) );
	}

	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		return Children.only( this.props.children );
	}
}

export default Sortable;
