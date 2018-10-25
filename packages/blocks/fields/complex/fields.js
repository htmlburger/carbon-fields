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
import {
	DragDropContext,
	DropTarget,
	DragSource
} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

/**
 * The internal dependencies.
 */
import renderFields from '../../utils/render-fields';

const cardSource = {
	beginDrag( props ) {
		return props;
	}
};

function collect( connect, monitor ) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}

function dropCollect( connect ) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

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
			button
		} = this.props;

		const DropContainer = DropTarget( 'navigation', {}, dropCollect )( ( { connectDropTarget, children } ) => (
			connectDropTarget(
				<div>
					{ children }
				</div>
			)
		) );

		const DragButton = DragSource( 'button', cardSource, collect )( ( { connectDragSource, children } ) => (
			connectDragSource(
				<span>
					{ children }
				</span>
			)
		) );

		// TODO Split into navigation + body
		return (
			<Panel>
				<DropContainer>
					<NavigableMenu>
						{ value.map( ( navButton, index ) => (
							<DragButton
								key={ `${ elementId }-button-${ index }` }
							>
								<Button
									isPrimary={ selectedIndex === index }
									isDefault={ selectedIndex !== index }
									onClick={ () => this.handleSelect( index ) }
								>
									{ navButton.title }
								</Button>
							</DragButton>
						) ) }

						{ button }
					</NavigableMenu>
				</DropContainer>

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

export default DragDropContext( HTML5Backend )( Fields );
