
NS.Router = Backbone.Router.extend({
	
	isInit : false,
	currentView : null,
	eventHandlers : {},
	
	routes : {
		"*actions" : "_defaultAction"
	},
	
	/*
	 * defaultAction
	 * @private
	 */
	_defaultAction : function() {
		if ( !this.isInit ) this._init();
		NS.EventManager.trigger( NS.Events.APP_READY );
	},
	
	/*
	 * init app
	 * @private
	 */
	_init : function() {
		this.isInit = true;
		this._initEventHandlers();
	},
	
	/*
	 * init event handler
	 * @private
	 */
	_initEventHandlers : function() {
		this.eventHandlers[NS.Events.APP_READY] = this._appReady;
		NS.EventManager.bind(this.eventHandlers);
	},
	
	
	/********
	 * EVENT HANDLERS
	 */
		
	_appReady : function() {
		var mainView = new NS.View.Main();
		mainView.render();
	}
	
	
});