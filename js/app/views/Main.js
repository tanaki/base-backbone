
NS.View.Main = Backbone.View.extend({
	el : ".main-content",
	homeTpl : null,
	render : function() {
		this._loadTemplate();
	},
	
	_loadTemplate : function() {
		
		var self = this;
		$.loadTemplate({
			"template" : "template_main",
			"file" : "templates/main.html",
			"callback" : function(data){
				self.personTpl = data;
				self._display(self.personTpl);
			},
			"noStorage" : true // util for debug
		});
		
	},
	
	_display : function(data) {
		var 
			params = {
				"param" : "Welcome !"
			},
			tpl = _.template(data);
		
		$(this.el).html( tpl(params) );
	}
});