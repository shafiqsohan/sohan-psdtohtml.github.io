(function ($) {
	"use strict";
    
//Start Of Window Ready Function
    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //Search-BOX
        $(".search-btn").on("click", function() {
            $(".search-form").addClass("active");
            $(this).hide();
            $(".cross-btn").show();
        });
        
        $(".cross-btn").on("click", function() {
            $(".search-form").removeClass("active");
            $(this).hide();
            $(".search-btn").show();
        });
        
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
        
        //case-study-carousel-3
        $(".case-study-carousel-3").owlCarousel({
            items: 5,
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });
        
        //homepage-slides|| template-3
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'>", "<i class='zmdi zmdi-long-arrow-right'>"],
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            smartSpeed: 10
        });
        
        //home-slider text animation
        $(".homepage-slides").on("translate.owl.carousel",function(){
            
            $(".single-slide-item h2").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide-item a").removeClass("animated zoomIn").css("opacity", "0");
            
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            
            $(".single-slide-item h2").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide-item a").addClass("animated zoomIn").css("opacity", "1");
           
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
        //testimonial-carousel-2
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
        //Scroll: When click
         $(".gotoup").on("click", function(){
                $("html, body").animate({scrollTop:0}, 800);
            });

        // wow-aniamtion
        new WOW().init();
        
           //custom scroll-Bar
//         $("body").niceScroll({
//            cursorwidth: 10,
//            cursorborder: 0,
//            cursorborderradius: 0,
//            cursorcolor: '#24d5a1',
//            autohidemode: false,
//            horizrailenabled: false,
//            cursorfixedheight: 150,
//            zindex: 9999
//        });


    }); //End Of Window Ready Function

    //Start Of Window Load Function
    jQuery(window).load(function(){

        
    });
//End Of Window Load Function

}(jQuery));	