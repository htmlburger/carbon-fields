/**
 * The external dependencies.
 */
import { DragSource, DropTarget } from 'react-dnd';

const Drag = ( {
	connectDragSource,
	connectDropTarget,
	children
} ) => connectDragSource(
	connectDropTarget(
		<span>
			{ children }
		</span>
	)
);

export default DropTarget(
	'BUTTON',
	{
		canDrop: () => false,
		hover: ( props, monitor ) => {
			const { id: draggedId } = monitor.getItem();
			const { id: overId } = props;

			if ( draggedId !== overId ) {
				props.move( draggedId, overId );
			}
		}
	},
	( connect ) => ( {
		connectDropTarget: connect.dropTarget()
	} )
)(
	DragSource(
		'BUTTON',
		{
			beginDrag: ( props ) => ( {
				id: props.id,
				originalIndex: props.id
			} ),
			endDrag: ( props, monitor ) => {
				const { id: droppedId, originalIndex } = monitor.getItem();
				const didDrop = monitor.didDrop();

				if ( ! didDrop ) {
					props.move( droppedId, originalIndex );
				}
			}
		},
		( connect, monitor ) => ( {
			connectDragSource: connect.dragSource(),
			connectDragPreview: connect.dragPreview(),
			isDragging: monitor.isDragging()
		} )
	)( Drag )
);
