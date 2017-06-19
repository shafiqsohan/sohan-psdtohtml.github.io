(function ($) {
	"use strict";
    
//Start Of Window Ready Function
    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //case-study-carousel
        $(".case-study-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });

        //testimonial-carousel
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 100,
            animateIn: 'zoomOut',
            animateOut: 'zoomIn'
        });
        //testimonial-carousel
        $(".testimonial-carousel-2").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            smartSpeed: 100,
            animateIn: 'zoomOut',
            animateOut: 'zoomIn'
        });
//animateIn: 'fadeOutDown',
//animateOut: 'fadeInUp'
        //logo-carousel
        $(".logo-carousel").owlCarousel({
            items: 6,
            loop: true,
            dots:false,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });

        //Window-Scroll funtion
        $(window).scroll(function(){
            if($(this).scrollTop()>500){
                $(".gotoup").fadeIn();
            }
            else{
                $(".gotoup").fadeOut();
            }
        });
        //Scroll When click
         $(".gotoup").on("click", function(){
                $("html, body").animate({scrollTop:0}, 800);
            });

        // wow-aniamtion
        new WOW().init();
        
         //custom scroll-Bar
         $("body").niceScroll({
            cursorwidth: 10,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: '#24d5a1',
            autohidemode: true,
            horizrailenabled: false,
            cursorfixedheight: 150,
            zindex: 9999
        });


    }); //End Of Window Ready Function

    //Start Of Window Load Function
    jQuery(window).load(function(){

        
    });
//End Of Window Load Function

}(jQuery));	