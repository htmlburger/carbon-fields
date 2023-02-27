/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { xor } from 'lodash';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import './style.scss';
import NoOptions from '../../components/no-options';

class SetField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAll: false,
		};
	}

	/**
	 * Handles the change of the field.
	 *
	 * @param  {Object} e
	 * @return {void}
	 */
	handleChange = ( e ) => {
		const {
			id,
			value,
			onChange
		} = this.props;

		onChange(
			id,
			xor( value, [ e.target.value ] )
		);
	}

	/**
	 * Checks if the given option is checked.
	 *
	 * @param  {Array} values
	 * @param  {Object} option
	 * @return {boolean}
	 */
	isChecked = ( values, option ) => {
		return values.indexOf( option.value ) > -1;
	}

	toggleOptions = (e) => {
		e.preventDefault();

		this.setState({
			showAll: !this.state.showAll
		});
	}

	/**
	 * Render the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			id,
			name,
			value,
			field
		} = this.props;

		const shouldPrintLink = field.limit_options > 0 && field.limit_options < field.options.length;

		return (
			field.options.length > 0
				? (
					<>
						<ul className="cf-set__list">
							{ field.options.map( ( option, index ) => {
								let isHidden = !this.state.showAll && shouldPrintLink && field.limit_options < ( index + 1 );

								let classNames = "cf-set__list-item" + ( isHidden ? ' hidden' : '' );

								return (
									<li className={ classNames } key={ index }>
										<input
											type="checkbox"
											id={ `${ id }-${ option.value }` }
											name={ `${ name }[]` }
											checked={ this.isChecked( value, option ) }
											value={ option.value }
											className="cf-set__input"
											onChange={ this.handleChange }
											{ ...field.attributes }
										/>

										<label className="cf-set__label" htmlFor={ `${ id }-${ option.value }` }>
											{ option.label }
										</label>
									</li>
							) } ) }
						</ul>
						
						{
							shouldPrintLink && <p>
								<a href="#" onClick={ this.toggleOptions }>
									{
										!this.state.showAll
											? __( 'Show All Options', 'carbon-fields-ui' )
											: __( 'Show Less Options', 'carbon-fields-ui' )
									}
								</a>
							</p>
						}
					</>
				)
				: <NoOptions />
		);
	}
}

export default SetField;
