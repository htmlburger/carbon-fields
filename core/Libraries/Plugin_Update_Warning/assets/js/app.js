window.carbonFields = window.carbonFields || {};

(function($) {

	/*
	|--------------------------------------------------------------------------
	| Plugin Update Warning
	|--------------------------------------------------------------------------
	|
	| Responsible for showing a big warning near upgrade notices for the plugin
	*/

	carbonFields.pluginUpdateWarning = {
		views: {},
		models: {},
	};

	carbonFields.pluginUpdateWarning.models.Model = Backbone.Model.extend({
		
	});

	carbonFields.pluginUpdateWarning.views.View = Backbone.View.extend({
		el: '#carbon-fields-update td:first',

		render: function() {
			var template = _.template( $( '#crb-tmpl-plugin-update-warning' ).html() );
			var templateHtml = template( {} );
			this.$el.append( templateHtml );

			var pluginPath = this.model.get( 'plugin_path' )
			var $pluginUpdateCheckbox = $( '#update-plugins-table input[type="checkbox"][value="' + pluginPath + '"]:first' );
			if ( $pluginUpdateCheckbox.length > 0 ) {
				var $elCore = $pluginUpdateCheckbox.closest( 'tr' ).find( 'td.plugin-title:first' );
				$elCore.append( templateHtml );
			}

    		return this;
		}
	});

	$(document).ready(function() {
		var pluginUpdateWarningModel = new carbonFields.pluginUpdateWarning.models.Model( carbonFieldsPluginUpdateWarning );
		carbonFields.pluginUpdateWarning = new carbonFields.pluginUpdateWarning.views.View( { model: pluginUpdateWarningModel } );
		carbonFields.pluginUpdateWarning.render();
	});

}(jQuery));
