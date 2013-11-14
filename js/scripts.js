// set up the bandwidth tiers
// if you want the tier to never end, use NaN
var bandwidthTiers = [
	{
		'start': 0,
		'end': 50,
		'price': .05
	},
	{
		'start': 51,
		'end': 150,
		'price': .040
	},
	{
		'start': 151,
		'end': 350,
		'price': .035
	},
	{
		'start': 351,
		'end': 1024,
		'price': .030
	},
	{
		'start': 1024,
		'end': NaN,
		'price': .020
	},
];

// function used for sorting numbers
function sortArrayByInt(a, b){
	//set the element to the beginning tier number
	var a = a.start;
	var b = b.start;

	// return whether it is greator or smaller
	return ((a < b) ? -1 : ((a > b) ? 1 : 0));
}

function calculateBandwidthPrice(usage) {
	// see what first tier it falls into
	var tierIndex = 0;
	for (var i=0; i<bandwidthTiers.length; i++) {
		if (bandwidthTiers[i].end >= usage) {
			tierIndex = i;
			break;
		} else if (usage > bandwidthTiers[bandwidthTiers.length-1].start) {
			tierIndex = bandwidthTiers.length-1;
			break;
		}
	}

	// set the selected tier
	var firstTier = bandwidthTiers[tierIndex];
	var nextTier = null;
	if (tierIndex+1 < bandwidthTiers.length) {
		nextTier = bandwidthTiers[tierIndex+1];
	}

	// check what value to return
	var bwPrice = 0.0;
	if (nextTier == null || firstTier.start == usage) {
		// there's no tier next up, so just use the first tier price
		bwPrice = firstTier.price;
	} else {
		// there is a tier above it, so calclaute the bw price based on the two tiers

		// get the percentage of how in between the bandwidth amount is between the two tiers
		var percentInBetween = (usage - firstTier.start) / (nextTier.start - firstTier.start);

		// see how much we need to add to the price to give them discounts
		var priceAddition = (firstTier.price - nextTier.price) * percentInBetween;


		// give them their final bw price
		bwPrice = firstTier.price - priceAddition;
	}

	// final bw price
	var finalPrice = bwPrice * (usage * 1024) * 1.1;

	// if bw cost is less than 800, make it 800
	if (finalPrice < 800) {
		finalPrice = 800;
	}

	return finalPrice;
}

// sort the array of tiers so we can iterate on them properly
bandwidthTiers.sort(sortArrayByInt);

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// form validation
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validateURL(textval) {
	var urlregex = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
	return urlregex.test(textval);
}

function checkRequiredFields(form) {
	//attack to all form submit buttons
	$(form + ' input, ' + form + ' textarea ,' + form + ' select').click(function(e) {
		if ($(this).hasClass('red-border')) $(this).removeClass('red-border');
	}).change( function() {
		if ($(this).hasClass('red-border')) $(this).removeClass('red-border');
	});

	$(form).submit(function(e) {
		//keep track of fails
		var counter = 0;

		//required fields
		var fields = $(this).find('.required');

		//remove required border
		fields.each(function() { $(this).removeClass('red-border'); });
		$('.select-area',this).removeClass('red-border');

		//check required fields
		fields.each( function() {
			//check input, textarea, and select
			if ($(this).is("input") || $(this).is("textarea")) {
				if ($(this).val() === "" || $(this).val() == null) {
					counter++;
					$(this).addClass('red-border');
				}

				if ($(this).data('value') === $(this).val()) {
					counter++;
					$(this).addClass('red-border');
				}

				if ($(this).attr('type') === "email") {
					if (!validateEmail($(this).val())) {
						counter++;
						$(this).addClass('red-border');
					}
				} else if ($(this).attr('type') === "url") {
					if (!validateURL($(this).val())) {
						counter++;
						$(this).addClass('red-border');
					}
				}

				} else if ($(this).is("select")) {
					if ($(this)[0].selectedIndex <= 0) {
						counter++;
						$(this).addClass('red-border');
						$(this).prev().addClass('red-border');
					}
				}
		});

		//don't submit the form :(
		if (counter > 0) {
			return false;
		} else {
			//fill out content__c field in form
			$("input[name='content__c']", $(this)).val('TjMWJFGCrZsrgkTiumWainoraTaYandAd8bapL8Xdks');
		}
	});
}


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
		$(".price-form .text-hold .unit").click(function() {
			$('.price-form .text-hold .text').focus();
		});

		$('.price-form .text-hold .text').keyup(function(e){
			e.preventDefault();
			if(e.keyCode == 13){
				$('.price-form .btn.open-pricing').click();
			}
		})

		$('.price-form form').submit(function(e) {
			e.preventDefault();
		});;

		$('.price-form .btn.open-pricing').click(function() {
			var enteredTB = $('.price-form .text-hold .text').val();
			if (!isNaN(enteredTB) && enteredTB !== "") {
				var priceSection = $(this).closest('.price-form').next('.price-section');
				priceSection.slideDown();
				$('div.total .value', priceSection).html("$" + calculateBandwidthPrice(enteredTB).formatMoney(2));
				$('div.total .name', priceSection).html(numberWithCommas(enteredTB) + "TB");

				// fill in the bandwidth field in the form below
				var range = null;
				$('#bandwidth-pricing-hidden option').each(function() {
					// check if range is in
					if ($(this).data('range') !== "none") {
						var rangeArray = $(this).data('range').split('-');
						if (enteredTB >= parseInt(rangeArray[0]) && enteredTB <= parseInt(rangeArray[1]) && range == null) {
							// this is the range
							range = $(this);
						}
					}
				});
				if (range == null) {
					//at the end of the array 
					range = $('#bandwidth-pricing-hidden option').last();
				}

				// select range
				$('#bandwidth-pricing-hidden option').attr('selected', false);
				range.attr('selected', true);

				// remove stupid auto form field
				if ($("#bandwidth-pricing-hidden").length > 0) {
					$("#bandwidth-pricing-hidden").prev().remove();
				}
			}
			return false;
		});
	}

	if ($('.team-area').exists()) {
		var team_area = $('.team-area');
		var team_area_pos = $('.team-area').offset().top;
		$(window).scroll(function(){
			var pos = $(window).scrollTop();
			var win_height = $(window).height();
			if (team_area_pos > pos + win_height/10 && team_area_pos < pos + win_height*3/4 && !team_area.find('.holder img').hasClass("active")){
				team_area.find('.holder img').addClass('active');
			}
		});
	}

	if ($('#carousel-holder').exists()){

		var duration = 10;
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
		$('.top-area .state-1, .top-area strong.ttl, .top-area .tbl-in > p').fadeOut().promise().done(function(){
			$('.top-area .state-1 strong.ttl').text('Seeing is Believing');
			$('.top-area .tbl-in > p').text('Paste an URL from your current CDN and we’ll run a CatchPoint test. You’ll see how we stack up against your current service.');
			$('.top-area .state-2, .top-area strong.ttl, .top-area .tbl-in > p').fadeIn();
		});
		
		return false;
	});
	$('.top-area form').submit(function(e){

		setTimeout(function() {
			if ($('.top-area form .red-border').length <= 0) {
				$.post($('.top-area form').attr("action"), $('.top-area form').serialize());
				$('.top-area .state-2, .top-area .tbl-in >p, .top-area .tbl-in >.ttl').fadeOut().promise().done(function(){
					$('.top-area .state-3').fadeIn();
				});
			}
		}, 475);

		e.preventDefault();
	})
	
	if ($('.carousel').exists()) {
		var top_wrap_carousel = $('.carousel').offset().top,
			carousel_visible_ = false;
		$('.carousel .slide').hide();
		$(window).scroll(function(){
			if (!carousel_visible_){
				 if (top_wrap_carousel < ($(window).scrollTop() + ($(window).height() / 2))) {
				 	$('.carousel .slide-current').fadeIn().promise().done(function(){
						$('.carousel .slide-prev, .carousel .slide-next').fadeIn();
						carousel_visible_ = true;
					})
				 }
			}
		})
	}

	setTimeout(function() {
		if (window.location.hash) {
			$(window).scrollTop($('a[name='+window.location.hash.substr(1)+']').offset().top-$("header").outerHeight());
		}
	}, 54);

	$('a[href^=#]').click(function(e){
		var name = $(this).attr('href').substr(1);
		if (name !== "") {
			var pos = $('a[name='+name+']').offset().top-$("header").outerHeight();
			$('body').scrollTop(pos);
			e.preventDefault();
		}
	});

	//replace phone number in nav dropdown if not US/CAN
	var language = window.navigator.userLanguage || window.navigator.language;
	if (!(language.toLowerCase() === "en-us" || language.toLowerCase() === "en-ca")) {
		$("span.phone-number").text("+1 (323) 313-1206");
	}

	checkRequiredFields('form');
});