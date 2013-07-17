	<?php foreach ($this->fields as $field): 
		$field->load();
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
				<div class="carbon-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
					<?php echo $field->render(); ?>
					<span class="description"><?php echo $field->get_help_text(); ?></span>
				</div>
			</td>
		</tr>
	<?php endforeach ?>
<!-- </table> -->
<tr>
	<td colspan="2">
		<?php wp_nonce_field('carbon_panel_' . $this->id . '_nonce', $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true); ?>
	</td>
</tr>