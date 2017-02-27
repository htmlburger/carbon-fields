<?php

namespace Carbon_Fields\Container;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Field container designed to extend WordPress custom fields functionality,
 * providing easier user interface to add, edit and delete text, media files,
 * location information and more.
 */
class Post_Meta_Container extends Container {
	/**
	 * ID of the post the container is working with
	 *
	 * @see init()
	 * @var int
	 */
	protected $post_id;

	/**
	 * List of default container settings
	 *
	 * @see init()
	 * @var array
	 */
	public $settings = array(
		'post_type' => array( 'post' ),
		'panel_context' => 'normal',
		'panel_priority' => 'high',
		'show_on' => array(
			'category' => null,
			'template_names' => array(),
			'not_in_template_names' => array(),
			'post_formats' => array(),
			'level_limit' => null,
			'tax_term_id' => null,
			'page_id' => null,
			'parent_page_id' => null,
			'post_path' => null,
		),
	);

	/**
	 * Array of condition types that are checked during save requests
	 *
	 * @var array<string>
	 */
	protected $static_conditions = array( 'post_id', 'post_type' );

	/**
	 * Array of condition types that are checked during edit requests
	 *
	 * @var array<string>
	 */
	protected $dynamic_conditions = array( 'post_parent_id', 'post_format', 'post_level', 'post_template', 'post_term' );

	/**
	 * Create a new container
	 *
	 * @param string $unique_id Unique id of the container
	 * @param string $title title of the container
	 * @param string $type Type of the container
	 **/
	public function __construct( $unique_id, $title, $type ) {
		parent::__construct( $unique_id, $title, $type );

		if ( ! $this->get_datastore() ) {
			$this->set_datastore( Datastore::make( 'post_meta' ), $this->has_default_datastore() );
		}
	}

	/**
	 * Create DataStore instance, set post ID to operate with (if such exists).
	 * Bind attach() and save() to the appropriate WordPress actions.
	 **/
	public function init() {
		$input = stripslashes_deep( $_GET );
		$request_post_id = isset( $input['post'] ) ? intval( $input['post'] ) : 0;
		if ( $request_post_id > 0 ) {
			$this->set_post_id( $request_post_id );
		}

		// force post_type to be array
		if ( ! is_array( $this->settings['post_type'] ) ) {
			$this->settings['post_type'] = array( $this->settings['post_type'] );
		}

		add_action( 'admin_init', array( $this, '_attach' ) );
		add_action( 'save_post', array( $this, '_save' ) );

		// support for attachments
		add_action( 'add_attachment', array( $this, '_save' ) );
		add_action( 'edit_attachment', array( $this, '_save' ) );
	}

	/**
	 * Checks whether the current save request is valid
	 * Possible errors are triggering save() for autosave requests
	 * or performing post save outside of the post edit page (like Quick Edit)
	 *
	 * @param int $post_id ID of the post against which save() is ran
	 * @return bool
	 **/
	public function is_valid_save( $post_id = 0 ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return false;
		}

		if ( ! $this->verified_nonce_in_request() ) {
			return false;
		}

		return $this->is_valid_attach_for_object( $post_id );
	}

	/**
	 * Perform save operation after successful is_valid_save() check.
	 * The call is propagated to all fields in the container.
	 *
	 * @param int $post_id ID of the post against which save() is ran
	 **/
	public function save( $post_id = null ) {
		// Unhook action to garantee single save
		remove_action( 'save_post', array( $this, '_save' ) );

		$this->set_post_id( $post_id );

		foreach ( $this->fields as $field ) {
			$field->set_value_from_input( stripslashes_deep( $_POST ) );
			$field->save();
		}

		do_action( 'carbon_after_save_custom_fields', $post_id );
		do_action( 'carbon_after_save_post_meta', $post_id );
	}

	/**
	 * Perform checks whether the container should be attached during the current request
	 *
	 * @return bool True if the container is allowed to be attached
	 **/
	public function is_valid_attach_for_request() {
		global $pagenow;

		if ( $pagenow !== 'post.php' && $pagenow !== 'post-new.php' ) {
			return false;
		}

		$input = stripslashes_deep( $_GET );
		$request_post_type = isset( $input['post_type'] ) ? $input['post_type'] : '';
		$post_type = '';


		if ( $this->post_id ) {
			$post_type = get_post_type( $this->post_id );
		} elseif ( ! empty( $request_post_type ) ) {
			$post_type = $request_post_type;
		} elseif ( $pagenow === 'post-new.php' ) {
			$post_type = 'post';
		}

		if ( ! $post_type ) {
			return false;
		}

		$post = get_post( $this->post_id );
		$post = $post ? $post : null;
		$environment = array(
			'post_id' => $post ? $post->ID : 0,
			'post' => $post,
			'post_type' => $post_type,
		);
		if ( ! $this->fulfillable_collection->filter( $this->static_conditions )->is_fulfilled( $environment ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Check container attachment rules against object id
	 *
	 * @param int $object_id
	 * @return bool
	 **/
	public function is_valid_attach_for_object( $object_id = null ) {
		$post = get_post( intval( $object_id ) );

		if ( ! $post ) {
			return false;
		}

		$environment = array(
			'post_id' => $post->ID,
			'post' => $post,
			'post_type' => get_post_type( $post->ID ),
		);
		if ( ! $this->fulfillable_collection->is_fulfilled( $environment ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Add meta box for each of the container post types
	 **/
	public function attach() {
		foreach ( $this->settings['post_type'] as $post_type ) {
			add_meta_box(
				$this->id,
				$this->title,
				array( $this, 'render' ),
				$post_type,
				$this->settings['panel_context'],
				$this->settings['panel_priority']
			);
		}

		foreach ( $this->settings['post_type'] as $post_type ) {
			add_filter( "postbox_classes_{$post_type}_{$this->id}", array( $this, 'add_postbox_classes' ) );
		}
	}

	/**
	 * Classes to add to the post meta box
	 */
	public function add_postbox_classes( $classes ) {
		$classes[] = 'carbon-box';
		return $classes;
	}

	/**
	 * Output the container markup
	 **/
	public function render() {
		include \Carbon_Fields\DIR . '/templates/Container/post_meta.php';
	}

	/**
	 * Set the post ID the container will operate with.
	 *
	 * @param int $post_id
	 **/
	public function set_post_id( $post_id ) {
		$this->post_id = $post_id;
		$this->get_datastore()->set_id( $post_id );
	}

	/**
	 * Get array of post types this container can appear on conditionally
	 * 
	 * @return array<string>
	 */
	public function get_post_type_visibility() {
		$all_post_types = get_post_types();
		$filtered_collection = $this->fulfillable_collection->filter( array( 'post_type' ) );

		$shown_on = array();
		foreach ( $all_post_types as $post_type ) {
			$environment = array(
				'post_type' => $post_type,
			);
			if ( $filtered_collection->is_fulfilled( $environment ) ) {
				$shown_on[] = $post_type;
			}
		}
		return $shown_on;
	}

	/**
	 * COMMON USAGE METHODS
	 */

	/**
	 * Show the container only on particular page referenced by it's path.
	 *
	 * @param int|string $page page ID or page path
	 * @return object $this
	 **/
	public function show_on_page( $page ) {
		$page_id = absint( $page );

		if ( $page_id && $page_id == $page ) {
			$page_obj = get_post( $page_id );
		} else {
			$page_obj = get_page_by_path( $page );
		}

		$this->show_on_post_type( 'page' );

		if ( $page_obj ) {
			$this->settings['show_on']['page_id'] = $page_obj->ID;
		} else {
			$this->settings['show_on']['page_id'] = -1;
		}

		return $this;
	}

	/**
	 * Show the container only on pages whose parent is referenced by $parent_page_path.
	 *
	 * @param string $parent_page_path
	 * @return object $this
	 **/
	public function show_on_page_children( $parent_page_path ) {
		$page = get_page_by_path( $parent_page_path );

		$this->show_on_post_type( 'page' );

		if ( $page ) {
			$this->settings['show_on']['parent_page_id'] = $page->ID;
		} else {
			$this->settings['show_on']['parent_page_id'] = -1;
		}

		return $this;
	}

	/**
	 * Show the container only on posts from the specified category.
	 *
	 * @see show_on_taxonomy_term()
	 *
	 * @param string $category_slug
	 * @return object $this
	 **/
	public function show_on_category( $category_slug ) {
		$this->settings['show_on']['category'] = $category_slug;

		return $this->show_on_taxonomy_term( $category_slug, 'category' );
	}

	/**
	 * Show the container only on pages whose template has filename $template_path.
	 *
	 * @param string|array $template_path
	 * @return object $this
	 **/
	public function show_on_template( $template_path ) {
		// Backwards compatibility where only pages support templates
		if ( version_compare( get_bloginfo( 'version' ), '4.7', '<' ) ) {
			$this->show_on_post_type( 'page' );
		}

		if ( is_array( $template_path ) ) {
			foreach ( $template_path as $path ) {
				$this->show_on_template( $path );
			}

			return $this;
		}

		$this->settings['show_on']['template_names'][] = $template_path;

		return $this;
	}

	/**
	 * Hide the container from pages whose template has filename $template_path.
	 *
	 * @param string|array $template_path
	 * @return object $this
	 **/
	public function hide_on_template( $template_path ) {
		if ( is_array( $template_path ) ) {
			foreach ( $template_path as $path ) {
				$this->hide_on_template( $path );
			}
			return $this;
		}

		$this->settings['show_on']['not_in_template_names'][] = $template_path;

		return $this;
	}

	/**
	 * Show the container only on hierarchical posts of level $level.
	 * Levels start from 1 (top level post)
	 *
	 * @param int $level
	 * @return object $this
	 **/
	public function show_on_level( $level ) {
		if ( $level < 0 ) {
			Incorrect_Syntax_Exception::raise( 'Invalid level limitation (' . $level . ')' );
		}

		$this->settings['show_on']['level_limit'] = $level;

		return $this;
	}

	/**
	 * Show the container only on posts which have term $term_slug from the $taxonomy_slug taxonomy.
	 *
	 * @param string $taxonomy_slug
	 * @param string $term_slug
	 * @return object $this
	 **/
	public function show_on_taxonomy_term( $term_slug, $taxonomy_slug ) {
		$term = get_term_by( 'slug', $term_slug, $taxonomy_slug );

		$this->settings['show_on']['tax_slug'] = $taxonomy_slug;
		$this->settings['show_on']['tax_term'] = $term_slug;
		$this->settings['show_on']['tax_term_id'] = $term ? $term->term_id : null;

		return $this;
	}

	/**
	 * Show the container only on posts from the specified format.
	 * Learn more about {@link http://codex.wordpress.org/Post_Formats Post Formats (Codex)}
	 *
	 * @param string|array $post_format Name of the format as listed on Codex
	 * @return object $this
	 **/
	public function show_on_post_format( $post_format ) {
		if ( is_array( $post_format ) ) {
			foreach ( $post_format as $format ) {
				$this->show_on_post_format( $format );
			}
			return $this;
		}

		if ( $post_format === 'standard' ) {
			$post_format = 0;
		}

		$this->settings['show_on']['post_formats'][] = strtolower( $post_format );

		return $this;
	}

	/**
	 * Show the container only on posts from the specified type(s).
	 *
	 * @param string|array $post_types
	 * @return object $this
	 **/
	public function show_on_post_type( $post_types ) {
		$post_types = (array) $post_types;

		$this->settings['post_type'] = $post_types;

		return $this;
	}

	/**
	 * Sets the meta box container context
	 *
	 * @see https://codex.wordpress.org/Function_Reference/add_meta_box
	 * @param string $context ('normal', 'advanced' or 'side')
	 */
	public function set_context( $context ) {
		$this->settings['panel_context'] = $context;

		return $this;
	}

	/**
	 * Sets the meta box container priority
	 *
	 * @see https://codex.wordpress.org/Function_Reference/add_meta_box
	 * @param string $priority ('high', 'core', 'default' or 'low')
	 */
	public function set_priority( $priority ) {
		$this->settings['panel_priority'] = $priority;

		return $this;
	}
}
