<table class="eecf-contaienr <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->groups as $index => $fields): ?>
		<tr>
			<td>
				<table>
					<?php foreach ($fields as $field): 
						$field->set_name( $this->get_name() . '[' . $index . '][' . $field->get_name() . ']' );
					?>
						<tr>
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