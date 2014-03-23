;(function($){
	var Accordion = function( elem, options ) {
		var defaults = {
			containerWidth : 500,
			containerHeight: 400,
			
			headerWidth : 50,
			headerHeight: 30,
			
			activateOn : 'click',
			
			onLoad : 'minimizeAll',	// maximizeAll', 'custom'
			
			onlyOneActive : true,
			slideToDisplayOnLoad : 1,

			theme : 'default',
			rounded : true
		},
		
		// merge defaults with options in new settings object
		settings = $.extend({}, defaults, options),

		// 'globals'
		slides = elem.find('.slide-content');
		headers = slides.find('.slide-header'),

        // public methods
		methods = {
			
		},
		
		// core utility and animation methods
		core = {
			// set style properties
			setStyles : function() {
					// set container height and width, theme and corner style
					elem
						.width(settings.containerWidth);
//						.height(settings.containerHeight)
//						.addClass(settings.theme);

					if( settings.onLoad === 'minimizeAll' )
						$('.slide-header').toggleClass('inactive-header');
					else if( settings.onLoad === 'maximizeAll' )
						$('.slide-header').toggleClass('active-header').next().slideToggle().toggleClass('open-content');
					else if( settings.onLoad === 'custom' ) {/*
						if( settings.slideToDisplayOnLoad != null || slideToDisplayOnLoad != undefined || slideToDisplayOnLoad.length > 0 )
							//$('').next().slideToggle().toggleClass('open-content');;
						else
							;*/
					}
					//Add Inactive Class To All Accordion Headers
					//$('.slide-header').toggleClass('inactive-header');
					
					var contentWidth = $('.slide-header').width();
					$('.slide-content').css({'width' : contentWidth });
				},

		// bind events
		bindEvents : function() {

					$('.slide-header').on('click',function(){
						if( $(this).is('.inactive-header') ) {
							if( settings.onlyOneActive == true )
								$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
							else
								;
							$(this).toggleClass('active-header').toggleClass('inactive-header');
							$(this).next().slideToggle().toggleClass('open-content');
						}
						else {
							$(this).toggleClass('active-header').toggleClass('inactive-header');
							$(this).next().slideToggle().toggleClass('open-content');
						}						
					});
			},

		init : function() {
				// init styles and events
				core.setStyles();
				core.bindEvents();
			}			
			
		};
		
		// init plugin
        core.init();

        // expose methods
        return methods;
	};
	
	$.fn.accordion = function(options) {
		var elem = this;
		var instance = elem.data('accordion');
		var accordion;

        // if plugin already instantiated, return
		if (instance) return;

        // otherwise create a new instance
		accordion = new Accordion(elem, options);
		elem.data('accordion', accordion);
	};

})(jQuery);