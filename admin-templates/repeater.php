<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->values as $index => $fields): ?>
		<tr>
			<td>
				<table>
					<?php foreach ($fields as $field): 
						$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
					?>
						<tr>
							<th scope="row">
								<?php echo $field->get_label(); ?>
								<?php echo $field->get_help_text(); ?>
							</th>
							<td>
								<?php echo $field->render(); ?>
							</td>
						</tr>
					<?php endforeach ?>
				</table>
				<a href="#" onclick="javascript:jQuery(this).parent().remove(); return false;">Remove</a>
			</td>
		</tr>
	<?php endforeach ?>
</table>