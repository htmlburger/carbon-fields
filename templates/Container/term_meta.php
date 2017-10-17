<tr class="carbon-table-row">
	<td></td>
	<td>
		<div id="<?php echo $this->get_id(); ?>">
			<fieldset class="container-holder carbon-term-container <?php echo $this->is_tabbed() ? '' : 'carbon-fields-collection' ?> <?php echo ! empty( $_GET['tag_ID'] ) ? 'edit-term-container' : 'add-term-container'; ?> container-<?php echo $this->get_id(); ?>"></fieldset>
		</div>
	</td>
</tr>
