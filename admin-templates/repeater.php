<table class="eecf-contaienr <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->groups as $group): ?>
		<tr>
			<td>
				<table>
					<?php 
					$group_fields = $group->get_fields();
					foreach ($group_fields as $field): 
						// fields are already loaded
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