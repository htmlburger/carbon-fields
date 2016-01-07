<div class="carbon-container">
	<?php if ($this->has_fields()): ?>
		<div class="container-holder carbon-grid container-<?php echo $this->id; ?>" data-json="<?php echo urlencode( json_encode($this->to_json(false)) ); ?>"></div>
	<?php else:
		_e('No options are available for this widget.', 'crb'); ?>
	<?php endif; ?>
</div>
