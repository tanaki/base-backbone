
NS.Collection.ItemCollection = Backbone.Collection.extend({
	
	model : NS.Model.Item,
	url : "/data/data.json",
	initialize : function() {
		
	},
	parse : function(data){
		return data.items;
	}
	
});