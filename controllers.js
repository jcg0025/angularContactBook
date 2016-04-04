var controllers = angular.module('myApp.controllers', []);
controllers.controller('homeController', ['$scope', 'StoreContact', function($scope, StoreContact){
    
    $scope.contact = {
        name: '',
        phoneNumber: '',
        email: ''
    }
      $scope.test = function() {
        StoreContact($scope.contact);
    }
    
    
}]);

controllers.controller('singleViewController', ['$scope', function($scope){

    
  
}])