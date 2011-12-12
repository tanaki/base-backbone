// Create Namespace
var NS = window.NS || {};

/* EVENT MANAGER */
NS.EventManager = NS.EventManager || $({});

/* MODELS */
NS.Model = NS.Model || {};

/* VIEWS */
NS.View = NS.View || {};

/*
 * EVENTS
 */

NS.Events = {
    APP_READY : "APP_READY"
	
};

$(window).ready(function(){
	var controller = new NS.Controller();
});
