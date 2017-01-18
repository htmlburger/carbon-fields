window.carbon = window.carbon || {};

(function($) {

	var carbon = window.carbon;

	carbon.pluginUpdateWarning = {
		views: {}
	};

	/*
	|--------------------------------------------------------------------------
	| Plugin Update Warning VIEW
	|--------------------------------------------------------------------------
	|
	| Responsible for showing a big warning near upgrade notices for the plugin
	|
	| @element: document
	| @holder:  carbon.views.pluginUpdateWarning
	|
	*/
	carbon.pluginUpdateWarning.views.View = Backbone.View.extend({
		el: '#carbon-fields-update td:first',

		initialize: function() {
			var _this = this;

			// this.listenTo(this.containersCollection, 'add', this.renderContainer);
		},

		render: function() {
			var template = _.template( $( '#crb-tmpl-plugin-update-warning' ).html() );
			this.$el.append( template( {} ) ); // this.model.attributes
    		return this;
		}
	});

	$(document).ready(function() {
		// Init the plugin notice view		
		carbon.views.pluginUpdateWarning = new carbon.pluginUpdateWarning.views.View();
		carbon.views.pluginUpdateWarning.render();
	});

}(jQuery));
