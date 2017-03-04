jQuery(document).ready(function($){

	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
	});

	$('.cd-close-nav, .cd-nav li a, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
	});

	$('.cd-nav li').on('click', function(event){
		event.preventDefault();
		var target = $(this),

			sectionTarget = target.data('menu');
		if( !target.hasClass('cd-selected') ) {

			target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');

			loadNewContent(sectionTarget);
		} else {

			toggleNav(false);
		}
	});

	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}

	function loadNewContent(newSection) {

		var section = $('<section class="cd-section '+newSection+'"></section>').appendTo($('main'));

		section.load(newSection+'.html .cd-section > *', function(event){

			section.addClass('cd-selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){

				toggleNav(false);
			});
			section.prev('.cd-selected').removeClass('cd-selected');
		});

		$('main').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){

			section.prev('.cd-section').remove();
		});

		if( $('.no-csstransitions').length > 0 ) {
			//if browser doesn't support transitions - don't wait but close navigation and remove old item
			toggleNav(false);
			section.prev('.cd-section').remove();
		}
	}


	//VALIDATE EMAIL
	var submitBtn = document.getElementById("loginButton"); 

	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  	return re.test(email);
	}

	function validate() {
		var emailInput = $("#emailInput").val();
		return (validateEmail(emailInput) ? true : false);
	}

	$(submitBtn).on('click', function(event) {
		    	if (validate()) {
			    	event.preventDefault();
			    	toggleNav(true);
		    	}
		  	});

	

	$("form").bind("submit", validate);

	  
});