(function ($) {
	"use strict";
    
//------ Start Of Window Ready Function
    jQuery(document).ready(function($){

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        

        
//------ gmap-3
       var state = {lat: 23.758063, lng: 90.3844153};
        $(".map")
            .gmap3({
                center: state,
                zoom: 16,
                mapTypeId: "shadeOfGray", // to select it directly
                mapTypeControlOptions: {
                   mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGray"]
                }
               
        })
	      .marker({
	        position: state,
            
	      })
            .infowindow({
	        position: state,
	        content: '<div style="padding: 12px;"><h4>Hello Man<h4></div>',
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
        {name: "RRF Institute"}
        );

    }); 
//======= End Of Window Ready Function

//------ Start Of Window Load Function
    jQuery(window).load(function(){

        
    });
//------ End Of Window Load Function

}(jQuery));	