<style>
	a.carbon-errors-dismiss { float: right; margin: 5px; text-decoration: none; color: #0073aa; }
	a.carbon-errors-dismiss span.dashicons-dismiss { font-size: 14px; line-height: 20px; color: #b4b9be }
	a.carbon-errors-dismiss:hover span.dashicons-dismiss { color: #cc0000 }

	.carbon-errors-log .carbon-errors-more { display: none; }
	.carbon-errors-log.expanded .carbon-errors-more { display: block; }
	.carbon-errors-log.expanded .carbon-errors-expand { display: none; }
</style>

<script>
	jQuery(function ($) {
		var $container = $('.carbon-errors-log');

		$('.carbon-errors-expand').on('click', function () {
			$container.addClass('expanded');
		});

		$('.carbon-errors-dismiss').on('click', function () {
			$container.slideUp();
			carbon.docCookies.setItem(<?php echo json_encode( $hideErrorsCookieName ) ?>, "1", Infinity);
		});
	})
</script>

<div class="error carbon-errors-log">
	<a href="#" class="carbon-errors-dismiss"><span class="dashicons dashicons-dismiss" style=" "></span>Dismiss</a>

	<p>Your site seems to be slightly misconfigured. <p><a href="#" class="carbon-errors-expand">Tell me more</a></p> 

	<div class="carbon-errors-more">
		<p>Carbon Fields library encountered errors that may prevent your custom fields or theme options to work properly. Here's a quick summary of the issue<?php echo $plural ?>: </p>

		<ol>
			<?php foreach ( $errors as $error ) :  ?>
				<li><?php echo htmlspecialchars( $error->getMessage() ) ?></li>
			<?php endforeach ?>	
		</ol>

		<p>You might want to get in touch with a developer regarding the issue<?php echo $plural ?>. If you feel adventurous, try enabling <code>WP_DEBUG</code> in your wp-config.php. </p>
	</div>
</div>
