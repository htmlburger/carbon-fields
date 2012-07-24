<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->fields as $field): 
		$field->load();
	?>
		<tr>
			<th scope="row">
				<?php echo $field->get_label(); ?>
				<?php echo $field->get_help_text(); ?>
			</th>
			<td>
				<div class="eecf-field" data-type="<?php echo $field->type ?>">
					<?php echo $field->render(); ?>
				</div>
			</td>
		</tr>
	<?php endforeach ?>
</table>
<?php wp_nonce_field($this->get_nonce_name(), $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true); ?>