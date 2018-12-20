<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Helper\Helper;

class Block_Container extends Container {
	/**
	 * {@inheritDoc}
	 */
	public $settings = array(
		'preview' => true,
		'category' => array(
			'slug' => 'common',
		),
	);

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

		return array_merge( $categories, array( $this->settings[ 'category' ] ) );
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
	public function set_keywords( $keywords = array() ) {
		$this->settings[ 'keywords' ] = array_slice( $keywords, 0, 3 );

		return $this;
	}

	/**
	 * Set a style handle.
	 *
	 * @param  string $key
	 * @param  string $handle
	 * @return Block_Container
	 */
	protected function set_style_handle( $key, $handle ) {
		if ( ! wp_style_is( $handle ) ) {
			throw new \Exception( __( "Style '$handle' is not enqueued.", 'crb' ) );
		}

		$this->settings[ $key ] = $handle;

		return $this;
	}

	/**
	 * Set the style of the block type.
	 *
	 * @param  string $handle
	 * @return Block_Container
	 */
	public function set_style( $handle ) {
		return $this->set_style_handle( 'style', $handle );
	}

	/**
	 * Set the editor style of the block type.
	 *
	 * @param  string $handle
	 * @return Block_Container
	 */
	public function set_editor_style( $handle ) {
		return $this->set_style_handle( 'editor_style', $handle );
	}

	/**
	 * Set whether the preview mode is available for the block type.
	 *
	 * @param  boolean $preview
	 * @return Block_Container
	 */
	public function set_preview_mode( $preview = true ) {
		$this->settings[ 'preview' ] = $preview;

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
	 * Render the block type.
	 *
	 * @param  array  $attributes
	 * @return string
	 */
	public function render_block( $attributes ) {
		ob_start();

		call_user_func( $this->render_callback , $attributes[ 'data' ] );

		return ob_get_clean();
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

		$name = str_replace( 'carbon-fields-container-', 'carbon-fields/', str_replace( '_', '-', $this->id ) );
		$style = isset( $this->settings[ 'style' ] ) ? $this->settings[ 'style' ] : null;
		$editor_style = isset( $this->settings[ 'editor_style' ] ) ? $this->settings[ 'editor_style' ] : null;
		$attributes = array_reduce( $this->get_fields(), function( $attributes, $field ) {
			$attributes[ 'data' ][ 'default' ][ $field->get_base_name() ] = $field->get_default_value();

			return $attributes;
		}, array(
			'data' => array(
				'type' => 'object',
				'default' => array(),
			),
		) );

		register_block_type( $name, array(
			'style' => $style,
			'editor_style' => $editor_style,
			'attributes' => $attributes,
			'render_callback' => array( $this, 'render_block' ),
		) );
	}
}
