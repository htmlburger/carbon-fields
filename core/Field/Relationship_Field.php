<?php

namespace Carbon_Fields\Field;

/**
 * Relationship field class.
 * Allows selecting and manually sorting entries from any custom post type.
 */
class Relationship_Field extends Field {
	protected $post_type = array( 'post' );
	protected $max = -1;
	protected $allow_duplicates = false;

	/**
	 * Admin initialization actions
	 */
	public function admin_init() {
		$this->add_template( $this->get_type() . '_item', array( $this, 'item_template' ) );

		parent::admin_init();
	}

	/**
	 * Set the post type of the entries.
	 *
	 * @param string|array $post_type Post type
	 */
	public function set_post_type( $post_type ) {
		if ( ! is_array( $post_type ) ) {
			$post_type = array( $post_type );
		}

		$this->post_type = $post_type;
		return $this;
	}

	/**
	 * Set the maximum allowed number of selected entries.
	 * 
	 * @param int $max 
	 */
	public function set_max( $max ) {
		$this->max = intval( $max );
		return $this;
	}

	/**
	 * Specify whether to allow each entry to be selected multiple times.
	 * 
	 * @param  boolean $allow 
	 */
	public function allow_duplicates( $allow = true ) {
		$this->allow_duplicates = (bool) $allow;
		return $this;
	}

	/**
	 * Used to get the title of an item. 
	 *
	 * Can be overriden or extended by the `carbon_relationship_title` filter.
	 * 
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype The subtype - "page", "post", "category", etc.
	 * @return string $title The title of the item.
	 */
	public function get_title_by_type( $id, $type, $subtype = '' ) {
		$title = get_the_title( $id );
		if ( ! $title ) {
			$title = '(no title) - ID: ' . $id;
		}

		/**
		 * Filter the title of the relationship item.
		 *
		 * @param string $title   The unfiltered item title.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters( 'carbon_relationship_title', $title, $this->get_name(), $id, $type, $subtype );
	}

	/**
	 * Used to get the label of an item. 
	 *
	 * Can be overriden or extended by the `carbon_relationship_item_label` filter.
	 * 
	 * @param int     $id      The database ID of the item.
	 * @param string  $type    Item type (post, term, user, comment, or a custom one).
	 * @param string  $subtype Subtype - "page", "post", "category", etc.
	 * @return string $label The label of the item.
	 */
	public function get_item_label( $id, $type, $subtype = '' ) {
		$object = get_post_type_object( $subtype );
		$label = $object->labels->singular_name;

		/**
		 * Filter the label of the relationship item.
		 *
		 * @param string $label   The unfiltered item label.
		 * @param string $name    Name of the relationship field.
		 * @param int    $id      The database ID of the item.
		 * @param string $type    Item type (post, term, user, comment, or a custom one).
		 * @param string $subtype Subtype - "page", "post", "category", etc.
		 */
		return apply_filters( 'carbon_relationship_item_label', $label, $this->get_name(), $id, $type, $subtype );
	}

	/**
	 * Generate the item options for the relationship field.
	 *
	 * @return array $options The selectable options of the relationship field.
	 */
	public function get_options() {
		$options = array();
		/**
		 * Filter the default query when fetching posts for a particular field.
		 *
		 * @param array $args The parameters, passed to get_posts().
		 */
		foreach ( $this->post_type as $post_type ) {
			$filter_name = 'carbon_relationship_options_' . $this->get_name() . '_post_' . $post_type;
			$args = apply_filters( $filter_name, array(
				'post_type' => $post_type,
				'posts_per_page' => -1,
				'fields' => 'ids',
				'suppress_filters' => false,
			) );

			// fetch and prepare posts as relationship items
			$new_options = get_posts( $args );
			foreach ( $new_options as &$p ) {
				$p = array(
					'id' => $p,
					'title' => $this->get_title_by_type( $p, 'post', $post_type ),
					'type' => 'post',
					'subtype' => $post_type,
					'label' => $this->get_item_label( $p, 'post', $post_type ),
					'is_trashed' => ( get_post_status( $p ) == 'trash' ),
					'edit_link'  => get_edit_post_link( $p ),
				);
			}

			$options = array_merge( $options, $new_options );
		}

		/**
		 * Filter the final list of options, available to a certain relationship field.
		 *
		 * @param array $options Unfiltered options items.
		 * @param string $name Name of the relationship field.
		 */
		$options = apply_filters( 'carbon_relationship_options', $options, $this->get_name() );

		return $options;
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 * This data will be available in the Underscore template and the Backbone Model.
	 * 
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json( $load ) {
		$field_data = parent::to_json( $load );

		if ( ! empty( $field_data['value'] ) ) {
			$value = array();

			$field_data['value'] = maybe_unserialize( $field_data['value'] );
			foreach ( $field_data['value'] as $single_value ) {
				$post_type = get_post_type( $single_value );
				$value[] = array(
					'id' => $single_value,
					'title' => $this->get_title_by_type( $single_value, 'post', $post_type ),
					'type' => 'post',
					'subtype' => $post_type,
					'label' => $this->get_item_label( $single_value, 'post', $post_type ),
					'is_trashed' => ( get_post_status( $single_value ) == 'trash' ),
				);
			}
			$field_data['value'] = $value;
		}

		$field_data = array_merge( $field_data, array(
			'options' => $this->get_options(),
			'max' => $this->max,
			'allow_duplicates' => $this->allow_duplicates,
		) );

		return $field_data;
	}

	/**
	 * The main Underscore template of this field.
	 */
	public function template() {
		?>
		<div class="relationship-container">
			<div class="selected-items-container">
				<strong>
					<# 
					var selected_items_length = 0;
					if ( value ) {
						selected_items_length = value.length;
					} #>
					<span class="selected-counter">{{{ selected_items_length }}}</span> 
					<span class="selected-label" data-single-label="<?php _e( 'selected item', 'carbon_fields' ); ?>" data-plural-label="<?php _e( 'selected items', 'carbon_fields' ); ?>">
						<?php _e( 'selected items', 'carbon_fields' ); ?>
					</span>

					<?php
					/* If set_max() has been set, show the allowed maximum items number */
					?>
					<# if ( max !== -1 ) { #>
						<span class="remaining"><?php _e( 'out of', 'carbon_fields' ); ?> {{{ max }}}</span>
					<# } #>
				</strong>
				
			</div>
			<div class="relationship-left">
				<div class="search-field">
					<input type="text" class="search-field" placeholder="<?php esc_attr_e( 'Search', 'carbon_fields' ); ?>" />
				</div>

				<ul class="relationship-list">
					<# if (options) { #>
						<# _.each(options, function(item) { #>
							<?php echo $this->item_template( false ); ?>
						<# }); #>
					<# } #>
				</ul>
			</div>

			<div class="relationship-right">
				<label><?php _e( 'Associated:', 'carbon_fields' ); ?></label>

				<ul class="relationship-list">
					<# if (value) { #>
						<# _.each(value, function(item) { #>
							<?php echo $this->item_template(); ?>
						<# }); #>
					<# } #>
				</ul>
			</div>
		</div>
		<?php
	}

	/**
	 * Serves as a Underscore template for the relationship items.
	 * Used for both the selected and the selectable options.
	 *
	 * @param bool $display_input Whether to display the selected item input field.
	 */
	public function item_template( $display_input = true ) {
		?>
		<li>
			<span class="mobile-handle"></span>
			<a href="#" data-item-id="{{{ item.id }}}" data-item-title="{{{ item.title }}}" data-item-type="{{{ item.type }}}" data-item-subtype="{{{ item.subtype }}}" data-item-label="{{{ item.label }}}" data-value="{{{ item.id }}}">
				<# if ( item.edit_link ) { #>
					<em class="edit-link" data-href="{{{ item.edit_link }}}"><?php _e( 'Edit', 'carbon_fields' ); ?></em>
				<# } #>
				<em>{{{ item.label }}}</em>
				<span></span>
				{{{ item.title }}}
				
			</a>
			<?php if ( $display_input ): ?>
				<input type="hidden" name="{{{ name }}}[]" value="{{{ item.id }}}" />
			<?php endif; ?>
		</li>
		<?php
	}

}
