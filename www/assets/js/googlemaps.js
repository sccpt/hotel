$(document).ready(function(){if($("#map").length){var h=[{featureType:"administrative",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#aaaaaa"},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"},{lightness:-30}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#cccccc"}]}];var f;var g={center:new google.maps.LatLng(4.17528,73.50888999999999),zoom:3,scrollwheel:false,panControl:false,mapTypeControl:false,streetViewControl:false,disableDefaultUI:false,zoomControl:false,styles:h};function e(){var b=new google.maps.Map(document.getElementById("map"),g);var a=new google.maps.LatLngBounds();var d=new google.maps.MarkerImage("images/icons/location-pin-3.png",null,null,null,new google.maps.Size(24,24));var c=new google.maps.Marker({position:new google.maps.LatLng(4.17528,73.50888999999999),map:b,title:"Safarihub",icon:d})}e();google.maps.event.addDomListener(window,"load",e)}});