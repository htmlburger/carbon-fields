<table class="carbon-container <?php echo $container_tag_class_name ?>" data-type="<?php echo $container_type ?>" data-options='<?php echo json_encode($container_options) ?>'>
	<?php foreach ($this->fields as $field): 
		$field->load();
	?>
		<tr>
			<td>
				<label>
					<?php 
						echo $field->get_label(); 
						if ( $field->is_required() ) {
							echo ' <span class="carbon-required">*</span>';
						}
					?>
				</label>
				<?php echo $field->get_help_text();  ?>
				<div class="carbon-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
					<?php echo $field->render(); ?>
				</div>
			</td>
		</tr>
	<?php endforeach ?>
</table>
<?php wp_nonce_field($this->get_nonce_name(), $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true); ?>