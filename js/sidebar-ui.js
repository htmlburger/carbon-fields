window.carbon = window.carbon || {};

(function($) {

	var carbon = window.carbon;

	$(document).ready(function() {

		// Append an add sidebar button
		$addButton = $('<a class="add-new-h2 carbon-btn-add-sidebar" href="#">' + crbl10n.add_sidebar + '</a>');

		$addButton.on('click', function(event) {
			var sidebarName = $.trim( window.prompt( crbl10n.enter_name_of_new_sidebar ) );

			if (sidebarName) {
				carbon.sidebarManager(sidebarName, 'add', true);
			}

			event.preventDefault();
		});

		$('#wpbody-content > .wrap > h2').append($addButton);

		// Add a remove sidebar button to each carbon-sidebar
		$('.sidebar-carbon-sidebar').each(function() {
			var sidebarId = $(this).find('.widgets-sortables').attr('id');
			var $removeButton = $('<a href="#" class="carbon-btn-remove-sidebar" />');

			$removeButton.on('click', function(event) {
				var confirmation = confirm( crbl10n.remove_sidebar_confirmation );

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