(function(a){var b={template_parallax:function(){a(".impx-parallax").parallax({speed:0.3})},template_gmap:function(){a("#impx-gmap").gMap({latitude:36.8426684,longitude:138.2923161,zoom:12,controls:{panControl:false,zoomControl:false,mapTypeControl:false,scaleControl:false,streetViewControl:false,overviewMapControl:false}})},template_gmap2:function(){a("#impx-contact-gmap").gMap({latitude:40.830043,longitude:-73.89160800000001,zoom:17,controls:{panControl:false,zoomControl:false,mapTypeControl:false,scaleControl:false,streetViewControl:false,overviewMapControl:false}})},template_toTop:function(){a(document).scroll(function(){var c=a(".to-top");if(a(this).scrollTop()>400){c.fadeIn()}else{c.fadeOut()}})},theme_init:function(){b.template_parallax();b.template_gmap();b.template_gmap2();b.template_toTop()}};jQuery(document).ready(function(c){b.theme_init()})})(jQuery);