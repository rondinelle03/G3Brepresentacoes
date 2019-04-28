$(document).ready(function(){
/*
	Códigos de invocação dos plugins.
*/
	  $(".button-collapse").sideNav();


	  $('.slider-capa').owlCarousel({
		    loop:true,
		    autoplay:true,
		    margin:0,
		    nav:false,
		    dots:true,
		    items:1
		    
		});

	  $('.tooltipped').tooltip({delay: 50});

	  $('.modal').modal();

	  $(function() {
                $('.link').bind('click',function(event){
                    var $anchor = $(this);
        
                  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
                    
                  

                });
            });

});



var nav = $('.nav-total');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });



















