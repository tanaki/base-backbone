// Create Namespace
var NS = window.NS || {};

/* EVENT MANAGER */
NS.EventManager = NS.EventManager || $({});

/* COLLECTIONS */
NS.Collection = NS.Collection || {};

/* MODELS */
NS.Model = NS.Model || {};

/* VIEWS */
NS.View = NS.View || {};

/*
 * EVENTS
 */

NS.Events = {
    APP_READY : "APP_READY",
    INIT_ABOUT : "INIT_ABOUT",
    INIT_CONTACT : "INIT_CONTACT"
	
};

$(window).ready(function(){
	
	NS.AppRouter = new NS.Router();
	Backbone.history.start({ pushState : true });
	
	$(".nav a, .brand").click(function(e){
		e.preventDefault();
		NS.AppRouter.navigate($(this).attr("href"), true);
	});
	
});
