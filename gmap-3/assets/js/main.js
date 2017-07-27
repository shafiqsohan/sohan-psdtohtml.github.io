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
            margin: 30,
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 250,
            responsive: {
                0 : {
                    items : 1
                },
                768 : {
                    items : 2
                },
                992 : {
                    items : 3
                }
            }
        });
        
//------ case-study-carousel-3
        $(".case-study-carousel-3").owlCarousel({
            loop: true,
            dots:true,
            nav: false,
            autoplay: true,
            smartSpeed: 250,
            responsive: {
                0 : {
                    items : 1
                },
                768 : {
                    items : 2
                },
                992 : {
                    items : 4
                }
            }
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
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            smartSpeed: 250,
            responsive: {
                0 : {
                    items : 2
                },
                768 : {
                    items : 4
                },
                992 : {
                    items : 6
                }
            }
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
        
//------ gmap-3
        var state = {lat: 23.758063, lng: 90.3844153};
        $(".map")
            .gmap3({
                zoom: 16,
                center: state,
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGray"]
        })
          .marker({
            position: state,
          })

          .infowindow({
            content: '<div style="padding: 12px;"><h4>Hello You.<h4></div>',
	        position: state,
	        pixelOffset : new google.maps.Size(0,-40),
	        padding: '20'
          })

          .then(function (infowindow) {
            infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
          })
          .styledmaptype(
        "shadeOfGray",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
        ],
        {name: "shade Of Gray"});

    }); 
//======= End Of Window Ready Function

//------ Start Of Window Load Function
    jQuery(window).load(function(){

        
    });
//------ End Of Window Load Function

}(jQuery));	