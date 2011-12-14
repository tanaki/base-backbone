
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
		this._displayPage( NS.Events.INIT_ABOUT );
	},
	
	/*
	 * contact Action
	 * @private
	 */
	_contactAction : function() {
		this._displayPage( NS.Events.INIT_CONTACT );
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
	_displayPage : function ( callbackEvent ) {
		
		if ( !this.isInit ) this._init();
		
		if ( this.currentView ) {
			this.currentView.hide( callbackEvent );
		} else {
			NS.EventManager.trigger( callbackEvent );
		}
	},
	
	/*
	 * init app
	 * @private
	 */
	_init : function() {
		this.isInit = true;
		
		this._initEventHandlers();
		this._initNav();
	},
	
	/*
	 * init event handler
	 * @private
	 */
	_initEventHandlers : function() {
		
		this.eventHandlers[NS.Events.APP_READY] = this._appReady;
		this.eventHandlers[NS.Events.INIT_CONTACT] = this._initContact;
		this.eventHandlers[NS.Events.INIT_ABOUT] = this._initAbout;
		
		NS.EventManager.bind(this.eventHandlers);
	},
	
	/*
	 * init navigation links
	 * @private
	 */
	_initNav : function() {
		$(".nav a, .brand").click(function(e){
			e.preventDefault();
			NS.AppRouter.navigate($(this).attr("href"), true);
		});	
	},
	
	/********
	 * EVENT HANDLERS
	 */
		
	_appReady : function() {
		
		var mainView = new NS.View.Main();
		mainView.render();
		this.currentView = mainView;
		
	},
		
	_initContact : function() {
		
		var contactView = new NS.View.Contact();
		contactView.render();
		this.currentView = contactView;
		
	},
		
	_initAbout : function() {
		
		var aboutView = new NS.View.About();
		aboutView.render();
		this.currentView = aboutView;
		
	}
	
	
});