(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //------ Homepage Slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
        
        //------ Homepage Slider text animation
        $(".homepage-slider").on("translate.owl.carousel",function(){
            $(".single-slide-item h1").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".homepage-slider").on("translated.owl.carousel", function(){
            
            $(".single-slide-item h1").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
        });
        
        //------ Branding-partner Slider
        $(".partner-slider").owlCarousel({
            margin: 100,
            loop: true,
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0 : {
                    items : 2
                },
                480 : {
                    items : 3
                },
                768 : {
                    items : 4
                },
                992 : {
                    items : 7
                }
            }
        });
        
        //------ SlickNav-MObile-menu
        $("#mobile-menu").slicknav({
            prependTo: '#mobile-menu-wrap'
        });
        
        //------ Mix It Up Plugin
        $(".items").mixItUp();
        
        //------ WOW Plugin
        new WOW().init();

        //------ Window-Scroll funtion
        $(window).scroll(function(){
            if($(this).scrollTop()>400){
                $(".gotoup").fadeIn();
            }
            else{
                $(".gotoup").fadeOut();
            }
        });
        
        //------ Scroll When click
         $(".gotoup").on('click', function(){
                $("html, body").animate({scrollTop:0}, 800);
            });


        


    });


    jQuery(window).load(function(){
        
        jQuery(".preloader-wrap").fadeOut(5000);
        
    });


}(jQuery));	