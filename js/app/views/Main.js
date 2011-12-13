
NS.View.Main = Backbone.View.extend({
	el : ".main-content",
	mainTpl : null,
	collection : null,
	
	render : function() {
		this._loadTemplate();
	},
	
	_loadTemplate : function() {
		
		var self = this;
		$.loadTemplate({
			"template" : "template_main",
			"file" : "templates/main.html",
			"callback" : function(data){
				self.mainTpl = data;
				self._loadData();
			},
			"noStorage" : true // util for debug
		});
		
	},
	
	_loadData : function() {
		
		var self = this;
		this.collection = new NS.Collection.ItemCollection();
		
		$.ajax({
			
			dataType : 'json',
			url: "/data/data.json",
			
			success : function(response){
				
				$.each(response.items, function(i, el){
					self.collection.add(new NS.Model.Item({
						id: el.id,
						title: el.title
					}));
				});
				
				self._display();
			}
		});

		
	},
	
	_display : function(data) {
		var 
			params = {
				message : "Welcome !",
				items : this.collection.models
			},
			tpl = _.template(this.mainTpl);
		
		$(this.el).html( tpl(params) );
	}
});