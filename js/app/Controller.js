
NS.Controller = function(){
	
	var 
		router,
		currentView,
		eventHandlers = {},
		
		/*
		 * init event handler
		 * @private
		 */
		_initEventHandlers = function() {
			eventHandlers[NS.Events.APP_READY] = _appReady;
			NS.EventManager.bind(eventHandlers);
		},
		
		/*
		 * constructor
		 * @public
		 * @return void
		 **/
		init = function() {
			
			_initEventHandlers();
			
			router = new NS.Router();
			Backbone.history.start();
			
		},
		
		
		/********
		 * EVENT HANDLERS
		 */
		
		_appReady = function() {
			var mainView = new NS.View.Main();
			mainView.render();
		};
		
	init();
	
	return {
		
	}
	
};
