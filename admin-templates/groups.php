<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php 
	$index = 0;
	foreach ($this->values as $fields): 
			$group_name = $fields['type'];
			unset($fields['type']);
		?>
		<tr>
			<td>
				<input type="hidden" name="<?php echo $this->get_name() . '[' . $index . '][group]' ?>" value="<?php echo $group_name ?>" />
				<table>
					<?php foreach ($fields as $field): 
						$old_name = $field->get_name();
						$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
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
						$field->set_name($old_name);
					endforeach ?>
				</table>
				<a href="#" onclick="javascript:jQuery(this).parent().remove(); return false;">Remove</a>
			</td>
		</tr>
	<?php $index ++; endforeach ?>

	<!-- New Group -->

	<tr>
		<td>
			<select name="<?php echo $this->get_name() . '[' . $index . '][group]' ?>">
				<?php foreach ($this->groups as $group): ?>
					<option value="<?php echo $group->get_name() ?>"><?php echo $group->get_label() ?></option>
				<?php endforeach; ?>
			</select>
		</td>
	</tr>

	<?php foreach ($this->groups as $group): ?>
		<tr>
			<td>
				<strong>Group <?php echo $group->get_label() ?></strong>
				<table>
					<?php 
					$fields = $group->get_fields();
					foreach ($fields as $field): 
						$old_name = $field->get_name();
						$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
					?>
						<tr>
							<th scope="row">
								<?php echo $field->get_label(); ?>
								<?php echo $field->get_help_text(); ?>
							</th>
							<td>
								<div class="eecf-<?php echo $field->type ?>">
									<?php echo $field->render(); ?>
								</div>
							</td>
						</tr>
					<?php 
						$field->set_name($old_name);
					endforeach ?>
				</table>
				<a href="#" onclick="javascript:jQuery(this).parent().remove(); return false;">Remove</a>
			</td>
		</tr>
	<?php endforeach; ?>
</table>