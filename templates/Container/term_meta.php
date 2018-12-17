<?php ob_start(); ?>
	<fieldset class="container-<?php echo $this->get_id(); ?>"></fieldset>
<?php $html = ob_get_clean(); ?>

<?php if ( ! empty( $_GET['tag_ID'] ) ): ?>
	<tr class="carbon-table-row">
		<td></td>
		<td>
			<?php echo $html; ?>
		</td>
	</tr>
<?php else: ?>
	<div class="form-field">
		<?php echo $html; ?>
	</div>
<?php endif; ?>
