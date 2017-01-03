<?php 
namespace Carbon_Fields\REST;

/**
* Class for validating 
* container types in the current context
*/
class Container_Validator {
	
	public function is_valid_container( $container, $type, $id ) {
		if ( $container->type !== $type ) {
			return false;
		}

		$type_to_lower = strtolower( $type );

		return call_user_func( [ $this, "is_valid_{$type_to_lower}_container"], $container, $id );
	}

	public function is_valid_theme_options_container( $container, $id ) {
		return true;
	}

	public function is_valid_post_meta_container( $container, $id ) {
		return $container->is_valid_save_conditions( $id );
	}

	public function is_valid_user_meta_container( $container, $id ) {
		return $this->is_valid_post_meta_container( $container, $id );
	}

	public function is_valid_term_meta_container( $container, $id ) {
		$term = get_term( $id );

		if ( empty( $term ) || is_wp_error( $term ) ) { 
			return false;
		}
		
		$taxonomy = $term->taxonomy;

		if ( ! in_array( $taxonomy, $container->settings['taxonomy'] ) ) {
			return false;
		}

		if ( $container->settings['show_on_level'] ) { 
			
			$show_level = $container->settings['show_on_level'];
			$term_level = self::get_term_level( $term );

			if ( $term_level !== $show_level ) {
				return false;
			}
		}

		return true;
	}

	public static function get_term_level( $term ) {
		$ancestors = [];	
		while ( ! is_wp_error( $term ) && ! empty( $term->parent ) && ! in_array( $term->parent, $ancestors ) ) {
			$ancestors[] = intval( $term->parent );
			$term        = get_term( $term->parent );
		}

		return count( $ancestors ) + 1;
	}
}