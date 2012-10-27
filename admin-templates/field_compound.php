<table class="carbon-subcontainer <?php echo $container_tag_class_name ?>" data-min-values="<?php echo $this->get_min() ?>" data-max-values="<?php echo $this->get_max() ?>">
	<?php foreach ($this->values as $index => $fields): ?>
		<tr class="carbon-compound-row">
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
										echo ' <span class="carbon-required">*</span>';
									}
									echo $field->get_help_text();
									?>
								</th>
								<td>
									<div class="carbon-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
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
										echo ' <span class="carbon-required">*</span>';
									}
									echo $field->get_help_text();
									?>
									<div class="carbon-field" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
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
	<tr class="carbon-compound-preview">
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
										echo ' <span class="carbon-required">*</span>';
									}
									echo $field->get_help_text();
									?>
									<div class="carbon-field carbon-field-skip" data-type="<?php echo $field->type ?>" data-name="<?php echo $field->get_name() ?>">
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
	<tr class="carbon-actions">
		<td>
			<a href="#" data-action="add" class="button">Add Row</a>
		</td>
	</tr>
</table>