/**
 * Renders the empty state of the field.
 *
 * @param  {Object} props
 * @param  {string} props.label
 * @param  {Object} props.children
 * @return {Object}
 */
function ComplexPlaceholder( { label, children } ) {
	return (
		<div className="cf-metaboxes-complex__placeholder">
			<p className="cf-metaboxes-complex__placeholder-label">
				{ label }
			</p>

			{ children }
		</div>
	);
}

export default ComplexPlaceholder;
