/**
 * The external dependencies.
 */
import $ from 'jquery';
import fecha from 'fecha';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class DateTimePicker extends React.Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const {
			type,
			options,
			defaultValue,
			storageFormat
		} = this.props;

		this.node = ReactDOM.findDOMNode(this);
		this.$input = $('input[type="text"]', this.node)[type]({
			changeMonth: true,
			changeYear: true,
			showOn: 'both',
			hideIfNoPrevNext: true,
			beforeShow() {
				$('#ui-datepicker-div', this.node).addClass('carbon-jquery-ui');
			},
			...options,
		});

		$('button', this.node).addClass('button');

		// Set the value in correct format.
		if (defaultValue) {
			this.$input.datepicker('setDate', fecha.parse(defaultValue, storageFormat));
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		this.$input[this.props.type]('destroy');

		this.node = null;
		this.$input = null;
	}

	/**
	 * Render an empty `div` that will act as a placeholder.
	 *
	 * @return {React.Element}
	 */
	render() {
		return React.Children.only(this.props.children);
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
};

export default DateTimePicker;

