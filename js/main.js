(function($){
	'use strict';


	$('.menu-bar').on('click', function(){
       $('.main-menu').slideDown();
       $('.menu-close').show();
       $(this).hide(); 
    })

    $('.menu-close').on('click', function(){
       $('.main-menu').slideUp();
       $('.menu-bar').show();
       $(this).hide(); 
    })

    $(window).resize(function(){

		var screenSize = $(window).width();
		if (screenSize > 991) {
			$('.main-menu').removeAttr('style');
		}
	});



}) (jQuery);
