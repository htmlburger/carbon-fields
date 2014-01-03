<div class="carbon-btn-holder">
	<div class="carbon-complex-action">
		<?php if ( count($fields) > 1 && $this->layout == self::LAYOUT_TABLE ): ?>
			<a class="carbon-btn-collapse" href="#" data-action="toggle-minimize" title="<?php esc_attr_e('Collapse/Expand', 'crb'); ?>"><?php _e('Collapse/Expand', 'crb'); ?></a>
		<?php endif ?>
		<a class="carbon-btn-duplicate" href="#" data-action="duplicate" title="<?php esc_attr_e('Clone', 'crb'); ?>"><?php _e('Clone', 'crb'); ?></a>
		<a class="carbon-btn-remove" href="#" data-action="remove" title="<?php esc_attr_e('Remove', 'crb'); ?>"><?php _e('Remove', 'crb'); ?></a>
	</div>
</div>
