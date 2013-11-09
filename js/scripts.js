$(document).ready(function(){
	jQuery.fn.exists = function(){
		return this.length > 0;
	}
	
	if (window.PIE) {
		$('.ie-fix').each(function() {
			PIE.attach(this);
		});
	}
	
	if ($('header').exists()) {
		$('header').sticky({ topSpacing: 0 });
	}
	
	if ($('#sidebar').exists()) {
		$('#sidebar').sticky({
			topSpacing: 80,
			bottomSpacing: 432
		});
	}
	
	if ($('.testimonial').exists()) {
		$('.testimonial').parallax("50%", 0.1);
	}
	
	if ($('#tabs-1').exists()) {
		$('#tabs-1').tabs();
	}
	
	if ($('.side-menu').exists()) {
		
		// Cache selectors
			var lastId,
			    topMenu = $(".side-menu"),
			    topMenuHeight = 267,
			    // All list items
			    menuItems = topMenu.find("a"),
			    // Anchors corresponding to menu items
			    scrollItems = menuItems.map(function(){
			      var item = $($(this).attr("href"));
			      if (item.length) { return item; }
			    });
			
			// Bind click handler to menu items
			// so we can get a fancy scroll animation
			menuItems.click(function(e){
			  var href = $(this).attr("href"),
			      offsetTop = href === "#" ? 0 : $(href).offset().top-67+1;
			  $('html, body').stop().animate({ 
			      scrollTop: offsetTop
			  }, 300);
			  e.preventDefault();
			});
			
			// Bind to scroll
			$(window).scroll(function(){
			   // Get container scroll position
			   var fromTop = $(this).scrollTop()+topMenuHeight;
			   
			   // Get id of current scroll item
			   var cur = scrollItems.map(function(){
			     if ($(this).offset().top < fromTop)
			       return this;
			   });
			   // Get the id of the current element
			   cur = cur[cur.length-1];
			   var id = cur && cur.length ? cur[0].id : "";
			   
			   if (lastId !== id) {
			       lastId = id;
			       // Set/remove active class
			       menuItems
			         .parent().removeClass("active")
			         .end().filter("[href=#"+id+"]").parent().addClass("active");
			   }                   
			});
	}
	
	
	if ($('.data table').exists()) {
		$('.data table').each(function() {
			$(this).find('tr').each(function() {
				$(this).children().eq(1).addClass('sec-child');
			});
		});
		$('.data tbody').each(function() {
			$(this).find('tr:even').addClass('odd');
		});
	}
	
	if ($('.custom-form').exists()) {
		customForm.lib.domReady(function(){
			customForm.customForms.replaceAll();
		});
	}
	
	if ($('.hidden-popup').exists()) {
		setTimeout(function() {
			$('.hidden-popup').hide();
		}, 600);
	}
	
	if ($('.fancybox').exists()) {
		$('.fancybox').fancybox({
			'padding': 0,
			'margin':10,
			'width': 800
		});
	}
	
	if ($('.price-form .btn.open-pricing').exists()) {
		$('.price-form .btn.open-pricing').click(function() {
			$(this).closest('.price-form').next('.price-section').slideToggle();
			return false;
		});
	}

	if ($('.team-area').exists()) {
		var team_area = $('.team-area');
		var team_area_pos = $('.team-area').offset().top;
		$(window).scroll(function(){
			var pos = $(window).scrollTop();
			var win_height = $(window).height();
			if (team_area_pos > pos + win_height/10 && team_area_pos < pos + win_height*3/4){
				team_area.find('.holder img').addClass('active');
			} else {
				team_area.find('.holder img').removeClass('active');
			}
		});
	}

	if ($('#carousel-holder').exists()){

		var duration = 1000;
		var curousel_ready_click = true
		var $carousel_holder = $('#carousel-holder');
		$('#carousel-holder .btn-prev').click(function(){
			slideCarousel('prev');
			return false;
		});

		$('#carousel-holder .btn-next').click(function(){
			slideCarousel('next');
			return false;
		});

		function slideCarousel(direction){
			if (curousel_ready_click) {
				curousel_ready_click = false;
				var classes_obj = {
					prev : {
						out_class: 'slide-prev',
						new_bid_class: 'slide-next'
					},
					next : {
						out_class: 'slide-next',
						new_bid_class: 'slide-prev'
					}
				}

				
				$('.' + classes_obj[direction].out_class).fadeOut(duration, function(){
					$(this).removeClass(classes_obj[direction].out_class);
				});
				var current_slide = $( ".slide-current" );
	//			current_slide.switchClass( "slide-current", classes_obj[direction].out_class, duration );
				if (direction == 'next') {
					current_slide.animate({left: '780px', top: 93, width: 156}, duration, function(){
						$(this).removeAttr('style');
						current_slide.removeClass( "slide-current").addClass(classes_obj[direction].out_class);
					});
				} else {
					current_slide.animate({left: '280px', top: 93, width: 156}, duration, function(){
						$(this).removeAttr('style');
						current_slide.removeClass( "slide-current").addClass(classes_obj[direction].out_class);
					});
				}
				current_slide.find('.img').css({
					'overflow': 'hidden',
					borderTopLeftRadius: 83, 
				    borderTopRightRadius: 83, 
				    borderBottomLeftRadius: 83, 
				    borderBottomRightRadius: 83,
				    WebkitBorderTopLeftRadius: 83, 
				    WebkitBorderTopRightRadius: 83, 
				    WebkitBorderBottomLeftRadius: 83, 
				    WebkitBorderBottomRightRadius: 83, 
				    MozBorderRadius: 83
					
				}).animate({width:'83px', height:'83px', backgroundColor: "#fff",
													borderTopLeftRadius: 42, 
												    borderTopRightRadius: 42, 
												    borderBottomLeftRadius: 42, 
												    borderBottomRightRadius: 42,
												    WebkitBorderTopLeftRadius: 42, 
												    WebkitBorderTopRightRadius: 42, 
												    WebkitBorderBottomLeftRadius: 42, 
												    WebkitBorderBottomRightRadius: 42, 
												    MozBorderRadius: 42
												}, duration, function(){
					$(this).removeAttr('style');
				});
				current_slide.find('.img img').animate({width:'83px', height:'83px', opacity: 0}, duration, function(){
					$(this).removeAttr('style');
				});
				current_slide.find('.name').fadeTo(duration, 0);
				current_slide.find('p').fadeOut( duration, function(){
					$(this).removeAttr('style');
					new_current_slide.find('p').fadeIn(duration, function(){
						$(this).removeAttr('style');
					});
					new_current_slide.find('.name').fadeTo(duration, 1,  function(){
						$(this).removeAttr('style');
					});
				});
				var new_current_slide = $( "." + classes_obj[direction].new_bid_class );
	//			new_current_slide.switchClass( classes_obj[direction].new_bid_class, "slide-current", duration );
				if (direction == 'prev') {
					new_current_slide.css('left', '600px').animate({left: '90px', top: 48, width: 510}, duration, function(){
						$(this).removeAttr('style');
						new_current_slide.removeClass( classes_obj[direction].new_bid_class).addClass("slide-current");
					});
				} else {
					new_current_slide.animate({left: '90px', top: 48, width: 510}, duration, function(){
						$(this).removeAttr('style');
						new_current_slide.removeClass( classes_obj[direction].new_bid_class).addClass("slide-current");
					});
				}
				new_current_slide.find('.img').css({background:'none'}).animate({width:'173px', height:'173px'}, duration, function(){
					$(this).removeAttr('style');
				});
				new_current_slide.find('.img img').css({width:'73px', height:'73px'}).animate({width:'173px', height:'173px', opacity: 1}, duration, function(){
					$(this).removeAttr('style');
				});
				var next_slide;
				if (direction == 'prev') {
					next_slide = new_current_slide.next();
				} else {
					next_slide = new_current_slide.prev();
				}
				if (!next_slide.exists() || !next_slide.hasClass('slide')){
					if (direction == 'prev') {
						next_slide = $('.slide').first();
					} else {
						next_slide = $('.slide').last();
					}
				}
				next_slide.addClass(classes_obj[direction].new_bid_class).fadeIn(duration, function(){
					curousel_ready_click = true;
				});
			}
		}
	}
	$('.btn-test').click(function(){
		$('.top-area .state-1').fadeOut().promise().done(function(){
			$('.top-area .state-2').fadeIn();
		});
		
		return false;
	});
	$('.top-area .btn-submit').click(function(){
		$('.top-area .state-2, .top-area .tbl-in >p, .top-area .tbl-in >.ttl').fadeOut().promise().done(function(){
			$('.top-area .state-3').fadeIn();
		});
		
		return false;
	})
	
	if ($('.carousel').exists()) {
		var top_wrap_carousel = $('.carousel').offset().top,
			carousel_visible_ = false;
		$('.carousel .slide').hide();
		$(window).scroll(function(){
			if (!carousel_visible_){
				console.log('twc' + top_wrap_carousel);
				 if (top_wrap_carousel < ($(window).scrollTop() + ($(window).height() / 2))) {
				 	$('.carousel .slide-current').fadeIn().promise().done(function(){
						$('.carousel .slide-prev, .carousel .slide-next').fadeIn();
						carousel_visible_ = true;
					})
					
				 }
			}
		})
	}
	
});