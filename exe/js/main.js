(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        jQuery(".homepage-slides").owlCarousel({
            items:1,
            nav: true,
            navText: ["prev","next"]
        });
        
        $(".homepage-slides").on("translate.owl.carousel",function(){
            
            $(".single-slide-item h1").removeClass("animated tada").css("opacity", "0");
            
            $(".single-slide-item h2, .single-slide-item h4").removeClass("animated fadeInDown").css("opacity", "0");
            
            $(".single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".homepage-slides").on("translated.owl.carousel", function(){
            
            $(".single-slide-item h1").addClass("animated tada").css("opacity", "1");
            
            $(".single-slide-item h2, .single-slide-item h4").addClass("animated fadeInDown").css("opacity", "1");
            
            $(".single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
        });
        
        
        
        
        
        jQuery(".items").mixItUp();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	