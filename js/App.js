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

/* PAGES (instanciated views) */
NS.Page = NS.Page || {};

/* DATA */
NS.Data = NS.Data || {};

/*
 * EVENTS
 */
NS.Events = {
    APP_READY : "APP_READY",
    SHOW_ABOUT : "SHOW_ABOUT",
    SHOW_CONTACT : "SHOW_CONTACT"
};

$(window).ready(function(){
	NS.AppRouter = new NS.Router();
	Backbone.history.start({ pushState : true });
});
