<table class="carbon-subcontainer <?php echo $container_tag_class_name ?>" data-min-values="<?php echo $this->get_min() ?>" data-max-values="<?php echo $this->get_max() ?>">
	
	<tr class="carbon-empty-row" style="display: none">
		<td colspan="2">
			There are no <?php echo $this->labels['plural_name'] ?> yet. Click <a href="#">here</a> to add one.
		</td>
	</tr>

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
				<div class="carbon-btn-holder">
					<a class="carbon-btn-remove" href="#" data-action="remove">Remove</a>
				</div>
				<?php if ( $this->layout == self::LAYOUT_TABLE ): ?>
					<table class="layout-<?php echo $this->layout ?>">
						<?php foreach ($fields as $field): 
							$old_name = $field->get_name();
							$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
						?>
							<tr>
								<th scope="row">
									<label for="<?php echo $field->get_id() ?>"><?php
									echo $field->get_label(); 
									if ( $field->is_required() ) {
										echo ' <span class="carbon-required">*</span>';
									}
									?></label>
									<em class="help-text"><?php echo $field->get_help_text(); ?></em>
								</th>
								<td>
									<div class="carbon-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
										<?php echo $field->render(); ?>
									</div>
								</td>
							</tr>
						<?php 
							$field->set_name($old_name);
						endforeach ?>
					</table>
				<?php else: ?>
					<table class="layout-<?php echo $this->layout ?>">
						<tr>
							<?php foreach ($fields as $field): 
								$old_name = $field->get_name();
								$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
							?>
									<td>
										<label for="<?php echo $field->get_id() ?>">
											<?php
												echo $field->get_label(); 
												if ( $field->is_required() ) {
													echo ' <span class="carbon-required">*</span>';
												}
											?>
										</label>
										<em class="help-text"><?php echo $field->get_help_text(); ?></em>
										<div class="carbon-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
											<?php echo $field->render(); ?>
										</div>
									</td>
							<?php 
								$field->set_name($old_name);
							endforeach ?>
						</tr>
					</table>
				<?php endif; ?>
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
				<div class="carbon-btn-holder">
					<a class="carbon-btn-remove" href="#" data-action="remove">Remove</a>
				</div>
				

				<?php if ( $this->layout == self::LAYOUT_TABLE ): ?>
					<table class="layout-<?php echo $this->layout ?>">
						<?php 
						$fields = $group->get_fields();
						foreach ($fields as $field): 
							$old_name = $field->get_name();
							$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
						?>
							<tr>
								<th scope="row">
									<label for="<?php echo $field->get_id() ?>"><?php
									echo $field->get_label(); 
									if ( $field->is_required() ) {
										echo ' <span class="carbon-required">*</span>';
									}
									?></label>
									<em><?php echo $field->get_help_text(); ?></em>
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
					<table class="layout-<?php echo $this->layout ?>">
						<tr>
							<?php 
							$fields = $group->get_fields();
							foreach ($fields as $field): 
								$old_name = $field->get_name();
								$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
							?>
									<td>
										<label for="<?php echo $field->get_id() ?>">
											<?php
												echo $field->get_label(); 
												if ( $field->is_required() ) {
													echo ' <span class="carbon-required">*</span>';
												}
											?>
										</label>
										<em><?php echo $field->get_help_text(); ?></em>
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
			</td>
		</tr>
	<?php endforeach; ?>

	<tr class="carbon-actions">
		<td colspan="2">
			<div class="carbon-button">
				<a href="#" data-action="add" class="button">Add <?php echo $this->labels['singular_name'] ?> <?php if(count($this->groups) > 1) echo '&#8681;'; ?></a>
				<ul>
					<?php foreach ($this->groups as $group): ?>
						<li><a href="#" data-group="<?php echo $group->get_name() ?>"><?php echo $group->get_label() ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>


		</td>
	</tr>
</table>