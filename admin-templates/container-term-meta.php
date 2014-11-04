<?php
foreach ($this->fields as $field) {
	$field->load();
	
	if ( $field->type == 'Separator' ) {
		?>
		<tr class="carbon-separator">
			<th colspan="2">
				<?php 
				echo $field->get_label();
				
				if ( !empty( $help_text ) ) {
					echo '<div class="help-text"><em>' . $help_text . '</em></div>';
				}
				?>
			</th>
		</tr>
		<?php
	} else {
		$default_value = $field->get_default_value();
		if (is_array($default_value)) {
			$default_value = implode(',', $default_value);
		}
		?>
		<tr class="form-field">
			<th scope="row">
				<?php
				echo $field->get_label(); 
				if ( $field->is_required() ) {
					echo ' <span class="carbon-required">*</span>';
				} ?>
			</th>
			<td>
				<div class="carbon-field carbon-<?php echo implode(' carbon-', $field->get_html_class()); ?>" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>" data-default-value="<?php echo esc_attr($default_value); ?>">
					<?php echo $field->render(); ?>
					<em class="help-text"><?php echo $field->get_help_text(); ?></em>
				</div>
			</td>
		</tr>
		<?php
	}
}

wp_nonce_field('carbon_panel_' . $this->id . '_nonce', $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true);
?>