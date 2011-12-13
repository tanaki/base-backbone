
NS.View.Contact = Backbone.View.extend({
	el : ".main-content",
	contactTpl : null,
	
	hide : function (callbackEvent) {
		$(this.el).hide();
		if (callbackEvent) NS.EventManager.trigger(callbackEvent);
	},
	
	render : function() {
		this._loadTemplate();
	},
	
	_loadTemplate : function() {
		
		var self = this;
		$.loadTemplate({
			"template" : "template_contact",
			"file" : "templates/contact.html",
			"callback" : function(data){
				self.contactTpl = data;
				self._display();
			},
			"noStorage" : true // util for debug
		});
		
	},
	
	_display : function(data) {
		var tpl = _.template(this.contactTpl);
		$(this.el).html( tpl() );
	}
});