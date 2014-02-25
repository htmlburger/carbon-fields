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
		?>
		<tr class="form-field">
			<th scope="row">
				<?php
				echo $field->get_label(); 
				if ( $field->is_required() ) {
					echo ' *';
				} ?>
			</th>
			<td>
				<div class="carbon-field carbon-<?php echo implode(' carbon-', $field->get_html_class()); ?>" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
					<?php echo $field->render(); ?>
					<br/>
					<span class="description"><?php echo $field->get_help_text(); ?></span>
				</div>
			</td>
		</tr>
		<?php
	}
}

wp_nonce_field('carbon_panel_' . $this->id . '_nonce', $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true);
?>