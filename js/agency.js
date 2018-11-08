(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })
 
// i want something similar button modal
$('.contact-modal-btn').click(function() {
  $('body').removeClass('modal-open');
  $('.portfolio-modal').removeClass('show');
  $('.portfolio-modal').removeClass('fade');
  $('.portfolio-modal').css('display','none');
  $('.modal-backdrop').css('display','none');
  $('.navbar').removeClass('d-none');
  $(window).scrollTop($('#contact').offset().top, 1000);
  console.log('scrolling'); 

});

// testimonials

$(".testimonial-carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  arrows: true,
  prevArrow: $(".testimonial-carousel-controls .prev"),
  nextArrow: $(".testimonial-carousel-controls .next")
});


// typed text 

$(".typed").typed({
  strings: ["Web Design", "Graphic Design", "Copywriting", "Strategy", "Brand Identity", "Logo Design", "Content Creation", "Poster Design", "UX/UI"],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 50,
  // time before typing starts
  startDelay: 1200,
  // backspacing speed
  backSpeed: 50,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: false,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});


// popup 

  
  window.setTimeout(
     ($(".bts-popup").addClass('is-visible').offset().top > 200), 60000);
   
	
  
	//open popup
	// $('.bts-popup-trigger').on('click', function(event){
	// 	event.preventDefault();
  //   $('.bts-popup').addClass('is-visible');
  //   console.log('hey');
	// });
	
	//close popup
	$('.bts-popup').on('click', function(event){
		if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.bts-popup').removeClass('is-visible');
	    }
    });

})(jQuery); // End of use strict



