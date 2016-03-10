<?php

namespace Carbon_Fields\Walker;

/**
 * Walker for the administration nav menu editing.
 *
 * @uses Walker_Nav_Menu_Edit
 */
class Nav_Menu_Edit_Walker extends \Walker_Nav_Menu_Edit {

	/**
	 * Start the element output.
	 *
	 * @param string $output Passed by reference. Used to append additional content.
	 * @param object $item   Menu item data object.
	 * @param int    $depth  Depth of menu item. Used for padding.
	 * @param array  $args   An array of arguments. @see wp_nav_menu()
	 * @param int    $id     Current item ID.
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		parent::start_el( $output, $item, $depth, $args, $id );

		$flag = '<!--CarbonFields-->';

		ob_start();
		do_action( 'crb_print_carbon_container_nav_menu_fields_html', $item, $output, $depth, $args, $id );
		echo $flag;
		$fields = ob_get_clean();

		$marker = '<p class="field-move hide-if-no-js description description-wide">';
		$output = preg_replace( '~(?<!' . preg_quote( $flag, '~' ) . ')' . preg_quote( $marker, '~' ) . '~', $fields . $marker, $output );
	}
}
