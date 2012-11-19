<table class="carbon-subcontainer <?php echo $container_tag_class_name ?>" data-min-values="<?php echo $this->get_min() ?>" data-max-values="<?php echo $this->get_max() ?>">
	<?php 
	$index = 0;
	foreach ($this->values as $fields_num => $fields): 
			$group_name = $fields['type'];
			unset($fields['type']);
		?>
		<tr class="carbon-group-row">
			<td class="carbon-drag-handle"><span><?php echo ($fields_num+1) ?></span></td>
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
									<?php
									echo $field->get_label(); 
									if ( $field->is_required() ) {
										echo ' <span class="carbon-required">*</span>';
									}
									echo $field->get_help_text();
									?>
								</th>
								<td>
									<div class="carbon-field" data-type="<?php echo $field->type ?>">
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
										<?php
										echo $field->get_label(); 
										if ( $field->is_required() ) {
											echo ' <span class="carbon-required">*</span>';
										}
										echo $field->get_help_text();
										?>
										<div class="carbon-field" data-type="<?php echo $field->type ?>">
											<?php echo $field->render(); ?>
										</div>
									</td>
							<?php 
								$field->set_name($old_name);
							endforeach ?>
						</tr>
					</table>
				<?php endif; ?>
				<a class="carbon-btn-remove" href="#" data-action="remove">Remove</a>
			</td>
		</tr>
	<?php $index ++; endforeach ?>

	<!-- New Group -->

	<?php 
	$index = '__ei__';
	foreach ($this->groups as $group): ?>
		<tr class="carbon-group-preview carbon-group-<?php echo $group->get_name() ?>">
			<td class="carbon-drag-handle"><span></span></td>
			<td>
				<input type="hidden" name="<?php echo $this->get_name() . '[' . $index . '][group]' ?>" value="" />
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
									<?php
									echo $field->get_label(); 
									if ( $field->is_required() ) {
										echo ' <span class="carbon-required">*</span>';
									}
									echo $field->get_help_text();
									?>
								</th>
								<td>
									<div class="carbon-field carbon-field-skip" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
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
										<?php 
										echo $field->get_label(); 
										if ( $field->is_required() ) {
											echo ' <span class="carbon-required">*</span>';
										}
										echo $field->get_help_text();
										?>
										<div class="carbon-field  carbon-field-skip" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
											<?php echo $field->render(); ?>
										</div>
									</td>
							<?php 
								$field->set_name($old_name);
							endforeach ?>
						</tr>
					</table>
				<?php endif; ?>
				<a class="carbon-btn-remove" href="#" data-action="remove">Remove</a>
			</td>
		</tr>
	<?php endforeach; ?>

	<tr class="carbon-actions">
		<td colspan="2">
			<select name="<?php echo $this->get_name() . '[' . $index . '][group]' ?>" <?php if(count($this->groups)==1) echo 'style="display:none"'; ?>>
				<?php foreach ($this->groups as $group): ?>
					<option value="<?php echo $group->get_name() ?>"><?php echo $group->get_label() ?></option>
				<?php endforeach; ?>
			</select>
			<a href="#" data-action="add" class="button">Add Row</a>
		</td>
	</tr>
</table>