<table class="eecf-container <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->values as $index => $fields): ?>
		<tr class="eecf-repeater-row">
			<td>
				<?php if ( $this->layout == self::LAYOUT_TABLE ): ?>
					<table>
						<?php foreach ($fields as $field): 
							$old_name = $field->get_name();
							$field->set_name( $this->get_name() . '[' . $index . '][' . $old_name . ']' );
						?>
							<tr>
								<th scope="row">
									<?php
									echo $field->get_label(); 
									if ( $field->is_required() ) {
										echo ' *';
									}
									echo $field->get_help_text();
									?>
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
				<?php else: ?>
					<table>
						<tr>
							<?php foreach ($fields as $field): 
								$old_name = $field->get_name();
								$field->set_name( $this->get_name() . '[' . $index . '][' . $old_name . ']' );
							?>
								<td>
									<?php
									echo $field->get_label(); 
									if ( $field->is_required() ) {
										echo ' *';
									}
									echo $field->get_help_text();
									?>
									<div class="eecf-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
										<?php echo $field->render(); ?>
									</div>
								</td>
							<?php 
								$field->set_name( $old_name );
							endforeach ?>
						</tr>
					</table>
				<?php endif ?>
				<p class=" alignright"><a href="#" data-action="remove">Remove</a></p>
			</td>
		</tr>
	<?php endforeach ?>
	<tr class="eecf-repeater-preview">
		<td>
			<?php if ( $this->layout == self::LAYOUT_TABLE ): ?>
				<table>
					<?php 
					$index = '__ei__';
					foreach ($this->fields as $field): 
						$old_name = $field->get_name();
						$field->set_name( $this->get_name() . '[' . $index . '][' . $old_name . ']' );
					?>
						<tr>
							<th scope="row">
								<?php
								echo $field->get_label(); 
								if ( $field->is_required() ) {
									echo ' *';
								}
								echo $field->get_help_text();
								?>
							</th>
							<td>
								<div class="eecf-field eecf-field-skip" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
									<?php echo $field->render(); ?>
								</div>
							</td>
						</tr>
					<?php 
						$field->set_name( $old_name );
					endforeach ?>
				</table>
			<?php else: ?>
				<table>
					<tr>
						<?php 
						$index = '__ei__';
						foreach ($this->fields as $field): 
							$old_name = $field->get_name();
							$field->set_name( $this->get_name() . '[' . $index . '][' . $old_name . ']' );
						?>
								<td>
									<?php
									echo $field->get_label(); 
									if ( $field->is_required() ) {
										echo ' *';
									}
									echo $field->get_help_text();
									?>
									<div class="eecf-field eecf-field-skip" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
										<?php echo $field->render(); ?>
									</div>
								</td>
						<?php 
							$field->set_name( $old_name );
						endforeach ?>
					</tr>
				</table>
			<?php endif; ?>
			<p class="alignright"><a href="#" data-action="remove">Remove</a></p>
		</td>
	</tr>
	<tr>
		<td>
			<a href="#" data-action="add">Add Row</a>
		</td>
	</tr>
</table>