<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Helper\Helper;

class Block_Container extends Container {
	/***
	 * Block type render callback.
	 *
	 * @var callable
	 */
	protected $render_callback;

	/**
	 * {@inheritDoc}
	 */
	public function __construct( $id, $title, $type, $condition_collection, $condition_translator ) {
		parent::__construct( $id, $title, $type, $condition_collection, $condition_translator );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'empty' ), $this->has_default_datastore() );
		}

		// Set "common" as default category for the block type.
		$this->settings[ 'category' ] = array(
			'slug' => 'common',
		);
	}

	/**
	 * {@inheritDoc}
	 */
	public function init() {
		add_action( 'init', array( $this, '_attach' ) );
	}

	/**
	 * {@inheritDoc}
	 */
	public function is_valid_save() {
		// Return false because Gutenberg
		// will handle saving.
		return false;
	}

	/**
	 * {@inheritDoc}
	 */
	public function save( $data = null ) {
		// Nothing to do here because
		// the data is saved by Gutenberg.
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_environment_for_request() {
		return array();
	}

	/**
	 * {@inheritDoc}
	 */
	public function is_valid_attach_for_request() {
		return function_exists( 'register_block_type' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_environment_for_object( $object_id ) {
		return array();
	}

	/**
	 * {@inheritDoc}
	 */
	public function is_valid_attach_for_object( $object_id = null ) {
		return function_exists( 'register_block_type' );
	}

	/**
	 * {@inheritDoc}
	 */
	public function attach() {
		add_filter( 'block_categories', array( $this, 'attach_block_category' ), 10, 2 );

		$this->register_block();
	}

	/**
	 * Attach the category of the block type.
	 *
	 * @param  array $categories
	 * @return array
	 */
	public function attach_block_category( $categories ) {
		foreach ( $categories as $category ) {
			if ( $category[ 'slug' ] === $this->settings[ 'category' ][ 'slug' ] ) {
				return $categories;
			}
		}

		return array_merge( $categories, [ $this->settings[ 'category' ] ] );
	}

	/**
	 * Set the description of the block type.
	 *
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/#description-optional
	 *
	 * @param  string $description
	 * @return Block_Container
	 */
	public function set_description( $description ) {
		$this->settings[ 'description' ] = $description;

		return $this;
	}

	/**
	 * Set the category of the block type.
	 *
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/#category
	 *
	 * @param  string $slug
	 * @param  string $title
	 * @param  string $icon
	 * @return Block_Container
	 */
	public function set_category( $slug, $title = null, $icon = null ) {
		$this->settings[ 'category' ][ 'slug' ] = $slug;
		$this->settings[ 'category' ][ 'icon' ] = $icon;
		$this->settings[ 'category' ][ 'title' ] = $title ?: Helper::normalize_label( $slug );

		return $this;
	}

	/**
	 * Set the icon of the block type.
	 *
	 * @see https://developer.wordpress.org/resource/dashicons
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/#icon-optional
	 *
	 * @param  string $icon
	 * @return Block_Container
	 */
	public function set_icon( $icon ) {
		$this->settings[ 'icon' ] = $icon;

		return $this;
	}

	/**
	 * Set the keywords of the block type.
	 *
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/#keywords-optional
	 *
	 * @param  array $keywords
	 * @return Block_Container
	 */
	public function set_keywords( $keywords = [] ) {
		$this->settings[ 'keywords' ] = array_slice( $keywords, 0, 3 );

		return $this;
	}

	/**
	 * Set the render callback of the block type.
	 *
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks/
	 *
	 * @param  callable $render_callback
	 * @return Block_Container
	 */
	public function set_render_callback( $render_callback ) {
		$this->render_callback = $render_callback;

		return $this;
	}

	/**
	 * Register the block type.
	 *
	 * @return void
	 */
	protected function register_block() {
		if ( is_null( $this->render_callback ) ) {
			throw new \Exception( __( "'render_callback' is required for the blocks.", 'crb' ) );
		}

		if ( ! is_callable( $this->render_callback ) ) {
			throw new \Exception( __( "'render_callback' must be a callable.", 'crb' ) );
		}

		$name = str_replace( 'carbon-fields-container-', '', str_replace( '_', '-', $this->id ) );
		$name = 'carbon-fields/' . $name;
		$callback = $this->render_callback;

		$attributes = array_reduce( $this->get_fields(), function( $attributes, $field ) {
			$attributes[ $field->get_base_name() ] = array(
				'default' => $field->get_default_value(),
			);

			return $attributes;
		}, array() );

		register_block_type( $name, array(
			'attributes' => $attributes,
			'render_callback' => $callback,
		) );
	}
}
