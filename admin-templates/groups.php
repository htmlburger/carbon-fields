<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php 
	$index = 0;
	foreach ($this->values as $fields): 
			$group_name = $fields['type'];
			unset($fields['type']);
		?>
		<tr class="eecf-group-row">
			<td>
				<input type="hidden" name="<?php echo $this->get_name() . '[' . $index . '][group]' ?>" value="<?php echo $group_name ?>" />
				<?php if ( $this->layout == self::LAYOUT_TABLE ): ?>
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
				<?php else: ?>
					<table>
						<tr>
							<?php foreach ($fields as $field): 
								$old_name = $field->get_name();
								$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
							?>
									<td>
										<?php echo $field->get_label(); ?>
										<?php echo $field->get_help_text(); ?>
										<div class="eecf-field" data-type="<?php echo $field->type ?>">
											<?php echo $field->render(); ?>
										</div>
									</td>
							<?php 
								$field->set_name($old_name);
							endforeach ?>
						</tr>
					</table>
				<?php endif; ?>
				<p class="alignright"><a href="#" data-action="remove">Remove</a></p>
			</td>
		</tr>
	<?php $index ++; endforeach ?>

	<!-- New Group -->

	<?php 
	$index = '__i__';
	foreach ($this->groups as $group): ?>
		<tr class="eecf-group-preview eecf-group-<?php echo $group->get_name() ?>">
			<td>
				<input type="hidden" name="<?php echo $this->get_name() . '[' . $index . '][group]' ?>" value="" />
				<strong><?php echo $group->get_label() ?></strong>

				<?php if ( $this->layout == self::LAYOUT_TABLE ): ?>
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
									<div class="eecf-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
										<?php echo $field->render(); ?>
									</div>
								</td>
							</tr>
						<?php 
							$field->set_name($old_name);
						endforeach ?>
					</table>
				<?php else: ?>
					<table>
						<tr>
							<?php 
							$fields = $group->get_fields();
							foreach ($fields as $field): 
								$old_name = $field->get_name();
								$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
							?>
									<td>
										<?php echo $field->get_label(); ?>
										<?php echo $field->get_help_text(); ?>
										<div class="eecf-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
											<?php echo $field->render(); ?>
										</div>
									</td>
							<?php 
								$field->set_name($old_name);
							endforeach ?>
						</tr>
					</table>
				<?php endif; ?>
				<p class="alignright"><a href="#" data-action="remove">Remove</a></p>
			</td>
		</tr>
	<?php endforeach; ?>

	<tr>
		<td>
			<p>
				<label>New </label>
				<select name="<?php echo $this->get_name() . '[' . $index . '][group]' ?>">
					<?php foreach ($this->groups as $group): ?>
						<option value="<?php echo $group->get_name() ?>"><?php echo $group->get_label() ?></option>
					<?php endforeach; ?>
				</select>
				row
				<a href="#" data-action="add">Add</a>
			</p>
		</td>
	</tr>
</table>