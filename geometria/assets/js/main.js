(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".show-menu").on("click",function(){
          $(".offvcanvus-menu").addClass("active");  
          $(".offcanvus-overlay").addClass("active");  
        });
        
        $(".close-menu, .offcanvus-overlay").on("click", function(){
            $(".offvcanvus-menu").removeClass("active");
            $(".offcanvus-overlay").removeClass("active");
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	