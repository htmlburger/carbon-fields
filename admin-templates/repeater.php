<table class="eecf-contaienr <?php echo $container_tag_class_name ?>">
	<?php foreach ($this->fields as $field): 
		$field->load();
	?>
		<tr>
			<td>
				<?php echo $field->render(); ?>
			</td>
		</tr>
	<?php endforeach ?>
</table>