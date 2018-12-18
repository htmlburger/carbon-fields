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
			update: this.handleUpdate,
			stop: this.handleStop
		} );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		const { forwardedRef } = this.props;
		const $element = window.jQuery( forwardedRef.current );
		const instance = $element.sortable( 'instance' );

		if ( instance ) {
			$element.sortable( 'destroy' );
		}
	}

	/**
	 * Handles the `start` event.
	 *
	 * @param  {Object} e
	 * @param  {Object} ui
	 * @return {void}
	 */
	handleStart = ( e, ui ) => {
		const { onStart } = this.props;

		if ( onStart ) {
			onStart( e, ui );
		}

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
	 * Handles the `stop` event.
	 *
	 * @param  {Object} e
	 * @param  {Object} ui
	 * @return {void}
	 */
	handleStop = ( e, ui ) => {
		const { onStop } = this.props;

		if ( onStop ) {
			onStop( e, ui );
		}
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
