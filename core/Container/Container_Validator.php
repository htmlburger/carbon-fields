<?php 
namespace Carbon_Fields\Container;

/**
* Wrapper class for container validation.
*/
class Container_Validator {
	
	/**
	 * Proxy method that calls appropriate method for validation
	 * after some preliminary checks
	 * 
	 * @param  object  $container
	 * @param  string  $type
	 * @param  string  $id  
	 * @return boolean
	 */
	public function is_valid_container( $container, $type, $id, $check_rest_visibilty = true ) {
		if ( ! $container->get_rest_visibility() && $check_rest_visibilty ) {
			return false;
		}

		if ( $container->type !== $type ) {
			return false;
		}

		$type_to_lower = strtolower( $type );

		return call_user_func( array( $this, "is_valid_{$type_to_lower}_container" ), $container, $id );
	}

	/**
	 * Validates Theme Options container
	 * 
	 * @param  object  $container
	 * @param  string  $id       
	 * @return boolean
	 */
	public function is_valid_theme_options_container( $container, $id = '' ) {
		return true;
	}

	/**
	 * Validates Post Meta container
	 * 
	 * @param  object  $container
	 * @param  string  $id       
	 * @return boolean           
	 */
	public function is_valid_post_meta_container( $container, $id ) {
		return $container->is_valid_save_conditions( $id );
	}

	/**
	 * Validates User Meta container
	 * 
	 * @param  object  $container 
	 * @param  string  $id        
	 * @return boolean            
	 */
	public function is_valid_user_meta_container( $container, $id ) {
		return $this->is_valid_post_meta_container( $container, $id );
	}

	/**
	 * Validates Term Meta container
	 * 
	 * @param  object  $container
	 * @param  string  $id
	 * @return boolean 
	 */
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

	/**
	 * Validates Comment Meta container
	 * 
	 * @param  object  $container
	 * @param  string  $id
	 * @return boolean 
	 */
	public function is_valid_comment_meta_container( $container, $id = '' ) {
		return true;
	}

	/**
	 * Returns the number of parents of a taxonomy term
	 * 
	 * @param  object $term 
	 * @return int
	 */
	public static function get_term_level( $term ) {
		$ancestors = array();	
		while ( ! is_wp_error( $term ) && ! empty( $term->parent ) && ! in_array( $term->parent, $ancestors ) ) {
			$ancestors[] = intval( $term->parent );
			$term        = get_term( $term->parent );
		}

		return count( $ancestors ) + 1;
	}
}