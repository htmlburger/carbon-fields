<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->values as $index => $fields): ?>
		<tr>
			<td>
				<table>
					<?php foreach ($fields as $field): 
						$old_name = $field->get_name();
						$field->set_name( $this->get_name() . '[' . $index . '][' . $old_name . ']' );
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
					<?php 
						$field->set_name( $old_name );
					endforeach ?>
				</table>
				<a href="#" onclick="javascript:jQuery(this).parent().remove(); return false;">Remove</a>
			</td>
		</tr>
	<?php endforeach ?>
</table>