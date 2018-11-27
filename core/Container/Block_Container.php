<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;

/**
 * Theme options container class.
 */
class Block_Container extends Container {
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
	 * Attach container as a theme options page/subpage.
	 */
	public function init() {
		add_action( 'init', array( $this, '_attach' ) );
		add_filter( 'block_categories', array($this, 'attach_block_category'), 10, 2 );

		if ($this->is_valid_attach()) {
			$this->register_block();
		}
	}

	/**
	 * Checks whether the current save request is valid
	 *
	 * @return bool
	 */
	public function is_valid_save() {
		return true;
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param mixed $user_data
	 */
	public function save( $user_data = null ) {}

	/**
	 * Get environment array for page request (in admin)
	 *
	 * @return array
	 */
	protected function get_environment_for_request() {
		return array();
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 */
	public function is_valid_attach_for_request() {
		return function_exists('register_block_type');
	}

	/**
	 * Get environment array for object id
	 *
	 * @return array
	 */
	protected function get_environment_for_object( $object_id ) {
		return array();
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 */
	public function is_valid_attach_for_object( $object_id = null ) {
		if ( ! function_exists( 'register_block_type' ) ) {
			return false;
		}

		return $this->all_conditions_pass( intval( $post->ID ) );
	}

	/**
	 * Add theme options container pages.
	 * Hook the container saving action.
	 */
	public function attach() {}

	/**
	 * Whether this container is currently viewed.
	 *
	 * @return boolean
	 */
	public function should_activate() {
		return true;
	}

	/**
	 * Register the block type
	 *
	 */
	private function register_block() {
		if (!isset($this->settings['block_callback'])) {
			throw new \Exception( __( "'set_render_callback' is required for the Block Container!", 'crb' ) );
		}

		if (!is_callable($this->settings['block_callback'])) {
			throw new \Exception( __( "'set_render_callback' must be a valid callback!", 'crb' ) );
		}

		$name = str_replace( 'carbon-fields-container-', '', str_replace('_', '-', $this->id ));
		$callback = $this->settings['block_callback'];

		register_block_type( 'carbon-fields/' . $name, array(
			'render_callback' => $callback,
		) );
	}

	/**
	 * Attaches the custom block category if existing.
	 *
	 * @param $categories The registered blocks categories
	 *
	 * @return array
	 */
	public function attach_block_category( $categories ) {
		if (!isset($this->settings['block_category_slug'])) {
			return $categories;
		}


		foreach ($categories as $category) {
			if ($category['slug'] === $this->settings['block_category_slug']) {
				return $categories;
			}
		}

		return array_merge(
			$categories,
			[
				[
					'slug' => $this->settings['block_category_slug'],
					'title' => $this->settings['block_category_title'],
				]
			]
		);
	}

	/**
	 * Output the container markup
	 */
	public function render() {}

	/**
	 * Sets the description of the rendered block
	 *
	 * @see https://wordpress.org/gutenberg/handbook/block-api/#category
	 * @param string $description
	 */
	public function set_description( $description ) {
		$this->settings['block_description'] = $description;

		return $this;
	}

	/**
	 * Sets the category of the rendered block
	 *
	 * @see https://wordpress.org/gutenberg/handbook/block-api/#category
	 * @param string $category
	 */
	public function set_category( $slug, $title = null ) {
		$this->settings['block_category_slug'] = $slug;
		$this->settings['block_category_title'] = $title ? $title : Helper::normalize_label($slug);

		return $this;
	}

	/**
	 * Sets the icon of the rendered block
	 *
	 * @see https://developer.wordpress.org/resource/dashicons
	 * @see https://wordpress.org/gutenberg/handbook/block-api/#icon-optional
	 * @param string $icon
	 */
	public function set_icon( $icon ) {
		$this->settings['block_icon'] = $icon;

		return $this;
	}

	/**
	 * Sets the keywords of the rendered block
	 *
	 * @see https://wordpress.org/gutenberg/handbook/block-api/#keywords-optional
	 * @param array $keywords
	 */
	public function set_keywords( $keywords = [] ) {
		$this->settings['block_keywords'] = array_slice($keywords, 0, 3);

		return $this;
	}

	/**
	 * Sets the keywords of the rendered block
	 *
	 * @see https://wordpress.org/gutenberg/handbook/block-api/#keywords-optional
	 * @param callable $render_callback
	 */
	public function set_render_callback( $render_callback ) {
		$this->settings['block_callback'] = $render_callback;

		return $this;
	}
}
