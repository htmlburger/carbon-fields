window.carbon = window.carbon || {};

(function($) {

	var carbon = window.carbon;

	/*
	|--------------------------------------------------------------------------
	| Plugin Update Warning
	|--------------------------------------------------------------------------
	|
	| Responsible for showing a big warning near upgrade notices for the plugin
	*/

	carbon.pluginUpdateWarning = {
		views: {},
		models: {},
	};

	carbon.pluginUpdateWarning.models.Model = Backbone.Model.extend({
		
	});

	carbon.pluginUpdateWarning.views.View = Backbone.View.extend({
		el: '#carbon-fields-update td:first',

		initialize: function() {
			var _this = this;

			// this.listenTo(this.containersCollection, 'add', this.renderContainer);
		},

		render: function() {
			var template = _.template( $( '#crb-tmpl-plugin-update-warning' ).html() );
			var templateHtml = template( {} ); // this.model.attributes
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
		// Init the plugin notice view
		var pluginUpdateWarningModel = new carbon.pluginUpdateWarning.models.Model( carbonPluginUpdateWarningData );
		carbon.views.pluginUpdateWarning = new carbon.pluginUpdateWarning.views.View( { model: pluginUpdateWarningModel } );
		carbon.views.pluginUpdateWarning.render();
	});

}(jQuery));
