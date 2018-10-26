/**
 * The external dependencies.
 */
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Drop = ( { connectDropTarget, children } ) => (
	// react-dnd only accepts html tags as wrappers
	connectDropTarget(
		<div>
			{ children }
		</div>
	)
);

export default DragDropContext( HTML5Backend )(
	DropTarget(
		'BUTTON',
		{
			drop: () => {}
		},
		( connect ) => ( {
			connectDropTarget: connect.dropTarget()
		} )
	)( Drop )
);
