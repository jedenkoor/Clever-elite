$(document).ready(function () {

	if(document.title == 'Главная' || document.title == 'Карта'){
		$(document).find('.breadcrumbs').attr('style', 'display: none;');
	}
	if(document.title == 'Дом'){
		$(document).find('.header').addClass('white');
		$(document).find('.house-banner').addClass('white');
		$(document).find('.breadcrumbs').addClass('breadcrumbs-abs');
	}
	if(document.title == 'Новости' || document.title == 'Карта'){
		$(document).find('.main-form').attr('style', 'display: none;');
	}

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
		swipe: false,
		lazyLoad: 'progressive'
	});
	var $status = $('.main-banner-current');
	var $slickElement = $('.main-banner-slider');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + ' / ' + slick.slideCount);
	});

	let houseSlider = $(document).find('.house-banner-slider').slick({
		dots: true,
		infinite: true,
		speed: 800,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		draggable: false,
		swipe: false,
		lazyLoad: 'progressive'
	});
	var $status = $('.house-banner-current');
	var $slickElement = $('.house-banner-slider');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.html('<span>' + i + '</span> / ' + slick.slideCount);
	});
	$(document).on('click', '.house-banner-info-items-arrPrev', function (e) {
		houseSlider.slick('slickPrev');
	});
	$(document).on('click', '.house-banner-info-items-arrNext', function (e) {
		houseSlider.slick('slickNext');
	});

	var mainTabContainers = $('.main-tabs-tab');
	mainTabContainers.hide().filter(':first').fadeIn('slow');
	$('.main-tabs-navigation__item').filter(':first').addClass('selected');
	$('.main-tabs-tab-slider').filter(':first').slick({
		slidesToShow: 3,
  	slidesToScroll: 1,
		infinite: false,
		lazyLoad: 'progressive'
	});
	$('.main-tabs-navigation__item').click(function (e) {
		e.preventDefault();
		mainTabContainers.hide();
		mainTabContainers.filter(this.hash).fadeIn('slow');
		$('.main-tabs-tab-slider.slick-initialized').slick('unslick');
		mainTabContainers.filter(this.hash).find('.main-tabs-tab-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			lazyLoad: 'progressive'
		});
		$('.main-tabs-navigation__item').removeClass('selected');
		$(this).addClass('selected');
	});

	var houseTabContainers = $('.house-tabs-tab');
	houseTabContainers.hide().filter(':first').fadeIn('slow').attr('style', 'visibility: visible;');
	$('.house-tabs-navigation__item').filter(':first').addClass('selected');
	$('.house-tabs-tab-right-slider-inn').filter(':first').slick({
		draggable: false,
		swipe: false,
		arrows: false,
		lazyLoad: 'progressive',
		fade: true
	});
	$('.house-tabs-navigation__item').click(function (e) {
		e.preventDefault();
		houseTabContainers.hide();
		houseTabContainers.filter(this.hash).fadeIn('slow');
		$('.house-tabs-tab-right-slider-inn.slick-initialized').slick('unslick');
		houseTabContainers.filter(this.hash).find('.house-tabs-tab-right-slider-inn').slick({
			draggable: false,
			swipe: false,
			lazyLoad: 'progressive',
			arrows: false,
			fade: true
		});
		$('.house-tabs-navigation__item').removeClass('selected');
		$(this).addClass('selected');
	});

	var houseGalleryContainers = $('.house-gallery-main-tab');
	houseGalleryContainers.hide().filter(':first').fadeIn('slow').attr('style', 'visibility: visible;');
	$('.house-gallery-main-navigation__item').filter(':first').addClass('selected');
	$('.house-gallery-main-tab-right-slider').filter(':first').slick({
		arrows: false,
		lazyLoad: 'progressive'
	});
	$('.house-gallery-main-navigation__item').click(function (e) {
		e.preventDefault();
		houseGalleryContainers.hide();
		houseGalleryContainers.filter(this.hash).fadeIn('slow');
		$('.house-gallery-main-tab-right-slider.slick-initialized').slick('unslick');
		houseGalleryContainers.filter(this.hash).find('.house-gallery-main-tab-right-slider').slick({
			arrows: false,
			lazyLoad: 'progressive'
		});
		$('.house-gallery-main-navigation__item').removeClass('selected');
		$(this).addClass('selected');
	});
	$(document).on('click', '.house-gallery-main-tab-right-arrows-arrPrev', function (e) {
		$(this).closest('.house-gallery-main-tab-right').find('.house-gallery-main-tab-right-slider').slick('slickPrev');
	});
	$(document).on('click', '.house-gallery-main-tab-right-arrows-arrNext', function (e) {
		$(this).closest('.house-gallery-main-tab-right').find('.house-gallery-main-tab-right-slider').slick('slickNext');
	});

	$('.main-object-slider').slick({
		slidesToShow: 1,
		variableWidth: true,
		focusOnSelect: true,
		draggable: false,
		lazyLoad: 'progressive'		
	});

	let pagenewsSlider = $(document).find('.pagenews-content-slider').slick({
		slidesToShow: 1,
		lazyLoad: 'progressive',
		fade: true,
		arrows: false
	});
	$(document).on('click', '.pagenews-content-slider-nav-arrPrev', function (e) {
		pagenewsSlider.slick('slickPrev');
	});
	$(document).on('click', '.pagenews-content-slider-nav-arrNext', function (e) {
		pagenewsSlider.slick('slickNext');
	});

	$(document).find('[name="tel"]').inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});
	$(document).find('[name="email"]').inputmask({ 
		alias: "email",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});

	var mainFormContainers = $('.main-form .main-form-content-right-tabs-tab');
	mainFormContainers.hide().filter(':first').fadeIn().attr('style', 'visibility: visible; display: block;');
	$('.main-form .main-form-content-right-tabs-navigation label').filter(':first').addClass('selected');
	$('.main-form .main-form-content-right-tabs-navigation a').click(function (e) {
		e.preventDefault();
		mainFormContainers.hide();
		mainFormContainers.filter(this.hash).fadeIn().attr('style', 'visibility: visible; display: block;');
		$('.main-form .main-form-content-right-tabs-navigation label').removeClass('selected');
		$(this).find('label').addClass('selected');
	});
	var mainManagerContainers = $('.house-manager .main-form-content-right-tabs-tab');
	mainManagerContainers.hide().filter(':first').fadeIn().attr('style', 'visibility: visible; display: block;');
	$('.house-manager .main-form-content-right-tabs-navigation label').filter(':first').addClass('selected');
	$('.house-manager .main-form-content-right-tabs-navigation a').click(function (e) {
		e.preventDefault();
		mainManagerContainers.hide();
		mainManagerContainers.filter(this.hash).fadeIn().attr('style', 'visibility: visible; display: block;');
		$('.house-manager .main-form-content-right-tabs-navigation label').removeClass('selected');
		$(this).find('label').addClass('selected');
	});

	function timeConverter(UNIX_timestamp){
		var a = new Date(UNIX_timestamp * 1000);
		var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = date + ' ' + month + ' ' + year;
		return time;
	}

	if( $(document).find('#instafeed').length != 0 ){
		let feed = new Instafeed({
			get: 'user',
			userId: '5620778715', /*https://codeofaninja.com/tools/find-instagram-user-id*/
			accessToken: '5620778715.0dde584.3cb1d3f5b1c24725b9c36b9e82cecf66', /*https://www.youtube.com/watch?time_continue=70&v=fGMk8daxF08*/
			resolution: 'standard_resolution',
			limit: 4,
			useHttp: 'true',
			template: '<a data-fancybox class="instafeed-item" data-src="{{link}}" href="javascript:;"><div class="border-1"></div><div class="border-2"></div><div class="border-3"></div><div class="border-4"></div><div class="instafeed-item-top"><div class="instafeed-item-top__logo"></div><div class="instafeed-item-top-info"><div class="instafeed-item-top-info__title">{{model.user.username}}</div><div class="instafeed-item-top-info__loc">{{location}}</div></div><div class="instafeed-item-top__more"></div></div><div class="instafeed-item-photo"><img src="{{image}}"/></div><div class="instafeed-item-bot"><div class="instafeed-item-bot-top"><div class="instafeed-item-bot-top-like"></div><div class="instafeed-item-bot-top-comment"></div><div class="instafeed-item-bot-top-share"></div><div class="instafeed-item-bot-top-fav"></div></div><div class="instafeed-item-bot-likes">{{likes}}<span> likes</span></div><div class="instafeed-item-bot-descr"><span>{{model.caption.from.username}}</span>{{caption}}</div><div class="instafeed-item-bot-dateHidden">{{model.created_time}}</div><div class="instafeed-item-bot-date"></div></div> </a>'
		});
		feed.run();

		var initialSlick = function(allmutations){
			// allmutations — массив, и мы можем использовать соответствующие методы JavaScript.
			allmutations.map( function(mr){
				if( !$(document).find('#instafeed').hasClass('slick-initialized') ){
					$(document).find('#instafeed').slick({
						slidesToShow: 4,
						slidesToScroll: 1
					});
					let dateHidden = $(document).find('.instafeed-item-bot-dateHidden');
					let dateShow = $(document).find('.instafeed-item-bot-date');
					for (let i = 0; i < dateHidden.length; i++) {
						dateShow.eq(i).text( timeConverter( dateHidden.eq(i).text() ) );
					}
					$(document).find('.main-inst-btn__link').attr( 'href', 'https://www.instagram.com/' + $(document).find('.instafeed-item-top-info__title').eq(0).text() );
				}
			});
		},
		initialSlickElement = document.querySelectorAll('#instafeed')[0],
		initialSlickObserver = new MutationObserver(initialSlick),
		initialSlickOptions = {
				// обязательный параметр: наблюдаем за добавлением и удалением дочерних элементов.
				'childList': true,
				// наблюдаем за добавлением и удалением дочерних элементов любого уровня вложенности.
				'subtree': true
		}
		initialSlickObserver.observe(initialSlickElement, initialSlickOptions);
	}

	resizewindow();
	$(window).resize(function(e){
		resizewindow();
	});

});

$(document).on('click', '.header-top-menu', function (e) {
	$(document).find('.header-menu').addClass('active fadeInDown animated');
	if ($(this).find('.hamburger').hasClass('is-active')) {
		$(document).find('.header-menu').removeClass('fadeInDown');
		if ( $('.header').hasClass('white') ) {
			$(document).find('.header').removeClass('white-menu');
		}
		$(document).find('.header-menu').addClass('fadeOutUp');
	} else {
		if ( $('.header').hasClass('white') ) {
			$(document).find('.header').addClass('white-menu');
		}
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
		if ( $('.header').hasClass('white') ) {
			$(document).find('.header').removeClass('white-menu');
		}
		div.removeClass('fadeInDown');
		div.addClass('fadeOutUp');
		$(document).find('.hamburger').removeClass('is-active');
	}
});

$(document).on('click', '.house-tabs-tab-right-slider-nav-item', function (e) {
	$(this).siblings('.house-tabs-tab-right-slider-nav-item').removeClass('selected');
	$(this).closest('.house-tabs-tab-right-slider-nav').siblings('.house-tabs-tab-right-slider-inn').slick('slickGoTo', $(this).index());
	$(this).addClass('selected');
});


$(window).scroll(function() {
	
});

function resizewindow() {
	let newsMainImages = $(document).find('.news-main-item__img')
	for (let i = 0; i < newsMainImages.length; i++) {
		newsMainImages.eq(i).css('height', $(newsMainImages.eq(i)).closest('.news-main-item').width() * 0.728 + 'px');
	}
	let newsRestImages = $(document).find('.news-rest-item__img')
	for (let i = 0; i < newsRestImages.length; i++) {
		newsRestImages.eq(i).css('height', $(newsRestImages.eq(i)).closest('.news-rest-item').width() + 'px');
	}
};