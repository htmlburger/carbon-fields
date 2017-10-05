window.carbonFields = window.carbonFields || {};

(function($) {

	var carbon = window.carbonFields;

	/**
	 * Handles sidebar requests
	 *
	 * @param  {string} name
	 * @param  {string} action
	 *
	 * @return {promise}
	 */
	carbon.sidebarManager = function(name, action, reload) {
		var request = $.ajax({
			url: ajaxurl,
			method: 'POST',
			dataType: 'json',
			data: {
				action: 'carbon_fields_' + action + '_sidebar',
				name: name
			}
		});

		request.done(function( response ) {
			if ( !response || !response.success ) {
				alert( response.error || 'An error occurred while trying to ' + action + ' the sidebar.' );
			}
		});

		request.fail(function( jqXHR, textStatus ) {
			alert( 'Request failed: ' + textStatus );
		});

		if (reload) {
			request.always(function() {
				window.location.reload();
			});
		}

		return request;
	}

	$(document).ready(function() {

		// Append an add sidebar button
		$addButton = $('<a class="add-new-h2 carbon-btn-add-sidebar" href="#"></a>').text( crbSidebarl10n.add_sidebar );

		$addButton.on('click', function(event) {
			var sidebarName = $.trim( window.prompt( crbSidebarl10n.enter_name_of_new_sidebar ) );

			if (sidebarName) {
				carbon.sidebarManager(sidebarName, 'add', true);
			}

			event.preventDefault();
		});

		$('body.widgets-php #wpbody-content > .wrap > :first:header').append($addButton);

		// Add a remove sidebar button to each carbon-sidebar
		$('.sidebar-carbon-sidebar').each(function() {
			var sidebarId = $(this).find('.widgets-sortables').attr('id');
			var $removeButton = $('<a href="#" class="carbon-btn-remove-sidebar" />');

			$removeButton.on('click', function(event) {
				var confirmation = confirm( crbSidebarl10n.remove_sidebar_confirmation );

				if (confirmation) {
					carbon.sidebarManager(sidebarId, 'remove', true);
					event.stopPropagation();
				}

				event.preventDefault();
			});

			$(this).find('> .widgets-sortables > .sidebar-name').append($removeButton);
		});

	});

}(jQuery));
