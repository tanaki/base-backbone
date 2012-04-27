
NS.Model.Item = Backbone.Model.extend({
	
	defaults: {
		id : 0,
		title : "title"
	},
	
	initialize: function(){

	},

	parse : function( data ){
		
		this.id = data.id;
		this.title = data.title;

		return this;
	}
});