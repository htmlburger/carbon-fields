<div class="wrap eecf-container <?php echo $container_tag_class_name ?>">
	<div id="icon-options-general" class="icon32"><br /></div>
	<h2><?php echo $this->title ?></h2>
	
	<?php if ( 0 /* errors */) : ?>
		<div id="message" class="updated below-h2" style="background-color: #ffc6c6; border-color: red;">
			<?php foreach ($this->tpl_vars['errors'] as $err) : ?>
				<p><strong><?php echo $err['label']?></strong>: <?php echo $err['error']?></p>
			<?php endforeach; ?>
		</div>
	<?php elseif ( 0 /* saved */): ?>
		<div id="message" class="updated fade below-h2" style="background-color: rgb(255, 251, 204);">
			<p>Settings Saved</p>
		</div>
	<?php endif; ?>

	<form method="post" class="" enctype="multipart/form-data">
		<table border="0" cellspacing="0" cellpadding="0" class="form-table">
			<?php foreach ($this->fields as $field): 
				$field->load();
			?>
				<tr>
					<th scope="row">
						<?php echo $field->get_label(); ?>
						<?php echo $field->get_help_text(); ?>
					</th>
					<td>
						<?php echo $field->render(); ?>
					</td>
				</tr>
			<?php endforeach ?>
		</table>
		<p class="submit"><input type="submit" name="submit" id="submit" class="button-primary" value="Save Changes"></p>
		<?php wp_nonce_field('eecf_panel_' . $this->id . '_nonce', $this->get_nonce_name(), /*referer?*/ false, /*echo?*/ true); ?>
	</form>
</div>