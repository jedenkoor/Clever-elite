$(document).ready(function () {

	$(document).find('.main-banner-slider').slick({
		dots: true,
		infinite: true,
		speed: 800,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		draggable: false,
		swipe: false
	});
	var $status = $('.main-banner-current');
	var $slickElement = $('.main-banner-slider');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + ' / ' + slick.slideCount);
	});

	var mainTabContainers = $('.main-tabs-tab');
	mainTabContainers.hide().filter(':first').fadeIn('slow');
	$('.main-tabs-navigation__item').filter(':first').addClass('selected');
	$('.main-tabs-tab-slider').filter(':first').slick({
		slidesToShow: 3,
  	slidesToScroll: 1,
		infinite: false
	});
	$('.main-tabs-navigation__item').click(function (e) {
		e.preventDefault();
		mainTabContainers.hide();
		mainTabContainers.filter(this.hash).fadeIn('slow');
		$('.main-tabs-tab-slider.slick-initialized').slick('unslick');
		mainTabContainers.filter(this.hash).find('.main-tabs-tab-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false
		});
		$('.main-tabs-navigation__item').removeClass('selected');
		$(this).addClass('selected');
	});

	$('.main-object-slider').slick({
		slidesToShow: 1,
		variableWidth: true,
		focusOnSelect: true,
		draggable: false		
	});

	resizewindow();
	$(window).resize(function(e){
		resizewindow();
	});

});

$(document).on('click', '.header-top-menu', function (e) {
	$(document).find('.header-menu').addClass('active fadeInDown animated');
	if ($(this).find('.hamburger').hasClass('is-active')) {
		$(document).find('.header-menu').removeClass('fadeInDown');
		$(document).find('.header-menu').addClass('fadeOutUp');
	} else {
		$(document).find('.header-menu').removeClass('fadeOutUp');
	}
	$(this).find('.hamburger').toggleClass('is-active');
});
$(document).on('click', function (e) {
	var div = $('.header-menu');
	if ($('.header-top-menu').is(e.target) || $('.header-top-menu button').is(e.target) || $('.header-top-menu span').is(e.target)) {
		return false;
	}
	if ( div.hasClass('fadeInDown') && !div.is(e.target) && div.has(e.target).length === 0) {
		div.removeClass('fadeInDown');
		div.addClass('fadeOutUp');
		$(document).find('.hamburger').removeClass('is-active');
	}
});

$(window).scroll(function() {
	
});

function resizewindow() {
	
};