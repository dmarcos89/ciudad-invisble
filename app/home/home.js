'use strict';

angular.module('MainApp').controller('HomeController', function($scope, Posts2, TopUsers) {
  $scope.message = 'Esta es la home';
  $scope.dynMarkers = [];

  Posts2.query(function(data){
    $scope.posts = data;




	  // for (var i = 0; i <= $scope.posts.length; i++) {
	  //   $scope.dynMarkers[i] = new google.maps.Marker({
   //      title: 'Titulo post'
   //    });
   //    var lat = $scope.posts[i].latitude;
   //    var lng = $scope.posts[i].longitude;
		 //  var loc = new google.maps.LatLng(lat, lng);

   //    var infoWindow = new google.maps.InfoWindow({
   //      content:'Hi<br/>I am an infowindow'
   //    });
   //        // alert(loc);
   //    $scope.dynMarkers[i].setPosition(loc);
   //    $scope.dynMarkers[i].setMap($scope.map);

   //    $scope.showInfoWindow = function() {
   //      infoWindow.open($scope.map, $scope.dynMarkers[i]);
   //    };
   //  }



    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(-34.901113, -56.164531),
        // mapTypeId: google.maps.MapTypeId.TERRAIN
        scrollwheel: false
      };

    $scope.map = new google.maps.Map(document.getElementById('map-view'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.latitude, info.longitude),
            title: info.title
          });

        // var foto = info.assets[0].file_url;
        marker.content = '<div class="infoWindowContent">'
                          +info.title+'</div>';
        
          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
          });
        
        $scope.markers.push(marker);
        
    }  
    
    for (var i = 0; i < data.length; i++){
      createMarker(data[i]);
      // console.log(data[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
      };





  });


});


