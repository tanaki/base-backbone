// Create Namespace
var NS = {};

/* EVENT MANAGER */
NS.EventManager = $({});

/* MODELS */
NS.Model = {};

/* VIEWS */
NS.View = {};

/*
 * EVENTS
 */

NS.Events = {
    APP_READY : "APP_READY"
	
};

$(window).ready(function(){
	var controller = new NS.Controller();
});
