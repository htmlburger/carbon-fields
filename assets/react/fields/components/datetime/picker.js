/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class DateTimePicker extends React.Component {
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
		return <div className={this.props.className} />;
	}

	/**
	 * Initialize jQuery UI datepicker.
	 *
	 * @return {void}
	 */
	initPicker() {
		const defaults = {
			changeMonth: true,
			changeYear: true,
			showOn: 'both',
			hideIfNoPrevNext: true,
			beforeShow() {
				$('#ui-datepicker-div', this.node).addClass('carbon-jquery-ui');
			},
		};

		$('input', this.node)[this.props.type]({
			...defaults,
			...this.props.options,
		});

		$('button', this.node).addClass('button');
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

/**
 * Validate the props.
 *
 * @type {Object}
 */
DateTimePicker.propTypes = {
	type: PropTypes.oneOf([
		'datepicker',
		'datetimepicker',
		'timepicker',
	]).isRequired,
	options: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired,
	className: PropTypes.string,
};

export default DateTimePicker;

