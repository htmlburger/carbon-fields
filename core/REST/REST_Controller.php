<?php 
namespace Carbon_Fields\REST;

use Carbon_Fields\Container\Container;

class REST_Controller {
	
	/**
	 * Version of the API
	 * @var string
	 */
	protected $version = '1';

	/**
	 * Plugin slug
	 * @var string
	 */
	protected $vendor = 'carbon-fields';

	/**
	 * The containers holding the fields
	 * for the response
	 * 
	 * @var array
	 */
	public $containers = [];

	public function get_data( $type, $id  = '') {
		$response = [];
		
		$this->containers = $this->filter_containers( $type, $id );
		
		foreach ( $this->containers as $container ) {
			$fields = $container->get_fields();

			foreach ( $fields as $field ) {
				
				if ( $id ) {
					$field->get_datastore()->set_id( $id );
				}

				$field->load();

				$response[ $field->get_name() ] = $field->get_value();
			}
		}

		return $response;
	}

	public function filter_containers( $type, $id = '' ) {
		return array_filter( Container::$active_containers, function( $container ) use ( $type, $id ) {
			return $this->is_valid_container( $container, $type, $id );
		});
	}

	public function set_version( $version ) {
		$this->version = $version;
	}

	public function get_version() {
		return $this->version;
	}

	public function set_vendor( $vendor ) { 
		$this->vendor = $vendor;
	}

	public function get_vendor() {
		return $this->vendor;
	}

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