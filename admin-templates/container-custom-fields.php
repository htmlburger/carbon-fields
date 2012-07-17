<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->fields as $field): 
		$field->load();
	?>
		<tr>
			<td>
				<?php echo $field->render(); ?>
			</td>
		</tr>
	<?php endforeach ?>
</table>
<?php wp_nonce_field('eecf_panel_' . $this->id . '_nonce', $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true); ?>