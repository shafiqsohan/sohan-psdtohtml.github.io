(function ($) {
	"use strict";
    
//------ Start Of Window Ready Function
    jQuery(document).ready(function($){

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
//------ Search-BOX
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
        
//------ Off-Canvusmenu
        $(".menu-trigger").on("click", function(){
            $(".offcanvus-menu").addClass("active");
            $(".offcanvus-overlay").addClass("active");
            
        });
        $(".menu-close, .offcanvus-overlay").on("click", function(){
            $(".offcanvus-menu").removeClass("active");
            $(".offcanvus-overlay").removeClass("active");
        });
        
//------ case-study-carousel
        $(".case-study-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });
        
//------ case-study-carousel-3
        $(".case-study-carousel-3").owlCarousel({
            items: 4,
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });
        
//------ homepage-slides|| template-3
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'>", "<i class='zmdi zmdi-long-arrow-right'>"],
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            smartSpeed: 250
        });
    
//------ testimonial-carousel
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });
        
//------ Home-2 testimonial-carousel-2
        $(".testimonial-carousel-2").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });
        
//------ Home-1 Logo-carousel
        $(".logo-carousel").owlCarousel({
            items: 6,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            smartSpeed: 250
        });
       
//------ Single-testimonial-box activate
        $(".single-testimonial-box").hover(function() {
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass("active");
            
        });
        
//------ Magnific poupup vdo
        $(".video-play-btn").magnificPopup({
            type: 'video'
        });

    }); 
//------ End Of Window Ready Function

//------ Start Of Window Load Function
    jQuery(window).load(function(){

        
    });
//------ End Of Window Load Function

}(jQuery));	