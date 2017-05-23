<div id="<?php echo $this->id; ?>-wrapper" class="carbon-cloaked">
	<h3><?php echo $this->title; ?></h3>
	<table class="form-table">
		<tr class="carbon-table-row">
			<th></th>
			<td>
				<fieldset id="<?php echo $this->id; ?>" class="container-holder carbon-user-container container-<?php echo $this->id; ?> <?php echo $this->is_tabbed() ? '' : 'carbon-fields-collection' ?>" data-profile-role="<?php echo $profile_role ?>"></fieldset>
				<?php echo $this->get_nonce_field(); ?>
			</td>
		</tr>
	</table>
</div>