<div class="wrap carbon-theme-options">
	<div id="icon-options-general" class="icon32"><br /></div>
	<h2><?php echo $this->title ?></h2>
	
	<?php
	if ( !empty($this->errors) ) {
		echo '<div class="error settings-error">';
		
		foreach ($this->errors as $error) {
			echo '<p><strong>' . $error . '</strong></p>';
		}
	} else if ( !empty($this->notifications) ) {
		foreach ($this->notifications as $notification) {
			?>
			<div class="settings-error updated">
				<p><strong><?php echo $notification ?></strong></p>
			</div>
			<?php
		}
	}
	?>

	<form method="post" id="theme-options-form" enctype="multipart/form-data" action="<?php echo remove_query_arg(array('settings-updated')) ?>">
		<?php echo $this->get_nonce_field(); ?>

		<div id="icon-options-general" class="icon32"><br /></div>

		<div class="container-holder theme-options-container container-<?php echo $this->id; ?>">
		</div>

		<p class="submit"><input type="submit" name="submit" id="submit" class="button-primary" value="<?php esc_attr_e('Save Changes', 'crb'); ?>"></p>
	</form>
</div>