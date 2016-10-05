<div class="carbon-container">
	<?php if ( $this->has_fields() ) :  ?>
		<fieldset class="container-holder carbon-grid container-<?php echo $this->id; ?>" data-json="<?php echo urlencode( json_encode( $this->to_json( false ) ) ); ?>"></fieldset>
	<?php else :
		_e( 'No options are available for this widget.', 'carbon-fields' ); ?>
	<?php endif; ?>
</div>
