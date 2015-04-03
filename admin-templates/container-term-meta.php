<tr class="form-field carbon-container-term">
	<td colspan="2">
		<?php echo $this->get_nonce_field(); ?>

		<div class="container-holder <?php echo !empty($_GET['tag_ID']) ? 'edit-term-container' : 'add-term-container'; ?> container-<?php echo $this->id; ?>"></div>
	</td>
</tr>