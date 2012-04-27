
NS.Router = Backbone.Router.extend({
	
	isInit : false,
	currentView : null,
	eventHandlers : {},
	
	routes : {
		"about" : "_aboutAction",
		"contact" : "_contactAction",
		"*actions" : "_defaultAction"
	},
	
	/*
	 * about Action
	 * @private
	 */
	_aboutAction : function() {
		this._displayPage( NS.Events.SHOW_ABOUT );
	},
	
	/*
	 * contact Action
	 * @private
	 */
	_contactAction : function() {
		this._displayPage( NS.Events.SHOW_CONTACT );
	},
	
	/*
	 * defaultAction
	 * @private
	 */
	_defaultAction : function() {
		this._displayPage( NS.Events.APP_READY );
	},
	
	/*
	 * display Page
	 * @private
	 */
	 _displayPage : function ( callbackEvent, slug ) {

		if ( !this.isInit ) {
			this._init( callbackEvent );
			return;
		}
		
		if ( this.currentView ) {
			this.currentView.hide( callbackEvent );
		} else {
			NS.EventManager.trigger( callbackEvent, slug );
		}
	},
	
	/*
	 * init app
	 * @private
	 */
	_init : function( callbackEvent ) {
		this.isInit = true;
		
		this._initEventHandlers();
		this._initNav();

		// Initial data call
		var self = this;
		NS.Data.Items = new NS.Collection.ItemCollection();
		NS.Data.Items.fetch().success(function(){
			self._displayPage( callbackEvent );
		});
	},
	
	/*
	 * init event handler
	 * @private
	 */
	_initEventHandlers : function() {
		
		this.eventHandlers[NS.Events.APP_READY] = this._show;
		this.eventHandlers[NS.Events.SHOW_CONTACT] = this._show;
		this.eventHandlers[NS.Events.SHOW_ABOUT] = this._show;
		
		NS.EventManager.bind(this.eventHandlers);
	},
	
	/*
	 * init navigation links
	 * @private
	 */
	_initNav : function() {
		// TODO use backbone events ?
		$("body").delegate(".nav a, .brand", "click", function(e) {
			e.preventDefault();
			NS.AppRouter.navigate($(this).attr("href"), true);
		});
	},
	
	/********
	 * EVENT HANDLERS
	 */
	_show : function( e, slug ) {

		var view;

		switch ( e.type ) {

			case NS.Events.APP_READY :
				view = new NS.View.Main({
					collection : NS.Data.Items
				});
				// NS.AppRouter.navigate("/");
			break;

			case NS.Events.SHOW_ABOUT :
				view = new NS.View.About();
			break;

			case NS.Events.SHOW_CONTACT :
				view = new NS.View.Contact();
			break;

		}
		
		view.render();
		this.currentView = view;
	}
	
});