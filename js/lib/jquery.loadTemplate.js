(function( $ ){
	
	var	
		templateVersion = "0.0.1",
		templates = {},
		
		methods = {
			init : function( options ) {
				
				var 
					templateName = options.template,
					filename = options.file, 
					callback = options.callback,
					noStorage = options.noStorage;
					
				if ( !noStorage ) loadLocalTemplates();
				
				if ( !templates[templateName] || noStorage ) {
					$.get(filename, function(data) {
						addTemplate(templateName, data);
						saveLocalTemplates();
						callback(data);
					});
				}
				else {
					callback(templates[templateName]);
				}
			}
		},
		
		addTemplate = function(templateName, data)  {
			templates[templateName] = data;
		},
		
		localStorageAvailable = function() {
			try {
				return 'localStorage' in window && window['localStorage'] !== null;
			} catch (e) {
				return false;
			}
		},

		saveLocalTemplates = function() {
			if ( localStorageAvailable() ) {
				localStorage.setItem("templates", JSON.stringify(templates));
				localStorage.setItem("templateVersion", templateVersion);
			}
		},

		loadLocalTemplates = function() {
			if ( localStorageAvailable() ) {
				var templateVersionStored = localStorage.getItem("templateVersion");
				if (templateVersionStored && templateVersionStored == templateVersion) {
					var templatesStored = localStorage.getItem("templates");
					if (templatesStored) {
						templatesStored = JSON.parse(templatesStored);
						for (var x in templatesStored) {
							if (!templates[x]) {
								addTemplate(x, templatesStored[x]);
							}
						}
					}
				}
				else {
					localStorage.removeItem("templates");
					localStorage.removeItem("templateVersion");
				}
			}
		};
		
	$.fn.loadTemplate = function( method ) {

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.loadTemplate' );
		}    

	};
	$.loadTemplate = $.fn.loadTemplate;

})( jQuery );
