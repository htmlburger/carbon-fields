/* Remove when https://github.com/babel/babel-eslint/issues/530 is fixed */
/* eslint template-curly-spacing: 'off' */
/* eslint indent: 'off' */

/**
 * The external dependencies.
 */
import { Component } from '@wordpress/element';
import {
	Button,
	NavigableMenu,
	Panel,
	PanelBody
} from '@wordpress/components';

/**
 * The internal dependencies.
 */
import renderFields from '../../../utils/render-fields';
import Drop from './dnd-drop';
import Drag from './dnd-drag';

class Fields extends Component {
	constructor() {
		super();

		this.state = {
			selectedIndex: 0
		};
	}

	/**
	 * Handles the click of the navigation button - group
	 * @param  {number} index
	 * @return {void}
	 */
	handleSelect = ( index ) => this.setState( { selectedIndex: index } )

	/**
	 * Handles the drop event of the drag-and-drop context
	 * @param  {string}        fieldKey The field key of the child field being updated
	 * @param  {Object|string} value    The value of the child field being updated
	 * @return {void}
	 */
	handleChange = ( fieldKey, value ) => this.props.onChange( this.state.selectedIndex, fieldKey, value )

	/**
	 * Renders the complex entry fields.
	 *
	 * @param  {Object}   props
	 * @param  {string}   props.elementId
	 * @param  {Array}    props.value
	 * @param  {number}   props.depth
	 * @param  {Object}   props.button
	 * @param  {Function} props.onChange
	 * @return {Object}
	 */
	render() {
		const { selectedIndex } = this.state;
		const {
			elementId,
			value,
			depth,
			button,
			onSort
		} = this.props;

		// TODO Split into navigation + body
		return (
			<Panel>
				<Drop>
					<NavigableMenu>
						{ value.map( ( navButton, index ) => (
							<Drag
								id={ index }
								key={ `${ elementId }-button-${ index }` }
								move={ onSort }
							>
								<Button
									isPrimary={ selectedIndex === index }
									isDefault={ selectedIndex !== index }
									onClick={ () => this.handleSelect( index ) }
								>
									{ navButton.title }
								</Button>
							</Drag>
						) ) }

						{ button }
					</NavigableMenu>
				</Drop>

				<PanelBody>
					{ renderFields(
						value[ selectedIndex ].fields,
						value[ selectedIndex ].attributes,
						this.handleChange,
						depth + 1
					) }
				</PanelBody>
			</Panel>
		);
	}
}

export default Fields;
