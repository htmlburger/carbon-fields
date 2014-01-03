<table class="form-table carbon-container <?php echo $container_tag_class_name ?>" data-type="<?php echo $container_type ?>" data-options='<?php echo json_encode($container_options) ?>' data-profile-role="<?php echo $profile_role ?>">
	<?php
	foreach ($this->fields as $field) {
		$field->load();
		$help_text = $field->get_help_text();
		
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
			<tr>
				<th scope="row">
					<label for="<?php echo $field->get_id() ?>">
						<?php 
							echo $field->get_label();
							
							if ( $field->is_required() ) {
								echo ' <span class="carbon-required">*</span>';
							}
						?>
					</label>
				</th>
				<td>
					<div class="carbon-field carbon-<?php echo implode(' carbon-', $field->get_html_class()); ?>" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
						<?php echo $field->render(); ?>
					</div>
					<?php
					if ( !empty( $help_text ) ) {
						echo '<div class="help-text"><em>' . $help_text . '</em></div>';
					}
					?>
				</td>
			</tr>
			<?php
		}
	}
	?>
</table>
<?php wp_nonce_field('carbon_panel_' . $this->id . '_nonce', $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true); ?>