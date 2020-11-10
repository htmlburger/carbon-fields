<?php

namespace Carbon_Fields\Walker;

/**
 * Walker for the administration nav menu editing.
 *
 * @uses Walker_Nav_Menu_Item_Edit
 */
class Nav_Menu_Item_Edit_Walker extends \Walker_Nav_Menu_Edit {

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

		// Generates the HTML
		ob_start();
		do_action( 'carbon_fields_print_nav_menu_item_container_fields', $item, $output, $depth, $args, $id );
		do_action( 'wp_nav_menu_item_custom_fields', $item->ID, $item, $depth, $args, $id );
		echo $flag;
		$fields = ob_get_clean();

		// List of possible insertion markers, this may vary between WP Core versions
		$markers = array(
			# WordPress < 4.7
			preg_quote( '<p class="field-move hide-if-no-js description description-wide">' ),
			# WordPress 4.7
			preg_quote( '<fieldset class="field-move hide-if-no-js description description-wide">' ),
		);

		// Build the regex
		$regex = sprintf(
			'~(?<!%s)(%s)~',
			preg_quote( $flag, '~' ),
			implode( '|', $markers )
		);

		// Injects the HTML
		$output = preg_replace( $regex, $fields . '$1', $output );
	}

}
