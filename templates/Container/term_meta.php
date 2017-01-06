<tr class="carbon-table-row <?php echo $this->is_tabbed() ? '' : 'carbon-fields-collection' ?>">
	<td></td>
	<td>
		<fieldset id="<?php echo $this->id; ?>" class="container-holder carbon-term-container <?php echo ! empty( $_GET['tag_ID'] ) ? 'edit-term-container' : 'add-term-container'; ?> container-<?php echo $this->id; ?>"></fieldset>
		<?php echo $this->get_nonce_field(); ?>
	</td>
</tr>
