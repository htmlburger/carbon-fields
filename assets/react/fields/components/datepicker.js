/**
 * The external dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Datepicker extends React.Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.node = ReactDOM.findDOMNode(this);

		this.renderPicker(this.props);
		this.initPicker();
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} props
	 * @return {void}
	 */
	componentWillReceiveProps(props) {
		this.renderPicker(props);
	}

	/**
	 * Render an empty `div` that will act as a placeholder.
	 *
	 * @return {React.Element}
	 */
	render() {
		return <div />;
	}

	/**
	 * Initialize jQuery UI datepicker.
	 *
	 * @return {void}
	 */
	initPicker() {
		const defaults = {
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true,
			showOn: 'both',
			hideIfNoPrevNext: true,
			beforeShow() {
				$('#ui-datepicker-div', this.node).addClass('carbon-jquery-ui');
			},
		};

		$('input', this.node).datepicker({
			...defaults,
			...this.props.options,
		});
	}

	/**
	 * Render jQuery UI datepicker in the placeholder.
	 *
	 * @return {void}
	 */
	renderPicker(props) {
		ReactDOM.render(props.children, this.node);
	}
}

export default Datepicker;

