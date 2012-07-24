<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->values as $index => $fields): ?>
		<tr class="eecf-repeater-row">
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
								<div class="eecf-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
									<?php echo $field->render(); ?>
								</div>
							</td>
						</tr>
					<?php 
						$field->set_name( $old_name );
					endforeach ?>
				</table>
				<p class=" alignright"><a href="#" data-action="remove">Remove</a></p>
			</td>
		</tr>
	<?php endforeach ?>
	<tr class="eecf-repeater-preview">
		<td>
			<table>
				<?php 
				$index = '__i__';
				foreach ($this->fields as $field): 
					$old_name = $field->get_name();
					$field->set_name( $this->get_name() . '[' . $index . '][' . $old_name . ']' );
				?>
					<tr>
						<th scope="row">
							<?php echo $field->get_label(); ?>
							<?php echo $field->get_help_text(); ?>
						</th>
						<td>
							<div class="eecf-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
								<?php echo $field->render(); ?>
							</div>
						</td>
					</tr>
				<?php 
					$field->set_name( $old_name );
				endforeach ?>
			</table>
			<p class="alignright"><a href="#" data-action="remove">Remove</a></p>
		</td>
	</tr>
	<tr>
		<td>
			<a href="#" data-action="add">Add Row</a>
		</td>
	</tr>
</table>