/**
 * The external dependencies.
 */
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

class SortableList extends React.Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.handleSortableUpdate = this.handleSortableUpdate.bind(this);

		this.$node = $(ReactDOM.findDOMNode(this)).sortable({
			...this.props.options,
			update: this.handleSortableUpdate,
		});
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillDestroy() {
		this.$node.sortable('destroy');
		this.$node = null;
	}

	/**
	 * Render the component.
	 *
	 * @return {React.Element}
	 */
	render() {
		return React.Children.only(this.props.children);
	}

	/**
	 * Handle the `update` event from the sortable widget.
	 *
	 * @param  {Object} event
	 * @param  {Object} ui
	 * @return {void}
	 */
	handleSortableUpdate(event, ui) {
		// Notify the subscribers.
		this.props.onSort(this.$node.sortable('toArray'), event, ui);

		// DOM items will be re-ordered by React.
		this.$node.sortable('cancel');
	}
}

export default SortableList;
