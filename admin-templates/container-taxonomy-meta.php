<!-- <table class="eecf-container <?php echo $container_tag_class_name ?>"> -->
	<?php foreach ($this->fields as $field): 
		$field->load();
	?>
		<tr>
			<th scope="row">
				<?php
				echo $field->get_label(); 
				if ( $field->is_required() ) {
					echo ' *';
				}
				echo $field->get_help_text();
				?>
			</th>
			<td>
				<div class="eecf-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
					<?php echo $field->render(); ?>
				</div>
			</td>
		</tr>
	<?php endforeach ?>
<!-- </table> -->
<tr>
	<td colspan="2">
		<?php wp_nonce_field('eecf_panel_' . $this->id . '_nonce', $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true); ?>
	</td>
</tr>