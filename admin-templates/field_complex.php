<table class="carbon-subcontainer <?php echo $container_tag_class_name . ' layout-' . $this->layout; ?>" data-min-values="<?php echo $this->get_min() ?>" data-max-values="<?php echo $this->get_max() ?>">
	
	<tr class="carbon-row carbon-empty-row" style="display: none">
		<td colspan="2">
			<?php
			printf(__('There are no %s yet. Click <a href="#">here</a> to add one.', 'crb'), $this->labels['plural_name']);
			?>
		</td>
	</tr>

	<?php 
	$index = 0;
	foreach ($this->values as $fields_num => $fields): 
			$group_name = $fields['type'];
			unset($fields['type']);
		?>
		<tr id="carbon-<?php echo $this->get_name() . '-' . $index; ?>-complex-container" class="carbon-row carbon-group-row"> <!-- .minimized -->
			<td class="carbon-drag-handle"><span><?php echo ($fields_num+1) ?></span></td>
			<td class="carbon-complex-entry-content">
				<?php if ( $this->layout == self::LAYOUT_TABLE ):
					echo '<input type="hidden" name="' . $this->get_name() . '[' . $index . '][group]' . '" value="' . $group_name . '" />';
					include(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'complex-button-holder.php');
					?>
					<table class="fixed layout layout-<?php echo $this->layout ?>">
						<?php foreach ($fields as $field): 
							$old_name = $field->get_name();
							$old_id = $field->get_id();
							
							// Add random chars in order to avoid ID collisions 
							// in complex field groups. Just using index doesn't work in 
							// some setups with nested complex fields. 
							$id_salt = substr(md5(mt_rand()), 0, 6);

							$field->set_id( $old_id . '-' . $id_salt );
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
									<div class="carbon-field carbon-<?php echo implode(' carbon-', $field->get_html_class()); ?>" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
										<?php echo $field->render(); ?>
									</div>
								</td>
							</tr>
						<?php 
							$field->set_name($old_name);
							$field->set_id( $old_id);
						endforeach ?>
					</table>
				<?php else: ?>
					<table class="fixed layout layout-<?php echo $this->layout ?>">
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
										<div class="carbon-field carbon-<?php echo implode(' carbon-', $field->get_html_class()); ?>" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
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
			<?php
			if ($this->layout == self::LAYOUT_LIST) {
				echo '<td class="carbon-action-col">';
				echo '<input type="hidden" name="' . $this->get_name() . '[' . $index . '][group]' . '" value="' . $group_name . '" />';
				include(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'complex-button-holder.php');
				echo '</td>';
			}
			?>
		</tr>
	<?php $index ++; endforeach ?>

	<!-- New Group -->

	<?php 
	$index = '__ei__';
	foreach ($this->groups as $group): ?>
		<?php $fields = $group->get_fields(); ?>
		<tr class="carbon-group-preview carbon-group-<?php echo $group->get_name() ?>">
			<td class="carbon-drag-handle"><span></span></td>
			<td>
				<?php if ( $this->layout == self::LAYOUT_TABLE ):
					echo '<input type="hidden" name="' . $this->get_name() . '[' . $index . '][group]' . '" value="" />';
					include(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'complex-button-holder.php');
					?>
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
									<em><?php echo $field->get_help_text(); ?></em>
								</th>
								<td>
									<div class="carbon-field carbon-field-skip carbon-<?php echo implode(' carbon-', $field->get_html_class()); ?>" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
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
										<div class="carbon-field  carbon-field-skip carbon-<?php echo implode(' carbon-', $field->get_html_class()); ?>" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
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
			<?php
			if ($this->layout == self::LAYOUT_LIST) {
				echo '<td class="carbon-action-col">';
				echo '<input type="hidden" name="' . $this->get_name() . '[' . $index . '][group]' . '" value="' . $group_name . '" />';
				include(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'complex-button-holder.php');
				echo '</td>';
			}
			?>
		</tr>
	<?php endforeach; ?>

	<tr class="carbon-actions">
		<td colspan="2">
			<div class="carbon-button">
				<a href="#" data-action="add" class="button">
					<?php printf(__('Add %s', 'crb'), $this->labels['singular_name']); ?>
					<?php if(count($this->groups) > 1) echo '&#8681;'; ?>
				</a>
				<ul>
					<?php foreach ($this->groups as $group): ?>
						<li><a href="#" data-group="<?php echo $group->get_name() ?>"><?php echo $group->get_label() ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
		</td>
	</tr>
</table>