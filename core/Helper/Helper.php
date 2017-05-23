<?php

namespace Carbon_Fields\Helper;

use Carbon_Fields\Datastore\Datastore;
use Carbon_Fields\Container\Container;
use Carbon_Fields\Templater\Templater;
use Carbon_Fields\Libraries\Sidebar_Manager\Sidebar_Manager;
use Carbon_Fields\Exception\Incorrect_Syntax_Exception;

/**
 * Helper functions and main initialization class.
 */
class Helper {

	/**
	 * Create a new helper.
	 * Hook the main Carbon Fields initialization functionality.
	 */
	public function __construct() {
		# Initialize sidebar manager
		Sidebar_Manager::instance();
		
		add_action( 'init', array( $this, 'trigger_fields_register' ), 0 );
		add_action( 'carbon_after_register_fields', array( $this, 'init_containers' ) );
		add_action( 'admin_footer', array( $this, 'init_scripts' ), 0 );
		add_action( 'admin_print_footer_scripts', array( $this, 'print_json_data_script' ), 9 );
		add_action( 'crb_field_activated', array( $this, 'add_templates' ) );
		add_action( 'crb_container_activated', array( $this, 'add_templates' ) );
		add_action( 'after_setup_theme', array( $this, 'load_textdomain' ), 9999 );

		# Initialize templater
		new Templater();
	}

	/**
	 * Load the plugin textdomain.
	 */
	public function load_textdomain() {
		$dir = dirname( dirname( __DIR__ ) ) . '/languages/';
		$domain = 'carbon-fields';
		$locale = get_locale();
		$path = $dir . $domain . '-' . $locale . '.mo';
		load_textdomain( $domain, $path );
	}

	/**
	 * Register containers and fields.
	 */
	public function trigger_fields_register() {
		try {
			do_action( 'carbon_register_fields' );
			do_action( 'carbon_after_register_fields' );
		} catch ( Incorrect_Syntax_Exception $e ) {
			$callback = '';
			foreach ( $e->getTrace() as $trace ) {
				$callback .= '<br/>' . ( isset( $trace['file'] ) ? $trace['file'] . ':' . $trace['line'] : $trace['function'] . '()' );
			}
			wp_die( '<h3>' . $e->getMessage() . '</h3><small>' . $callback . '</small>' );
		}
	}

	/**
	 * Initialize containers.
	 */
	public function init_containers() {
		Container::init_containers();
	}

	/**
	 * Initialize main scripts
	 */
	public function init_scripts() {
		wp_enqueue_script( 'carbon-ext', \Carbon_Fields\URL . '/assets/js/ext.js', array( 'jquery' ), \Carbon_Fields\VERSION );
		wp_enqueue_script( 'carbon-app', \Carbon_Fields\URL . '/assets/js/app.js', array( 'jquery', 'backbone', 'underscore', 'jquery-touch-punch', 'jquery-ui-sortable', 'carbon-ext' ), \Carbon_Fields\VERSION );
	}

	/**
	 * Print the carbon JSON data script.
	 */
	public function print_json_data_script() {
		?>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var carbon_json = <?php echo wp_json_encode( $this->get_json_data() ); ?>;
//--><!]]>
</script>
		<?php
	}

	/**
	 * Retrieve containers and sidebars for use in the JS.
	 *
	 * @return array $carbon_data
	 */
	public function get_json_data() {
		global $wp_registered_sidebars;

		$carbon_data = array(
			'containers' => array(),
			'sidebars' => array(),
		);

		$containers = Container::get_active_containers();

		foreach ( $containers as $container ) {
			$container_data = $container->to_json( true );

			$carbon_data['containers'][] = $container_data;
		}

		foreach ( $wp_registered_sidebars as $sidebar ) {
			// Check if we have inactive sidebars
			if ( isset( $sidebar['class'] ) && strpos( $sidebar['class'], 'inactive-sidebar' ) !== false ) {
				continue;
			}

			$carbon_data['sidebars'][] = array(
				'name' => $sidebar['name'],
				'id'   => $sidebar['id'],
			);
		}

		return $carbon_data;
	}

	/**
	 * Retrieve post meta field for a post.
	 *
	 * @param  int    $id   Post ID.
	 * @param  string $name Custom field name.
	 * @param  string $type Custom field type (optional).
	 * @return mixed        Meta value.
	 */
	public static function get_post_meta( $id, $name, $type = null ) {
		$name = $name[0] == '_' ? $name : '_' . $name;

		return self::get_field_value( 'post_meta', $name, $type, $id );
	}

	/**
	 * Shorthand for get_post_meta().
	 * Uses the ID of the current post in the loop.
	 *
	 * @param  string $name Custom field name.
	 * @param  string $type Custom field type (optional).
	 * @return mixed        Meta value.
	 */
	public static function get_the_post_meta( $name, $type = null ) {
		return self::get_post_meta( get_the_ID(), $name, $type );
	}

	/**
	 * Retrieve theme option field value.
	 *
	 * @param  string $name Custom field name.
	 * @param  string $type Custom field type (optional).
	 * @return mixed        Option value.
	 */
	public static function get_theme_option( $name, $type = null ) {
		return self::get_field_value( 'theme_options', $name, $type );
	}

	/**
	 * Retrieve term meta field for a term.
	 *
	 * @param  int    $id   Term ID.
	 * @param  string $name Custom field name.
	 * @param  string $type Custom field type (optional).
	 * @return mixed        Meta value.
	 */
	public static function get_term_meta( $id, $name, $type = null ) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		return self::get_field_value( 'term_meta', $name, $type, $id );
	}

	/**
	 * Retrieve user meta field for a user.
	 *
	 * @param  int    $id   User ID.
	 * @param  string $name Custom field name.
	 * @param  string $type Custom field type (optional).
	 * @return mixed        Meta value.
	 */
	public static function get_user_meta( $id, $name, $type = null ) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		return self::get_field_value( 'user_meta', $name, $type, $id );
	}

	/**
	 * Retrieve comment meta field for a comment.
	 *
	 * @param  int    $id   Comment ID.
	 * @param  string $name Custom field name.
	 * @param  string $type Custom field type (optional).
	 * @return mixed        Meta value.
	 */
	public static function get_comment_meta( $id, $name, $type = null ) {
		$name = $name[0] == '_' ? $name: '_' . $name;

		return self::get_field_value( 'comment_meta', $name, $type, $id );
	}

	/**
	 * Retrieve a certain field value from the database.
	 * Handles the logic for different field types.
	 *
	 * @param  string $data_type Data type.
	 * @param  string $name      Custom field name.
	 * @param  string $type      Custom field type (optional).
	 * @param  int    $id        ID (optional).
	 * @return mixed             Meta value.
	 */
	public static function get_field_value( $data_type, $name, $type = null, $id = null ) {
		$datastore_name = str_replace( ' ', '_', ucwords( str_replace( '_', ' ', $data_type ) ) );

		switch ( $type ) {
			case 'complex':
				$value = self::get_complex_fields( $datastore_name, $name, $id );
			break;

			case 'map':
			case 'map_with_address':
				$value = array(
					'lat' => (float) self::get_field_value_by_datastore( $data_type, $name . '-lat', $id ),
					'lng' => (float) self::get_field_value_by_datastore( $data_type, $name . '-lng', $id ),
					'address' => self::get_field_value_by_datastore( $data_type, $name . '-address', $id ),
					'zoom' => (int) self::get_field_value_by_datastore( $data_type, $name . '-zoom', $id ),
				);

				if ( ! array_filter( $value ) ) {
					$value = array();
				}
			break;

			case 'association':
				$raw_value = self::get_field_value_by_datastore( $data_type, $name, $id );
				$value = self::parse_relationship_field( $raw_value, $type );
			break;

			default:
				$value = self::get_field_value_by_datastore( $data_type, $name, $id );

				// backward compatibility for the old Relationship field
				$value = self::maybe_old_relationship_field( $value );
		}

		return $value;
	}

	/**
	 * Retrieve a certain field value from the database.
	 * Handles the logic for different datastores (containers).
	 *
	 * @param  string $datastore_type Datastore type.
	 * @param  string $name       Custom field name.
	 * @param  int    $id         ID (optional).
	 * @return mixed              Meta value.
	 */
	public static function get_field_value_by_datastore( $datastore_type, $name, $id = null ) {
		$args = array( $id, $name, true );
		$function = '';

		switch ( $datastore_type ) {
			case 'post_meta':
				$function = 'get_post_meta';
			break;

			case 'user_meta':
				$function = 'get_user_meta';
			break;

			case 'comment_meta':
				$function = 'get_comment_meta';
			break;

			case 'term_meta':
				$function = 'get_metadata';
				$args = array( 'term', $id, $name, true );
			break;

			case 'theme_options':
				$function = 'get_option';
				$args = array( $name );
			break;
		}

		if ( ! empty( $function ) && function_exists( $function ) ) {
			return call_user_func_array( $function, $args );
		}

		return false;
	}

	/**
	 * Adds the field/container template(s) to the templates stack.
	 *
	 * @param object $object field or container object
	 **/
	public function add_templates( $object ) {
		$templates = $object->get_templates();

		if ( ! $templates ) {
			return false;
		}

		foreach ( $templates as $name => $callback ) {
			ob_start();

			call_user_func( $callback );

			$html = ob_get_clean();

			// Add the template to the stack
			Templater::add_template( $name, $html );
		}
	}

	/**
	 * Build a string of concatenated pieces for an OR regex.
	 *
	 * @param  array  $pieces Pieces
	 * @param  string $glue   Glue between the pieces
	 * @return string         Result string
	 */
	public static function preg_quote_array( $pieces, $glue = '|' ) {
		$pieces = array_map( 'preg_quote', $pieces, array( '~' ) );

		return implode( $glue, $pieces );
	}

	/**
	 * Build the regex for parsing a certain complex field.
	 *
	 * @param  string $field_name  Name of the complex field.
	 * @param  array  $group_names Array of group names.
	 * @param  array  $field_names Array of subfield names.
	 * @return string              Regex
	 */
	public static function get_complex_field_regex( $field_name, $group_names = array(), $field_names = array() ) {
		if ( ! empty( $group_names ) ) {
			$group_regex = self::preg_quote_array( $group_names );
		} else {
			$group_regex = '\w*';
		}

		if ( ! empty( $field_names ) ) {
			$field_regex = self::preg_quote_array( $field_names );
		} else {
			$field_regex = '.*?';
		}

		return '~^' . preg_quote( $field_name, '~' ) . '(?P<group>' . $group_regex . ')-_?(?P<key>' . $field_regex . ')_(?P<index>\d+)_?(?P<sub>\w+)?(-(?P<trailing>.*))?$~';
	}

	/**
	 * Retrieve the complex field data for a certain field.
	 *
	 * @param  string $type Datastore type.
	 * @param  string $name Name of the field.
	 * @param  int    $id   ID of the entry (optional).
	 * @return array        Complex data entries.
	 */
	public static function get_complex_fields( $type, $name, $id = null ) {
		$datastore = Datastore::factory( $type );

		if ( $id !== null ) {
			$datastore->set_id( $id );
		}

		$group_rows = $datastore->load_values( $name );
		$input_groups = array();

		foreach ( $group_rows as $row ) {
			if ( ! preg_match( self::get_complex_field_regex( $name ), $row['field_key'], $field_name ) ) {
					continue;
			}

			$row['field_value'] = maybe_unserialize( $row['field_value'] );

			// backward compatibility for Relationship field
			$row['field_value'] = self::parse_relationship_field( $row['field_value'] );

			$input_groups[ $field_name['index'] ]['_type'] = $field_name['group'];
			if ( ! empty( $field_name['trailing'] ) ) {
				$input_groups = self::expand_nested_field( $input_groups, $row, $field_name );
			} else if ( ! empty( $field_name['sub'] ) ) {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $field_name['sub'] ] = $row['field_value'];
			} else {
				$input_groups[ $field_name['index'] ][ $field_name['key'] ] = $row['field_value'];
			}
		}

		// create groups list with loaded fields
		self::ksort_recursive( $input_groups );

		return $input_groups;
	}

	/**
	 * Recursively expand the subfields of a complex field.
	 *
	 * @param  array $input_groups Input groups.
	 * @param  array $row          Data row (key and value).
	 * @param  array $field_name   Field name pieces.
	 * @return array               Expanded data.
	 */
	public static function expand_nested_field( $input_groups, $row, $field_name ) {
		$subfield_key_token = $field_name['key'] . '_' . $field_name['sub'] . '-' . $field_name['trailing'];
		if ( ! preg_match( self::get_complex_field_regex( $field_name['key'] ), $subfield_key_token, $subfield_name ) ) {
			return $input_groups;
		}

		$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ]['_type'] = $subfield_name['group'];

		if ( ! empty( $subfield_name['trailing'] ) ) {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ] = self::expand_nested_field( $input_groups[ $field_name['index'] ][ $field_name['key'] ], $row, $subfield_name );
		} else if ( ! empty( $subfield_name['sub'] ) ) {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ][ $subfield_name['key'] ][ $subfield_name['sub'] ] = $row['field_value'];
		} else {
			$input_groups[ $field_name['index'] ][ $field_name['key'] ][ $subfield_name['index'] ][ $subfield_name['key'] ] = $row['field_value'];
		}

		return $input_groups;
	}

	/**
	 * Parse the raw value of the relationship and association fields.
	 *
	 * @param  string $raw_value Raw relationship value.
	 * @param  string $type      Field type.
	 * @return array             Array of parsed data.
	 */
	public static function parse_relationship_field( $raw_value = '', $type = '' ) {
		if ( $raw_value && is_array( $raw_value ) ) {
			$value = array();
			foreach ( $raw_value as $raw_value_item ) {
				if ( is_string( $raw_value_item ) && strpos( $raw_value_item, ':' ) !== false ) {
					$item_data = explode( ':', $raw_value_item );
					$item = array(
						'id' => $item_data[2],
						'type' => $item_data[0],
					);

					if ( $item_data[0] === 'post' ) {
						$item['post_type'] = $item_data[1];
					} elseif ( $item_data[0] === 'term' ) {
						$item['taxonomy'] = $item_data[1];
					}

					$value[] = $item;
				} elseif ( $type === 'association' ) {
					$value[] = array(
						'id' => $raw_value_item,
						'type' => 'post',
						'post_type' => get_post_type( $raw_value_item ),
					);
				} else {
					$value[] = $raw_value_item;
				}
			}

			$raw_value = $value;
		}

		return $raw_value;
	}

	/**
	 * Detect if using the old way of storing the relationship field values.
	 * If so, parse them to the new way of storing the data.
	 *
	 * @param  mixed $value Old field value.
	 * @return mixed        New field value.
	 */
	public static function maybe_old_relationship_field( $value ) {
		if ( is_array( $value ) && ! empty( $value ) && ! empty( $value[0] ) ) {
			if ( preg_match( '~^\w+:\w+:\d+$~', $value[0] ) ) {
				$new_value = array();
				foreach ( $value as $value_entry ) {
					$pieces = explode( ':', $value_entry );
					$new_value[] = $pieces[2];
				}
				$value = $new_value;
			}
		}

		return $value;
	}

	/**
	 * Recursive sorting function by array key.
	 * @param  array  &$array     The input array.
	 * @param  int    $sort_flags Flags for controlling sorting behavior.
	 * @return array              Sorted array.
	 */
	public static function ksort_recursive( &$array, $sort_flags = SORT_REGULAR ) {
		if ( ! is_array( $array ) ) {
			return false;
		}

		ksort( $array, $sort_flags );
		foreach ( $array as $key => $value ) {
			self::ksort_recursive( $array[ $key ], $sort_flags );
		}

		return true;
	}
}
