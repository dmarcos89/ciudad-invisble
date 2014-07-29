'use strict';

angular.module('MainApp').controller("CreateController", function($scope, Posts, fileReader) {
  
  $scope.message = "Crear un nuevo post";
  $scope.categories = [ {
                          title:"Arte",
                          photo: "http://placeimg.com/300/350/arch"
                        },
                        {
                          title:"Musica",
                          photo: "http://placeimg.com/300/350/arch"
                        },
                        {
                          title:"Arquitectura",
                          photo: "http://placeimg.com/300/350/arch"
                        }
                      ];

    $scope.Create = function() {

      // json nueva version con varias imagenes
      data = {post:{title: $scope.title, author: $scope.author, description: $scope.description, image: $scope.image, date: $scope.date, location: $scope.location, category: $scope.category, assets_images:[
        {data: $scope.imageSrc, filename: "01.jpg",content_type: "image/jpg"},
        {data: $scope.imageSrc2, filename: "02.jpg",content_type: "image/jpg"},
        {data: $scope.imageSrc3, filename: "03.jpg",content_type: "image/jpg"},
        {data: $scope.imageSrc4, filename: "04.jpg",content_type: "image/jpg"},
        {data: $scope.imageSrc5, filename: "05.jpg",content_type: "image/jpg"}
        ]}};
      
      // json version vieja
      // data = {post:{title: $scope.title, author: $scope.author, description: $scope.description, image: $scope.imageSrc, date: $scope.date, location:$scope.location , category: $scope.category}};
      Posts.save(data, successPostCallback, errorCallback);

      function successPostCallback(){
        alert("ok");
      }
      function errorCallback(){
        alert("error");
      }

    };


  $scope.category = "";
  $scope.catselect = function($var){
    $scope.category = $var;
  };



$scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
};


// SE REPITE 4 VECES PARA LAS 4 FOTOS EXTRA QUE SE AGREGAN. HAY QUE EMPROLIJAR ESTA CHANCHADA!!
$scope.getFile2 = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc2 = result;
                      });
};

$scope.getFile3 = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc3 = result;
                      });
};

$scope.getFile4 = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc4 = result;
                      });
};

$scope.getFile5 = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc5 = result;
                      });
};

// $scope.$on("fileProgress", function(e, progress) {
//         $scope.progress = progress.loaded / progress.total;
// });


// $scope.markers


});

// END CONTROLLER




// START DIRECTIVES FOR IMAGES PREVIEW
angular.module('MainApp').directive("ngFileSelect",function(){
  return {
    link: function($scope,el){
      el.bind("change", function(e){
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      });
    }
  };
});

// SE REPITE 4 VECES PARA LAS 4 FOTOS EXTRA QUE SE AGREGAN. HAY QUE EMPROLIJAR ESTA CHANCHADA!!
angular.module('MainApp').directive("ngFileSelect2",function(){
  return {
    link: function($scope,el){
      el.bind("change", function(e){
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile2();
      });
    }
  };
});

angular.module('MainApp').directive("ngFileSelect3",function(){
  return {
    link: function($scope,el){
      el.bind("change", function(e){
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile3();
      });
    }
  };
});

angular.module('MainApp').directive("ngFileSelect4",function(){
  return {
    link: function($scope,el){
      el.bind("change", function(e){
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile4();
      });
    }
  };
});

angular.module('MainApp').directive("ngFileSelect5",function(){
  return {
    link: function($scope,el){
      el.bind("change", function(e){
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile5();
      });
    }
  };
});




angular.module('MainApp').directive('backgroundImage', function(){
  return function(scope, element, attrs){
    restrict: 'A',
    attrs.$observe('backgroundImage', function(value) {
      element.css({
        'background': 'url(' + value +') no-repeat no-repeat center'
      });
    });
  };
});





// END DIRECTIVES