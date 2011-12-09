
NS.Router = Backbone.Router.extend({
	
	routes : {
		"*actions" : "defaultAction"
	},
	
	defaultAction : function() {
		NS.EventManager.trigger(NS.Events.APP_READY);
	}
	
});