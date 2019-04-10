$(document).ready(function () {

	if(document.title == 'Главная' || document.title == 'Карта'){
		$(document).find('.breadcrumbs').attr('style', 'display: none;');
	}

	if(document.title == 'Каталог'){
		$(document).find('.breadcrumbs').addClass('catalog-breadcrumbs');
	}

	if(document.title == 'Статья' || document.title == 'О компании'){
		$(document).find('.breadcrumbs').addClass('white-breadcrumbs');
	}

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

	resizewindow();
	$(window).resize(function(e){
		resizewindow();
	});

});

$(window).scroll(function() {
	
});

function resizewindow() {
	
};