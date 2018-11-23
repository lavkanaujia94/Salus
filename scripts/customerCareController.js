

mainApp.controller('CustomerCareController', function($scope, $location) {

     $scope.routeLookup = function(searchString) {
         $location.path("/customerCareLookup").search({
             param: searchString
         });

     }
 });