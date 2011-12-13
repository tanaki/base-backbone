
NS.View.About = Backbone.View.extend({
	el : ".main-content",
	aboutTpl : null,
	
	hide : function (callbackEvent) {
		$(this.el).hide();
		if (callbackEvent) NS.EventManager.trigger(callbackEvent);
	},
	
	render : function() {
		console.log("aboutview::render");
		this._loadTemplate();
	},
	
	_loadTemplate : function() {
		
		var self = this;
		console.log("aboutview::loadtemplate");
		$.loadTemplate({
			"template" : "template_about",
			"file" : "templates/about.html",
			"callback" : function(data){
				self.aboutTpl = data;
				self._display();
			},
			"noStorage" : true // util for debug
		});
		
	},
	
	_display : function(data) {
		var tpl = _.template(this.aboutTpl);
		$(this.el).html( tpl() );
	}
});