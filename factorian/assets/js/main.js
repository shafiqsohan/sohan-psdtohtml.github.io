(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //Search-BOX
        $(".search-btn").on("click", function() {
            $(".header-search-bar").addClass("active");
            $(this).hide();
            $(".cross-btn").show();
        });
        
        $(".cross-btn").on("click", function() {
            $(".header-search-bar").removeClass("active");
            $(this).hide();
            $(".search-btn").show();
        });
        
        //home Slider
        $(".homepage-slides").owlCarousel({
            items:1,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            loop: true,
            autoplay: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
        });
        
        //slider text animation
        $(".homepage-slides").on("translate.owl.carousel",function(){
            
            $(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item .slide-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            
            $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item .slide-btn").addClass("animated fadeInUp").css("opacity", "1");
        });
        
        
        //magnatic-popup
         $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

            
        
        
        
        //wow-animation
        new WOW().init();
        
        //Window-Scroll funtion
        $(window).scroll(function(){
            if($(this).scrollTop()>400){
                $(".gotoup").fadeIn();
            }
            else{
                $(".gotoup").fadeOut();
            }
        });
        //Scroll When click
         $(".gotoup").click(function(){
                $("html, body").animate({scrollTop:0}, 800);
            });
    });


    jQuery(window).load(function(){

        jQuery(".factorian-slide-preloader-wrap").fadeOut(2000);
    });


}(jQuery));	 