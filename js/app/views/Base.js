
NS.View.Base = Backbone.View.extend({

	el : ".main-content",
	tpl : null,
	template_name : "",
	template_url : "",
	collection : null,
	classname : "",
	slug : "",
	
	hide : function (callbackEvent) {
		$(this.el).fadeOut( 500, function(){
			if (callbackEvent) NS.EventManager.trigger(callbackEvent);
		});
	},
	
	render : function() {
		this._loadTemplate();
	},
	
	_loadTemplate : function() {
		
		var self = this;
		$.loadTemplate({
			"template" : self.template_name,
			"file" : self.template_url,
			"callback" : function(data){
				self.tpl = data;
				self._display();
			},
			"noStorage" : false // set true for debug
		});
		
	},
	
	_display : function(data) {

		var 
			models = this.collection ? this.collection.models : null,
			params = {
				collections : models,
				slug : this.slug
			},
			tpl = _.template(this.tpl);
		
		$("body").attr("class", "").addClass(this.classname);
		$(this.el).html( tpl(params) );
		$(this.el).fadeIn( 500 );
	}
});