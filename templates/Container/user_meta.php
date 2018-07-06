<div id="<?php echo esc_attr( $this->get_id() ); ?>">
	<h3><?php echo esc_html( $this->title ); ?></h3>
	<table class="form-table">
		<tr class="carbon-table-row">
			<th></th>
			<td>
				<fieldset class="container-holder carbon-user-container container-<?php echo esc_attr( $this->get_id() ); ?> <?php echo $this->is_tabbed() ? '' : 'carbon-fields-collection' ?>" data-profile-role="<?php echo esc_attr( $profile_role ) ?>"></fieldset>
			</td>
		</tr>
	</table>
</div>
